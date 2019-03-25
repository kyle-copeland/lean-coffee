import React from 'react';
import PropTypes from 'prop-types';
import Column from '../containers/Column';

const renderColumns = columns => columns.map(column => (
  <Column
    key={column.id}
    id={column.id}
    title={column.title}
    showAddTopic={column.showAddTopic}
    topics={column.topics}
  />
));

const Board = ({ columns }) => (
  <div className="Board">
    {renderColumns(columns)}
  </div>
);

Board.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Board;
