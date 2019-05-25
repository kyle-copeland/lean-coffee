import * as actions from '.';
import * as types from '../constants';

describe('topic actions', () => {
  it('should create a new topic', () => {
    const topic = '20% Time';

    const expectedAction = {
      type: types.ADD_TOPIC,
      topic,
    };

    expect(actions.addTopic(topic)).toEqual(expectedAction);
  });

  it('should increase the vote count', () => {
    const expectedAction = {
      type: types.VOTE_FOR_TOPIC,
      topic: 'Equal Rights',
    };

    expect(actions.voteForTopic('Equal Rights')).toEqual(expectedAction);
  });

  it('should sort the topics', () => {
    const expectedAction = {
      type: types.SORT_TOPICS,
    };

    expect(actions.sortTopics()).toEqual(expectedAction);
  });

  it('should move the topic to a new column', () => {
    const expectedAction = {
      type: types.MOVE_TOPIC,
      topic: '20% Time',
      columnId: 2,
    };

    expect(actions.moveTopic('20% Time', 2)).toEqual(expectedAction);
  });

  it('should change to the next topic', () => {
    const expectedAction = ({
      type: types.NEXT_TOPIC,
    });

    expect(actions.nextTopic()).toEqual(expectedAction);
  });

  it('should initialize socket.io', () => {
    const expectedAction = ({
      type: types.INIT_SOCKET_IO,
    });

    expect(actions.initSocketIo()).toEqual(expectedAction);
  });
});
