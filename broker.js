// MQTT broker
var mosca = require('mosca')
var settings = {port: 1883}
var broker = new mosca.Server(settings)

// MySQL 
var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'patoman',
    database: 'iotfy'
})
db.connect(()=>{
    console.log('Database connected!')
})


broker.on('ready', ()=>{
    console.log('Broker is ready!')
})

broker.on('published', (packet)=>{
    message = packet.payload.toString()
    const _message=message.split(",")
    const _estado=_message[1]
    const _dispositivos_id=parseInt(_message[0],10)
    console.log(_estado,_dispositivos_id)

    console.log('*',_estado,_dispositivos_id,'*')
    const query='CALL spPrueba(?,?);'
    db.query(query, [_estado,_dispositivos_id], (err, rows, fields) => {
      if(!err) {
        console.log('no hay ', err);
      } else {
        
        console.log(err);
      }
    });









  });



