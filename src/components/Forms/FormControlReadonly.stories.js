import React from 'react';

import FormControlReadonly from './FormControlReadonly';

export default {
  component: FormControlReadonly,
  title: 'Form Control: Readonly input',
  excludeStories: /.*Data$/,
};

export const Default = () => <FormControlReadonly />;