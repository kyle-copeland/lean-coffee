import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App';
import leanCoffeeApp from './reducers';
import socketIoMiddleware from './middleware/socket-io';

const store = createStore(leanCoffeeApp, composeWithDevTools(
  applyMiddleware(socketIoMiddleware),
));

ReactDOM.render(
  <Provider store={store}>
    <DragDropContextProvider backend={HTML5Backend}>
      <App />
    </DragDropContextProvider>
  </Provider>,
  document.getElementById('root'),
);
