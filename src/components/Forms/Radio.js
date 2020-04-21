import React from 'react';

// .form-check, .form-check-input, .form-check-label
const Radio = () =>
  <div className="form-check">
    <input className="form-check-input" type="radio" value="Radio option" id="defaultRadio" />
    <label className="form-check-label" htmlFor="defaultRadio">Radio option</label>
  </div>

export default Radio;