import uniqid from 'uniqid';
import {
  ADD_TOPIC, VOTE_FOR_TOPIC, SORT_TOPICS, MOVE_TOPIC,
  TO_DISCUSS_COLUMN, DISCUSSING_COLUMN, NEXT_TOPIC,
  DISCUSSED_COLUMN, SYNC_STATE,
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
          id: uniqid(),
          votes: 0,
          columnId: TO_DISCUSS_COLUMN,
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
      const newTopics = state.topics.map((topic) => {
        if (action.topicId !== topic.id) {
          return topic;
        }

        return {
          ...topic,
          columnId: action.columnId,
        };
      });
      return {
        ...state,
        topics: newTopics,
      };
    }
    case NEXT_TOPIC: {
      const nextTopic = state.topics.filter(topic => topic.columnId === TO_DISCUSS_COLUMN)[0];

      const newTopics = state.topics.map((topic) => {
        if (topic.id === nextTopic.id) {
          return {
            ...topic,
            columnId: DISCUSSING_COLUMN,
          };
        }

        if (topic.columnId === DISCUSSING_COLUMN) {
          return {
            ...topic,
            columnId: DISCUSSED_COLUMN,
          };
        }
        return topic;
      });
      return {
        ...state,
        topics: newTopics,
      };
    }
    case SYNC_STATE: {
      return action.state;
    }
    default:
      return state;
  }
}

export default leanCoffeeApp;
