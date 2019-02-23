import { connect } from 'react-redux';
import Topic from '../components/Topic';
import { voteForTopic } from '../actions';

const mapDispatchToProps = dispatch => ({
  onVoteForTopicClick: (id) => {
    dispatch(voteForTopic(id));
  },
});

const TopicContainer = connect(null, mapDispatchToProps)(Topic);

export default TopicContainer;
