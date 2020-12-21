const username = "mqttuser"
const password = "password"
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883', {
    username, password
})

client.on('error',
    function (err) {
        console.log("error: ", err)
        client.end()
    }
)

client.on('connect', function () {
        client.subscribe('test', {qos: 1}, function (err) {
            if (err) {
                console.log("error: ", err)
            }
            console.log("subscribing!")
        })
    }
)

client.on('message', function (topic, message, packet) {
    console.log("====================================================")
    console.log({topic})
    console.log({message: message.toString()})
    console.log({packet})
})