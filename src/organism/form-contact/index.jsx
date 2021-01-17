import React from 'react'
import { FormContactForm } from './form-contact.styled.components'
import { PhoneFieldsComponent } from '../../molecules/form-fields/phone-field.component'
import { EmailFieldsComponent } from '../../molecules/form-fields/email-field.component'
import { NameFieldsComponent } from '../../molecules/form-fields/name-field.component'

const FormContactComponent = () => (
  <FormContactForm>
    <NameFieldsComponent />
    <EmailFieldsComponent />
    <PhoneFieldsComponent />
    <button type="submit" className="btn btn-primary mt-5">Submit</button>
  </FormContactForm>
);

export default FormContactComponent;
