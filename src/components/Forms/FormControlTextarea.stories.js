import React from 'react';

import FormControlTextarea from './FormControlTextarea';

export default {
  component: FormControlTextarea,
  title: 'Form Control: Textarea',
  excludeStories: /.*Data$/,
};

export const Default = () => <FormControlTextarea />;