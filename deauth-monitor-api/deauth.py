import sys
from scapy.all import *

def pkt_callback(pkt):
  pkt.show()