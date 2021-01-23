import React from 'react'

export const NameFieldsComponent = ({name, updateName}) => (
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input
      value={name}
      onChange={e => updateName(e.target.value)}
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
  </div>
);
