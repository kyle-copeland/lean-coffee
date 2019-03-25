import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { List, Icon } from 'antd';
import { findDOMNode } from 'react-dom';
import { ItemTypes } from '../constants/dnd-constants';

const topicSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },
};

const IconText = ({ votes, onClick }) => (
  <span role="button" onClick={onClick}>
    <Icon type="like" style={{ marginRight: 8 }} />
    {votes}
  </span>
);

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const Topic = ({
  id, topic, votes, onVoteForTopicClick, connectDragSource, isDragging,
}) => (
  <List.Item
    ref={instance => connectDragSource(findDOMNode(instance))}
    key={id}
    actions={[<IconText type="star-0" votes={votes} onClick={() => onVoteForTopicClick(id)} />]}
    style={{
      opacity: isDragging ? 0.5 : 1,
    }}
  >
    {topic}
  </List.Item>
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
