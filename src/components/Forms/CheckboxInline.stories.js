import React from 'react';

import CheckboxInline from './CheckboxInline';

export default {
  component: CheckboxInline,
  title: 'Checkbox input option (Inline)',
  excludeStories: /.*Data$/,
};

export const Default = () => <CheckboxInline />;