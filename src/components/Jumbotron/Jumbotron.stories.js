import React from 'react';
import { action } from '@storybook/addon-actions';

import Jumbotron from './Jumbotron';

export default {
  component: Jumbotron,
  title: 'Jumbotron',
  excludeStories: /.*Data$/,
};

// component data
export const taskData = {
  id: '1',
  title: 'Fill this out',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

// actions data
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// exports stories
export const Default = () => <Jumbotron task={{ ...taskData }} {...actionsData} />;

// export const Pinned = () => (
//   <Jumbotron task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
// );

// export const Archived = () => <Jumbotron task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />;
