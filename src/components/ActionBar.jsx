import React from 'react';
import PropTypes from 'prop-types';

const ActionBar = ({ onSortTopicsClick }) => (
  <div>
    <button type="button" onClick={() => onSortTopicsClick()}>Sort Topics</button>
  </div>
);

ActionBar.propTypes = {
  onSortTopicsClick: PropTypes.func.isRequired,
};

export default ActionBar;
