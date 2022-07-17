//import * as mqtt from mqtt;
//const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://test.mosquitto.org");

client.on("connect", function () {
  client.subscribe("digitalaeskytu", function (err) {
    if (!err) {
      client.publish("digitalaeskytu", "Hello mqtt");
    }
  });
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
