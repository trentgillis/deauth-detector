import sys
import scapy.all as scapy

Field = {
'count'      : (5,    False) ,
'iface'      : (None, True),  
'timeout'    : (None, False),
}

# Main Class For Finding Deauthentication Packets
class DeauthenticationDetector:
 def __init__(self, *args, **kwargs):
  """
  All Arguments And Keywords Will Directly Passed To
  Python Scapy Sniff Function.

  """
  self.args = args
  self.kwargs = kwargs
  self.data={}
  self.Sniffing_Start()

 def extract_packets(self, pkt):
  """
  Function For Extracting Packets.
   This Function Is Specially Created For Filtering 
   Deauthentication Packets.
  """
  if pkt.haslayer(scapy.Dot11Deauth):
   victim1 = pkt.addr2
   victim2 = pkt.addr1
   if str([victim1, victim2]) in self.data.keys():
    self.data[str([victim1, victim2])]=self.data[str([victim1, victim2])]+1
   else:
    self.data[str([victim1, victim2])]=1
   self.print_values()
  return

 def print_values(self):
  """
  Function For Printing Values
  """
  line = 0
  for a,b in self.data.iteritems():
   v1, v2 = eval(a)
   print(f"\t[#] Deauthentication Packet : {v1} <---> {v2} | Packets : {b}")
   line+=1

  # Backspace Trick
  sys.stdout.write("\033[{}A".format(line))
  return

 def Sniffing_Start(self):
  '''
  Function For Creating Python Scapy.sniff Function
  '''
  scapy.sniff(prn=self.extract_packets, *self.args, **self.kwargs)
  return




# Main Function
def main(*args, **kwargs):
 DeauthenticationDetector(*args, **kwargs)
 return


# Main Trigger
if __name__=='__main__':
 if len(sys.argv)==2:
  main(iface=sys.argv[1])
 else:
  print(f" [ Error ] Please Provide Monitor Mode Interface Name ALso \n\n\t:~# sudo {sys.argv[0]} mon0 ")