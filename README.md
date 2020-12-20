# MQTT Practice

## Overview

This repository stores things I've tried to catch up on MQTT.

The server runs on rabbitmq and use rabbitmq-mqtt plugin.

## Getting Started

<img src="https://github.com/bur8787/mqtt-practice/raw/master/static/3-flow.png"/>

![video](https://github.com/bur8787/mqtt-practice/raw/master/static/1-getting-started.gif)

### Run server

#### Install MQTT BOX

http://workswithweb.com/html/mqttbox/installing_apps.html#install_on_mac

#### Run MQTT broker

```
$ cd docker-compose 
$ docker-compose up -d
```

if it runs, you can access to http://localhost:15672

#### Run MQTT subscriber

```
$ npm start
```

#### Test Connection

mqtt/tcp, http://localhost:1883  

##### MQTTBox setting

<img src="https://github.com/bur8787/mqtt-practice/raw/master/static/2-mqttbox-setting.png"/>
