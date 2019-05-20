import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ActionBar = ({ onNextTopicClick, onSortTopicsClick }) => (
  <Button.Group>
    <Button htmlType="button" onClick={() => onNextTopicClick()}>Next Topic</Button>
    <Button htmlType="button" onClick={() => onSortTopicsClick()}>Sort Topics</Button>
  </Button.Group>
);

ActionBar.propTypes = {
  onNextTopicClick: PropTypes.func.isRequired,
  onSortTopicsClick: PropTypes.func.isRequired,
};

export default ActionBar;
