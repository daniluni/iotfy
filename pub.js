// Publicador MQTT
var mqtt= require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883')
var topic = 'topico'
var message= 'apagado'

client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic,message)
        //simulación del estado del dispositivo
        if ( Math.floor(Math.random() *2)==1) {
            message='1,encendido'
        }
        else {
            message='1,apagado'
        }
        
        console.log('Mensaje enviado', message)
    },50000)
})
