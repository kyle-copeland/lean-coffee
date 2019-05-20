import { connect } from 'react-redux';
import App from '../components/App';
import { initSocketIo } from '../actions';

const mapDispatchToProps = dispatch => ({
  initSocketIo: () => {
    dispatch(initSocketIo());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
