var express = require('express');
var socket = require('socket.io');
var app = express.createServer();

app.all('*', function (req, res) {
    res.sendfile('.' + req.path);
});
var io = socket.listen(app);
var es = ['connected', 'who', 'identify', 'calibrate', 'data'];
io.sockets.on('connection', function (client) {
    console.log('Client connected...');
    client.on('who',function(msg){
        //client.broadcast.emit('who',msg);
        io.sockets.emit('who',msg);
  });
    client.on('identify',function(msg){
        //client.broadcast.emit('identify',msg);
        io.sockets.emit('identify',msg);
  });
    client.on('connected',function(msg){
        //client.broadcast.emit('connected',msg);
        io.sockets.emit('connected',msg);
  });
    client.on('calibrate',function(msg){
        //client.broadcast.emit('calibrate',msg);
        io.sockets.emit('calibrate',msg);
  });
    client.on('data',function(msg){
        //client.broadcast.emit('connected',msg);
        io.sockets.emit('data',msg);
  });
    /*for (i = 0; i < es.length; i++) {
        client.on(es[i], function (msg) {
            client.broadcast.emit(es[i], msg);
            io.sockets.emit(es[i], msg);
        });
    }*/
});



app.listen(8081);
