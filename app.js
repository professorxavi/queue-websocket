const http = require('http').createServer();
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.on('add user', (msg) => {
    io.emit('add user', msg);
  });
  socket.on('update queue', (msg) => {
    io.emit('update queue', msg);
  });
  socket.on('update team', (msg) => {
    io.emit('update team', msg);
  });
});

http.listen(4000, () => {
});
