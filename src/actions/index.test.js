import * as actions from '../actions';
import * as types from '../constants';

describe('topic actions', () => {
  it('should create a new topic', () => {
    const topic = '20% Time';

    const expectedAction = {
        type: types.ADD_TOPIC,
        topic
    };

    expect(actions.addTopic(topic)).toEqual(expectedAction);
  });

  it('should increase the vote count', () => {
    const expectedAction = {
        type: types.VOTE_FOR_TOPIC
    }

    expect(actions.voteForTopic()).toEqual(expectedAction);
  });
});