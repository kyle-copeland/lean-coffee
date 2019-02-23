import React from 'react';
import PropTypes from 'prop-types';

const AddTopic = ({ onAddTopicClick }) => {
  let input;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        onAddTopicClick(input.value);
        input.value = '';
      }}
    >
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button type="submit">Add Topic</button>
    </form>
  );
};

AddTopic.propTypes = {
  onAddTopicClick: PropTypes.func.isRequired,
};

export default AddTopic;
