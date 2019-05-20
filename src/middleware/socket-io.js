
import { INIT_SOCKET_IO } from '../constants';
import WebSocket from '../websocket';

const createSocketIoMiddleware = () => {
  const websocket = new WebSocket();
  return store => next => (action) => {
    if (action.type === INIT_SOCKET_IO) {
      websocket.connect('http://localhost:3030', store.dispatch);
    } else if (!action.server) {
      websocket.send(action);
    }
    next(action);
  };
};
export default createSocketIoMiddleware();
