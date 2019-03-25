import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Column from '../containers/Column';

const renderColumns = columns => columns.map(column => (
  <Col span={8}>
    <Column
      key={column.id}
      id={column.id}
      title={column.title}
      showAddTopic={column.showAddTopic}
      topics={column.topics}
    />
  </Col>
));

const Board = ({ columns }) => (
  <div className="Board">
    <Row>
      {renderColumns(columns)}
    </Row>
  </div>
);

Board.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Board;
