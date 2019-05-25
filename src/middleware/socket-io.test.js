import io from 'socket.io-client';
import middleware from './socket-io';
import { INIT_SOCKET_IO } from '../constants';

const mockSocketOn = jest.fn();
const mockSocketEmit = jest.fn();
jest.mock('socket.io-client', () => jest.fn().mockImplementation(() => ({
  on: mockSocketOn,
  emit: mockSocketEmit,
})));

const store = {
  dispatch: jest.fn(),
};

const next = jest.fn();

describe('socket.io middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    middleware(store)(next)({
      type: INIT_SOCKET_IO,
    });
  });

  it('initializes on INIT_SOCKET_IO call', () => {
    expect(io).toBeCalledWith('http://localhost:3030');
    expect(mockSocketOn).toBeCalledWith('action', expect.anything());
  });

  it('calls next every time', () => {
    middleware(store)(next)({});
    expect(next).toHaveBeenCalled();
  });

  it('sends other actions to server', () => {
    const action = {
      type: 'ANY_ACTION',
      payload: {
        field: 'value',
      },
    };
    middleware(store)(next)(action);

    expect(mockSocketEmit).toBeCalledWith('action', action);
  });

  it('does not emit server messages', () => {
    const action = {
      type: 'ANY_ACTION',
      payload: {
        field: 'value',
      },
      server: true,
    };
    middleware(store)(next)(action);
    expect(mockSocketEmit).not.toHaveBeenCalledWith('action', action);
  });
});
