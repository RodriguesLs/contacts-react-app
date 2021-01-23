import React, { useState } from 'react'
import { FormContactForm } from './form-contact.styled.components'
import { PhoneFieldsComponent, EmailFieldsComponent, NameFieldsComponent, TextFieldsComponent } from '../../molecules'

const FormContactComponent = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone] = useState('');
  const [remark, setRemark] = useState('');

  const submit = async () => {
    await fetch('http://localhost:3030/contacts',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contact: {
          name,
          email,
          remark,
          kind_id: 1,
          phones_attributes: [{
            phone_number,
            kind_phone_id: 1
          }]
        }
      })
    }
    )
  };

  return (
    <FormContactForm onSubmit={submit}>
      <NameFieldsComponent name={name} updateName={setName} />
      <EmailFieldsComponent email={email} updateEmail={setEmail} />
      <PhoneFieldsComponent phone={phone_number} updatePhone={setPhone} />
      <TextFieldsComponent remark={remark} updateRemark={setRemark} />
      <button className="btn btn-primary mt-5">Submit</button>
    </FormContactForm>
  )
};

export default FormContactComponent;
