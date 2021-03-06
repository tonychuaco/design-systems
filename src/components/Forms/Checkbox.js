import React from 'react';

// Classes:
// .form-check
// .form-check-input
// .form-check-label
const Checkbox = () =>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="Checkbox option" id="defaultCheck" />
    <label className="form-check-label" htmlFor="defaultCheck">Checkbox option</label>
  </div>

export default Checkbox;