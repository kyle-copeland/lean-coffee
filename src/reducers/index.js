import {
  ADD_TOPIC, VOTE_FOR_TOPIC
} from '../constants';

const initialState = {
    topics: []
}

function leanCoffeeApp(state = initialState, action) {
    switch(action.type) {
        case ADD_TOPIC:
            return Object.assign({}, state, {
                topics: [...state.topics, {
                    topic: action.topic,
                    id: 1,
                    votes: 0
                }]
            });
        case VOTE_FOR_TOPIC:
            
        default:
          return state;
    }
}

export default leanCoffeeApp;