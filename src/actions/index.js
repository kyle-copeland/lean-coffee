import {
  ADD_TOPIC, VOTE_FOR_TOPIC, SORT_TOPICS, MOVE_TOPIC,
} from '../constants';

export const addTopic = topic => ({
  type: ADD_TOPIC,
  topic,
});

export const voteForTopic = id => ({
  type: VOTE_FOR_TOPIC,
  id,
});

export const sortTopics = () => ({
  type: SORT_TOPICS,
});

export const moveTopic = (topicId, columnId) => {
  console.log(topicId, columnId);
  return {
    type: MOVE_TOPIC,
    topicId,
    columnId,
  };
};
