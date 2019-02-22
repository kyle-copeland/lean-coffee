import reducer from '.';
import * as types from '../constants';

let id = 0;

const createNewTopic = () => {
  id += 1;
  return {
    id,
    votes: 0,
    topic: '20% Time',
    columnId: 0
  };
};


describe('topic reducer', () => {
  let topic;
  beforeEach(() => {
    topic = createNewTopic();
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      topics: [],
    });
  });

  it('should add a topic', () => {
    expect(reducer(undefined, {
      type: types.ADD_TOPIC,
      topic: '20% Time',
    })).toEqual({
      topics: [{
        topic: '20% Time',
        id: 1,
        votes: 0,
        columnId:0
      }],
    });
  });

  it('should increase the votes by 1', () => {
    const initalState = {
      topics: [topic],
    };

    expect(reducer(initalState, {
      type: types.VOTE_FOR_TOPIC,
      id: topic.id,
    })).toEqual({
      topics: [{
        ...topic,
        votes: 1,
      }],
    });
  });

  it('should sort topics by vote count', () => {
    const topic2 = createNewTopic();
    topic.votes = 10;
    topic2.votes = 21;

    const initalState = {
      topics: [topic, topic2],
    };

    expect(reducer(initalState, {
      type: types.SORT_TOPICS,
    })).toEqual({
      topics: [topic2, topic],
    });
  });

  it('should move the topic to a new column', () => {
    const initalState = {
      topics: [topic]
    };

    expect(reducer(initalState, {
      type: types.MOVE_TOPIC,
      topicId: topic.id,
      columnId: 3
    })).toEqual({
      topics: [{
        ...topic,
        columnId: 3
      }]
    });
  })
});
