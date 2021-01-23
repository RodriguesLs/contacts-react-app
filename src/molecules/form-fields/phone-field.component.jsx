import React from 'react'
import { PhoneInput } from '../../atoms/phone-input/phone-input.component'

export const PhoneFieldsComponent = ({ phone, updatePhone }) => (
  <div className="mb-3">
    <label className="form-label">Phone Number</label>
    <PhoneInput phone={phone} updatePhone={updatePhone} />
  </div>
);
