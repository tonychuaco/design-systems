import React from 'react';

const FormControlReadonlyPlainText = () =>
  <div className="form-group">
    <label htmlFor="staticEmail" className="">Readonly:</label>
    <div className="">
      <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
    </div>
  </div>

export default FormControlReadonlyPlainText;