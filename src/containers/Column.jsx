import { connect } from 'react-redux';
import Column from '../components/Column';
import { addTopic } from '../actions';

const mapDispatchToProps = dispatch => ({
  onAddTopicClick: (topic) => {
    dispatch(addTopic(topic));
  },
});

const ColumnContainer = connect(null, mapDispatchToProps)(Column);

export default ColumnContainer;
