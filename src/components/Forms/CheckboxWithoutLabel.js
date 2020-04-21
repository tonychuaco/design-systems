import React from 'react';

const CheckboxWithoutLabel = () =>
  <div className="form-check">
    <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
  </div>

export default CheckboxWithoutLabel;