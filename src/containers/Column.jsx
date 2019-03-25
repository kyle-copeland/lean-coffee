import { connect } from 'react-redux';
import Column from '../components/Column';
import { addTopic, moveTopic } from '../actions';

const mapDispatchToProps = dispatch => ({
  onAddTopicClick: (topic) => {
    dispatch(addTopic(topic));
  },
  handleMoveTopic: (topicId, columnId) => {
    dispatch(moveTopic(topicId, columnId));
  },
});

const ColumnContainer = connect(null, mapDispatchToProps)(Column);

export default ColumnContainer;
