import io from 'socket.io-client';

export default class WebSocket {
  connect(url, dispatch) {
    this.socket = io(url);

    this.socket.on('action', (action) => {
      dispatch(action);
    });
  }

  send(action) {
    this.socket.emit('action', action);
  }
}
