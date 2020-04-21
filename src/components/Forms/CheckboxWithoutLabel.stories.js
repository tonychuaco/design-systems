import React from 'react';

import CheckboxWithoutLabel from './CheckboxWithoutLabel';

export default {
  component: CheckboxWithoutLabel,
  title: 'Checkbox input option (Without Label)',
  excludeStories: /.*Data$/,
};

export const Default = () => <CheckboxWithoutLabel />;