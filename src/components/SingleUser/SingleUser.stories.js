import React from 'react';
import SingleUser from './SingleUser';

export default {
  title: 'YourComponent',
  component: SingleUser,
};
const Template = (args) => <SingleUser {...args} />;

export const SingleUserStory = Template.bind({});

SingleUserStory.args = {};
