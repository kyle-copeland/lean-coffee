import reducer from '../reducers';
import * as types from '../constants';

describe('topic reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        topics: []
    });
  });

  it('should add a topic', () => {
      expect(reducer(undefined, {
          type: types.ADD_TOPIC,
          topic: '20% Time'
      })).toEqual({
          topics: [{
              topic: '20% Time',
              id: 1,
              votes: 0
          }]
      });
  })

  it('should increase the votes by 1', () => {
      expect(reducer({
          topics: [{
              id: 1,
              votes: 0,
              topic: '20% Time'
          }]
        }, {
              type: types.VOTE_FOR_TOPIC,
              id: 1
          })).toEqual({
            topics: [{
              id: 1,
              votes: 1,
              topic: '20% Time'
            }]
      });
    });
});