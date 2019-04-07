import { connect } from 'react-redux';
import ActionBar from '../components/ActionBar';
import { sortTopics, nextTopic } from '../actions';
import { TO_DISCUSS_COLUMN } from '../constants';

const mapStateToProps = state => ({
  showButtons: state.topics.some(topic => topic.columnId === TO_DISCUSS_COLUMN),
});

const mapDispatchToProps = dispatch => ({
  onNextTopicClick: () => {
    dispatch(nextTopic());
  },
  onSortTopicsClick: () => {
    dispatch(sortTopics());
  },
});

const ActionBarContainer = connect(mapStateToProps, mapDispatchToProps)(ActionBar);

export default ActionBarContainer;
