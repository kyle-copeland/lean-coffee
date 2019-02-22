import { ADD_TOPIC, VOTE_FOR_TOPIC } from '../constants';

export const addTopic = (topic) => ({
  type: ADD_TOPIC,
  topic
});

export const voteForTopic = (id) => ({
  type: VOTE_FOR_TOPIC,
  id
});