import React from 'react';
import PropTypes from 'prop-types';
import Column from '../containers/Column';

const Board = ({ topics }) => (
  <div className="Board">
    <Column title="To Discuss" showAddTopic="true" topics={topics.toDiscuss} />
    <Column title="Discussion" topics={topics.discussion} />
    <Column title="Discussed" topics={topics.discussed} />
  </div>
);

Board.propTypes = {
  topics: PropTypes.shape({
    toDiscuss: PropTypes.array,
    discussion: PropTypes.array,
    discussed: PropTypes.array,
  }).isRequired,
};

export default Board;
