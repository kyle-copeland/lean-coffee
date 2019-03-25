import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

const AddTopic = ({ onAddTopicClick, form }) => {
  let input;
  return (
    <Form
      layout="inline"
      onSubmit={(e) => {
        e.preventDefault();
        if (!input || !input.value.trim()) {
          return;
        }
        onAddTopicClick(input.value);
      }}
    >
      <Form.Item>
        <Input onChange={(e) => {
          input = e.target;
        }}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Add Topic</Button>
      </Form.Item>
    </Form>
  );
};

AddTopic.propTypes = {
  onAddTopicClick: PropTypes.func.isRequired,
};

export default AddTopic;
