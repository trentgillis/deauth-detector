## Prerequisuites

* Python3
* pip
* npm
* node
* aircrack-ng
* mongodb

## Steps

1. Download [BalenaEtcher](https://www.balena.io/etcher/)

2. Download the RaspberryPi - Deauthentication Detection image from [here]()

3. Use BalenaEtcher to burn the Deauthencation Detection .img to an sd card

4. Boot up the raspberrypi with a monitor mode enabled wifi card

5. set environmental variable with monitor mode device name

```
export monitorDevice="wlan1mon"
```

6. Run the deploy.sh bash script

```
sudo -E bash -c './deploy.sh'
```