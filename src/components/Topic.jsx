import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { List, Icon, Card } from 'antd';
import { ItemTypes } from '../constants/dnd-constants';

const topicSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },
};

const IconText = ({ votes, onClick }) => (
  <button type="button" onClick={onClick}>
    <Icon type="like" style={{ marginRight: 8 }} />
    {votes}
  </button>
);

IconText.propTypes = {
  votes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const Topic = ({
  id, topic, votes, onVoteForTopicClick, isDragging,
}) => (
  <List.Item
    key={id}
    style={{
      opacity: isDragging ? 0.5 : 1,
      padding: 5,
    }}
  >
    <Card
      style={{ width: '100%' }}
      actions={[<IconText votes={votes} onClick={() => onVoteForTopicClick(id)} />]}
    >
      <Card.Meta
        title={topic}
      />
    </Card>

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
  isDragging: PropTypes.bool.isRequired,
};

export default DragSource(ItemTypes.TOPIC, topicSource, collect)(Topic);
