import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { List } from 'antd';
import Topic from '../containers/Topic';
import AddTopic from './AddTopic';
import { ItemTypes } from '../constants/dnd-constants';

const columnTarget = {
  drop(props, monitor) {
    props.handleMoveTopic(monitor.getItem().id, props.id);
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
});

const Column = ({
  title, showAddTopic, topics, onAddTopicClick, connectDropTarget,
}) => {
  const topicList = topics.map(topic => <Topic {...topic} />);

  return connectDropTarget(
    <div className="Column">
      <h1>{title}</h1>
      {showAddTopic && <AddTopic onAddTopicClick={onAddTopicClick} />}
      <List>{topicList}</List>
    </div>,
  );
};

Column.defaultProps = {
  showAddTopic: false,
  topics: [],
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTopicClick: PropTypes.func.isRequired,
  showAddTopic: PropTypes.bool,
  topics: PropTypes.arrayOf(Object),
  connectDropTarget: PropTypes.func.isRequired,
};

export default DropTarget(ItemTypes.TOPIC, columnTarget, collect)(Column);
