import {
  ADD_TOPIC, VOTE_FOR_TOPIC, SORT_TOPICS, MOVE_TOPIC,
} from '../constants';

const initialState = {
  topics: [],
};

function leanCoffeeApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TOPIC:
      return Object.assign({}, state, {
        topics: [...state.topics, {
          topic: action.topic,
          id: 1,
          votes: 0,
          columnId: 0
        }],
      });
    case VOTE_FOR_TOPIC: {
      const newTopics = state.topics.map((topic) => {
        if (action.id !== topic.id) {
          return topic;
        }

        return {
          ...topic,
          votes: topic.votes + 1,
        };
      });

      return {
        ...state,
        topics: newTopics,
      };
    }
    case SORT_TOPICS: {
      return {
        ...state,
        topics: state.topics.sort((a, b) => b.votes - a.votes),
      };
    }
    case MOVE_TOPIC: {
      const newTopics = state.topics.map(topic => {
        if(action.topicId !== topic.id) {
          return topic;
        }

        return {
          ...topic,
          columnId: action.columnId
        };
      });
      return {
        ...state,
        topics: newTopics,
      };
    }
    default:
      return state;
  }
}

export default leanCoffeeApp;
