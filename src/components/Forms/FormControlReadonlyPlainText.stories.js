import React from 'react';

import FormControlReadonlyPlainText from './FormControlReadonlyPlainText';

export default {
  component: FormControlReadonlyPlainText,
  title: 'Form Control: Readonly Plain Text input',
  excludeStories: /.*Data$/,
};

export const Default = () => <FormControlReadonlyPlainText />