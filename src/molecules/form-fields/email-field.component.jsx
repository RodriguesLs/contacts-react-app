import React from 'react'

export const EmailFieldsComponent = () => (
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
);
