import React from 'react'
import { PhoneInput } from '../../atoms/phone-input/phone-input.component'

export const TextFieldsComponent = ({ remark, updateRemark }) => (
  <div className="mb-3">
    <label className="form-label">Remark</label>
    <textarea className="form-control" value={remark} onChange={e => updateRemark(e.target.value)} />
  </div>
);
