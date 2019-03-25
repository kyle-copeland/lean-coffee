import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ActionBar = ({ onSortTopicsClick }) => (
  <Button block htmlType="button" onClick={() => onSortTopicsClick()}>Sort Topics</Button>
);

ActionBar.propTypes = {
  onSortTopicsClick: PropTypes.func.isRequired,
};

export default ActionBar;
