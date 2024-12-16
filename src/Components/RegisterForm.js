import React, { useState } from 'react';
 import './styles.css';
import { postEmployee } from '../services/apiService';
// import { postData, getData } from '../services/apiService';


const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email };
    const result = await postEmployee(data);
    console.log('Post Response:', result);
    alert('Employee Registered Successfully');
    setName('');
    setEmail('');
  };

  return (
    <div className="form-container">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
