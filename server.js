const express = require('express');
const app = express();
const server = require('http').Server(app);
/*
var fs = require('fs');
var key = fs.readFileSync('encryption/private.key');
var cert = fs.readFileSync( 'encryption/primary.crt' );
var ca = fs.readFileSync( 'encryption/intermediate.crt' );
var options = {
  key: key,
  cert: cert,
  ca: ca
};
const server2 = require('https').Server(app,options);
*/

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors(
  {
    origin: '*'
  }
));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));
server.listen(5500,function(){
  console.log('La App esta en: http://api.gluck3d.com.ar:5500');
})
/*
server2.listen(5600,function(){
  console.log('La App esta en: https://api.gluck3d.com.ar:5600');
})
*/