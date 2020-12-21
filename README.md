# MQTT Practice

## Overview

This repository includes my catch-up on MQTT.

The system architecture is as follows.
- RabbitMQ and rabbitmq-mqtt plugin are used for MQTT broker.
- NodeJS is used for a subscriber.
- MQTTBox is used for a publisher.

<img src="https://github.com/bur8787/mqtt-practice/raw/master/static/3-flow.png"/>

## Getting Started

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

##### rabbitmq-mqtt
- RabbitMQ supports MQTT 3.1.1 

https://www.rabbitmq.com/mqtt.html

#### Run MQTT subscriber

```
$ npm start
```

#### Test Connection

mqtt/tcp, http://localhost:1883  

##### MQTTBox setting

<img src="https://github.com/bur8787/mqtt-practice/raw/master/static/2-mqttbox-setting.png"/>

#### Appendix

As described in the following link, there are 3 Quality of Service levels.
https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/

- At most once (QoS0)
- At least once (QoS1)
- Exactly once (QoS2)

RabbitMQ does not support QoS2 subscriptions.
Therefore, it behaves as follows.

| Publisher\Subscriber | QoS0 | QoS1 | QoS2 |
|----------------------|------|------|------|
| QoS0                 | QoS0 | QoS0 | QoS0 |
| QoS1                 | QoS0 | QoS1 | QoS1 |
| QoS2                 | QoS0 | QoS1 | QoS1 |


