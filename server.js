const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', (socket) => {
  console.log('USER CONNECTED');

  socket.on('action', (msg) => {
    socket.broadcast.emit('action', {
      ...msg,
      server: true,
    });
  });
});

http.listen(3030, () => {
  console.log('listening on *:3030');
});
