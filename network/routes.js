const express = require('express');
//const message = require('../components/message/network');
const user = require('../components/user/network');
const requestlist = require('../components/requestlist/network');
const products = require('../components/products/network');
//const chat = require('../components/chat/network');


const routes = function(server){
//  server.use('/message', message);
  server.use('/user', user);
  server.use('/requestlist', requestlist);
  server.use('/products', products);
//  server.use('/chat', user);
}

module.exports = routes;