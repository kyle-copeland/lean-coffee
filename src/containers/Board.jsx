import { connect } from 'react-redux';
import Board from '../components/Board';
import { TO_DISCUSS_COLUMN, DISCUSSING_COLUMN, DISCUSSED_COLUMN } from '../constants';

const mapStateToProps = state => ({
  topics: {
    toDiscuss: state.topics.filter(topic => topic.columnId === TO_DISCUSS_COLUMN),
    discussion: state.topics.filter(topic => topic.columnId === DISCUSSING_COLUMN),
    discussed: state.topics.filter(topic => topic.columnId === DISCUSSED_COLUMN),
  },
});

const BoardContainer = connect(mapStateToProps, null)(Board);

export default BoardContainer;
