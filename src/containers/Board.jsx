import { connect } from 'react-redux';
import Board from '../components/Board';
import { TO_DISCUSS_COLUMN, DISCUSSING_COLUMN, DISCUSSED_COLUMN } from '../constants';

const mapStateToProps = (state) => {
  const columns = [];
  columns.push({
    id: TO_DISCUSS_COLUMN,
    title: 'To Discuss',
    topics: state.topics.filter(topic => topic.columnId === TO_DISCUSS_COLUMN),
    showAddTopic: true,
  },
  {
    id: DISCUSSING_COLUMN,
    title: 'Discussing',
    topics: state.topics.filter(topic => topic.columnId === DISCUSSING_COLUMN),
  },
  {
    id: DISCUSSED_COLUMN,
    title: 'Discussed',
    topics: state.topics.filter(topic => topic.columnId === DISCUSSED_COLUMN),
  });

  return {
    columns,
  };
};

const BoardContainer = connect(mapStateToProps, null)(Board);

export default BoardContainer;
