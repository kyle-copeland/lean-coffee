import io from 'socket.io-client';

export default class WebSocket {
  connect(url, dispatch) {
    this.socket = io(url);
    this.socket.emit('join_room', window.location.pathname.substring(1));
    this.socket.on('action', (action) => {
      dispatch(action);
    });
  }

  send(action) {
    this.socket.emit('action', action);
  }
}
