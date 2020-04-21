import React from 'react';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';

export default {
  component: Radio,
  title: 'Radio input option',
  excludeStories: /.*Data$/,
};

export const Default = () => <Radio />;