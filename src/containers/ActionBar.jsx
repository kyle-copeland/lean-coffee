import { connect } from 'react-redux';
import ActionBar from '../components/ActionBar';
import { sortTopics } from '../actions';

const mapDispatchToProps = dispatch => ({
  onSortTopicsClick: () => {
    dispatch(sortTopics());
  },
});

const ActionBarContainer = connect(null, mapDispatchToProps)(ActionBar);

export default ActionBarContainer;
