import sys
from scapy.all import *

if(len(sys.argv) < 2):
    print("You have to supply a monitor mode enabled wifi card")
    sys.exit(0)

interface = sys.argv[1]

def sniffReq(p):
    if(p.hasLayer(Dot11Deauth)):
        print(f"Deauth Found from AP {p.Dot11.addr2} Client {p.Dot11.addr1}, Reason {p.Dot11Deauth.reason}")
    if(p.hasLayer(Dot11AssoReq)):
        print(f"Association request from Station {Dot11.addr1}, Client {p.Dot11.addr2}, AP {p.Dot11Elt.info}")
    if(p.hasLayer(Dot11Auth)):
        print(f"Authentication Request from {Dot11.addr1} to AP {p.Dot11.addr2}")
sniff(iface=interface,prn=sniffReq)