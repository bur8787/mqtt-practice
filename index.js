var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883')

client.on('error',
    function (err) {
        console.log("error: ", err)
        client.end()
    }
)

client.on('connect',
    function () {
        client.subscribe('test', function (err) {
            if (err) {
                console.log("error: ", err)
            }
            console.log("subscribing!")
        })
    }
)

client.on('message', function (topic, message) {
    console.log(message.toString())
})