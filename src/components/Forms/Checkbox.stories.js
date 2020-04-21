import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox input option',
  excludeStories: /.*Data$/,
};

export const Default = () => <Checkbox />;