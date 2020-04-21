import React from 'react';

import FormControlSelect from './FormControlSelect';

export default {
  component: FormControlSelect,
  title: 'Form Control: Select',
  excludeStories: /.*Data$/,
};

export const Default = () => <FormControlSelect />;