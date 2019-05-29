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
  socket.on('show team', (msg) => {
    showTeam();
  });
  socket.on('kill add', (msg) => {
    io.emit('update table', msg);
  });
  socket.on('death added', (msg) => {
    io.emit('update table', msg);
  });
});

http.listen(4000, () => {
  setInterval(() => {showTeam();}, 192427);
});

function showTeam() {
  io.emit('show team', 'things');
  setTimeout(() => {io.emit('hide team', 'things');}, 30000);
}
