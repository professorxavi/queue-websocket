// const express = require('express')();
// const http = require('http').Server(express);
const http = require('http').createServer();
const io = require('socket.io')(http);

// express.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
  socket.on('add user', (msg) => {
    io.emit('add user', msg);
  });
  socket.on('update queue', (msg) => {
    io.emit('update queue', msg);
  });
});

http.listen(3500, () => {
  console.log('listening on *:3500');
});
