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
    };

    expect(actions.voteForTopic()).toEqual(expectedAction);
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
      topicId: 1,
      columnId: 2,
    };

    expect(actions.moveTopic(1, 2)).toEqual(expectedAction);
  });

  it('should change to the next topic', () => {
    const expectedAction = ({
      type: types.NEXT_TOPIC,
    });

    expect(actions.nextTopic()).toEqual(expectedAction);
  });
});
