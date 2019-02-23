import React from 'react';
import PropTypes from 'prop-types';

const Topic = ({
  id, topic, votes, onVoteForTopicClick,
}) => (
  <li>
    {topic}
    <span>
      {' '}
Votes:
      {votes}
    </span>
    <button type="button" onClick={() => onVoteForTopicClick(id)}>Add Vote</button>
  </li>
);

Topic.defaultProps = {
  votes: 0,
};

Topic.propTypes = {
  onVoteForTopicClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  votes: PropTypes.number,
};

export default Topic;
