import React, { useState } from 'react';

import './RegistrationForm.css';
import useFormValidation from '../../assets/hooks/useFormValidation';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const { errors, validateForm } = useFormValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(formData);
    if (isValid) {
      console.log(formData);
      // Here you can add logic to submit the form data to your backend or any other action
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
      </div>
      <div className="form-group">
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
      </div>
      <div className="form-group">
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="form-group">
        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} />
        {errors.contact && <p className="error-message">{errors.contact}</p>}
      </div>
      <div className="form-group">
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <div className="form-group">
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
