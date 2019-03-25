import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../constants/dnd-constants';

const topicSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const Topic = ({
  id, topic, votes, onVoteForTopicClick, connectDragSource, isDragging,
}) => connectDragSource(
  <li
    key={id}
    style={{
      opacity: isDragging ? 0.5 : 1,
    }}
  >
    {topic}
    <span>
      {' '}
        Votes:
      {votes}
    </span>
    <button type="button" onClick={() => onVoteForTopicClick(id)}>Add Vote</button>
  </li>,
);

Topic.defaultProps = {
  votes: 0,
};

Topic.propTypes = {
  onVoteForTopicClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  votes: PropTypes.number,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default DragSource(ItemTypes.TOPIC, topicSource, collect)(Topic);
