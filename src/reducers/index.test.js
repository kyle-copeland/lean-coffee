import reducer from '.';
import * as types from '../constants';

let id = 0;

const createNewTopic = () => {
  id += 1;
  return {
    id,
    votes: 0,
    topic: '20% Time',
    columnId: 0,
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
    const newState = reducer(undefined, {
      type: types.ADD_TOPIC,
      topic: '20% Time',
    });

    expect(newState.topics[0].topic).toEqual('20% Time');
    expect(newState.topics[0].columnId).toEqual(types.TO_DISCUSS_COLUMN);
    expect(newState.topics[0].votes).toEqual(0);
  });

  it('should increase the votes by 1', () => {
    const initalState = {
      topics: [topic],
    };

    expect(reducer(initalState, {
      type: types.VOTE_FOR_TOPIC,
      topic: topic.topic,
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
      topics: [topic],
    };

    expect(reducer(initalState, {
      type: types.MOVE_TOPIC,
      topicId: topic.id,
      columnId: 3,
    })).toEqual({
      topics: [{
        ...topic,
        columnId: 3,
      }],
    });
  });

  describe('NEXT_TOPIC action', () => {
    it('should move the first topic to discussing', () => {
      const initialState = {
        topics: [topic],
      };

      expect(reducer(initialState, {
        type: types.NEXT_TOPIC,
      })).toEqual({
        topics: [{
          ...topic,
          columnId: types.DISCUSSING_COLUMN,
        }],
      });
    });

    it('shoud move the currently discussed item to done', () => {
      const topic2 = createNewTopic();
      const initalState = {
        topics: [{
          ...topic,
          columnId: types.TO_DISCUSS_COLUMN,
        }, {
          ...topic2,
          columnId: types.DISCUSSING_COLUMN,
        }],
      };

      expect(reducer(initalState, {
        type: types.NEXT_TOPIC,
      })).toEqual({
        topics: [{
          ...topic,
          columnId: types.DISCUSSING_COLUMN,
        }, {
          ...topic2,
          columnId: types.DISCUSSED_COLUMN,
        }],
      });
    });
  });
});
