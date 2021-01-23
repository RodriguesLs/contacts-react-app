import React from 'react'

export const PhoneInput = ({ phone, updatePhone }) => (
  <input
    type="text"
    className="form-control"
    value={phone}
    onChange={e => updatePhone(e.target.value)}
  />
);
