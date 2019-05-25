const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

const actions = [];
io.on('connection', (socket) => {
  actions.forEach((action) => {
    socket.emit('action', action);
  });

  socket.on('action', (msg) => {
    const actionFromServer = {
      ...msg,
      server: true,
    };
    actions.push(actionFromServer);
    socket.broadcast.emit('action', actionFromServer);
  });
});

http.listen(3030, () => {
});
