## Prerequisuites

* Python3
* pip
* npm
* node
* aircrack-ng
* mongodb

## Steps

1. Start monitor mode on wifi card to create 'wlan1mon'

```
sudo airmon-ng start wlan1
```

2. set environmental variable with monitor mode device name

```
export monitorDevice="wlan1mon"
```

3. Run the deploy.sh bash script

```
./deploy.sh
```

## troubleshooting

If you get the following error

```
[ Error ] Please provide monitor mode interface name 
```

Change the monitorDevice environmental variable to the proper monitor mode enabled device.


