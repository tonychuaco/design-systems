import React from 'react';

import FormControlFile from './FormControlFile';

export default {
  component: FormControlFile,
  title: 'Form Control: File input',
  excludeStories: /.*Data$/,
};

export const Default = () => <FormControlFile />;