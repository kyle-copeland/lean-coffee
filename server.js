const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

const port = 3030;
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

const actions = [];
io.on('connection', (socket) => {
  logger.info('Client Connected');
  let roomId;
  socket.on('join_room', (_roomId) => {
    roomId = _roomId;
    socket.join(roomId);
    logger.info(`Joined Room ${roomId}`);
  });

  actions.forEach((action) => {
    socket.to(roomId).emit('action', action);
  });

  socket.on('action', (msg) => {
    logger.info(`Action Emitted: ${msg}`);
    const actionFromServer = {
      ...msg,
      server: true,
    };
    actions.push(actionFromServer);
    socket.to(roomId).broadcast.emit('action', actionFromServer);
  });
});

http.listen(port, () => {
  logger.info(`Server listnening on port ${port}`);
});
