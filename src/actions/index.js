import {
  ADD_TOPIC, VOTE_FOR_TOPIC, SORT_TOPICS, MOVE_TOPIC, NEXT_TOPIC, INIT_SOCKET_IO,
} from '../constants';

export const addTopic = topic => ({
  type: ADD_TOPIC,
  topic,
});

export const voteForTopic = topic => ({
  type: VOTE_FOR_TOPIC,
  topic,
});

export const sortTopics = () => ({
  type: SORT_TOPICS,
});

export const moveTopic = (topic, columnId) => ({
  type: MOVE_TOPIC,
  topic,
  columnId,
});

export const nextTopic = () => ({
  type: NEXT_TOPIC,
});

export const initSocketIo = () => ({
  type: INIT_SOCKET_IO,
});
