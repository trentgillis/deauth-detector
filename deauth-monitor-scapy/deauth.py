import sys
import time
import scapy.all as scapy
import json

from pymongo import MongoClient
from maclookup import ApiClient

# Mac lookup client - free for 1000 requests
mac_client = ApiClient("at_JsS3YEzdvi4nFYAQBUF5oQMe9tAYb")

# MongoDB connection
client = MongoClient('localhost', 27017)
db = client['deauth_attacks']
attacks = db.attacks

# Router mac
HARDCODED_ROUTER_MAC = "20:4e:7f:0e:df:46"

class DeauthenticationDetector:
    def __init__(self, *args, **kwargs):
        '''
        All Arguments And Keywords Will Directly Passed To
        Python Scapy Sniff Function.

        '''
        self.args = args
        self.kwargs = kwargs
        self.data = {}
        self.Sniffing_Start()

    def extract_packets(self, pkt):
        '''
        Function For Extracting Packets.
          This Function Is Specially Created For Filtering 
          Deauthentication Packets.
        '''
        if pkt.haslayer(scapy.Dot11Deauth) and pkt.addr2 is not None and pkt.addr3 is not None:
            addr1 = pkt.addr1
            addr2 = pkt.addr2
            flag = str(pkt.ChannelFlags)
            self.save_packet(addr1, addr2, pkt.dBm_AntSignal, flag, pkt.len, pkt.reason)

        return

    def Sniffing_Start(self):
        '''
        Function For Creating Python Scapy.sniff Function
        '''
        scapy.sniff(prn=self.extract_packets, *self.args, **self.kwargs)
        return

    def save_packet(self, addr1, addr2, signal_strength, channel_flags, packet_length, pktType):
        '''
        Function to save packet to mongoDB
        '''
        # Need to have hardcoded router mac address to figure out which 
        # MAC address is the router and which is the victim
        if(addr1 == HARDCODED_ROUTER_MAC):
            router = addr1
            victim = addr2
        else:
            router = addr2
            victim = addr1

        router_info = self.lookup_mac(router)
        victim_info = self.lookup_mac(victim)

        attacks.insert_one({
            'router': router,
            'victim': victim,
            'routerInfo': router_info,
            'victimInfo': victim_info,
            'timestamp': int(time.time()),
            'signalStrength': signal_strength,
            'channelFlags': channel_flags,
            'packetLength': packet_length,
            'type': pktType
        })

        if str([router, victim]) in self.data.keys():
            self.data[str([router, victim])] = self.data[str([router, victim])]+1
        else:
            self.data[str([router, victim])] = 1
        
        return

    def lookup_mac(self, mac_address):
        '''
        Looks up mac address using https://macaddress.io
        '''
        mac_info = mac_client.get(mac_address.replace(":", ""))

        return json.dumps({
            'oui': mac_info.vendor_details.oui,
            'is_private': mac_info.vendor_details.is_private,
            'company_name': mac_info.vendor_details.company_name,
            'company_address': mac_info.vendor_details.company_address,
            'country_code': mac_info.vendor_details.country_code
        })


def main(*args, **kwargs):
    DeauthenticationDetector(*args, **kwargs)
    return

if __name__ == '__main__':
    if len(sys.argv) == 2:
        print(f"Started monitoring on {sys.argv[1]}")
        print("Press CTRL+C to exit")
        main(iface=sys.argv[1])
    else:
        print(f" [ Error ] Please Provide Monitor Mode Interface Name Also \n\n\t:~# sudo {sys.argv[0]} mon0 ")
