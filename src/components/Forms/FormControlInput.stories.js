import React from 'react';

import FormControlInput from './FormControlInput';

export default {
  component: FormControlInput,
  title: 'Form Control: Input',
  excludeStories: /.*Data$/,
};

export const Default = () => <FormControlInput />;