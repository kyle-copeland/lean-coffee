import React from 'react';
import PropTypes from 'prop-types';
import Topic from '../containers/Topic';
import AddTopic from './AddTopic';

const Column = ({
  title, showAddTopic, topics, onAddTopicClick,
}) => {
  const topicList = topics.map(topic => <Topic {...topic} />);

  return (
    <div className="Column">
      <h1>{title}</h1>
      {showAddTopic && <AddTopic onAddTopicClick={onAddTopicClick} />}
      <ul>{topicList}</ul>
    </div>
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
};

export default Column;
