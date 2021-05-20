import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      name: '',
      email: '',
      password:'',
      confirmPassword:'',
      phoneNumber: '',
    }
  }
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {
      name: '',
      email: '',
      password:'',
      confirmPassword:'',
      phoneNumber: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      email: event.target.email,
      password: event.target.password,
      confirmPassword: event.target.confirmPassword,
      phoneNumber: event.target.phoneNumber,
      value: event.target.value,
    })
  }

  return(
    <div className="wrapper">
      <h1>Register Form</h1>
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Full Name</p>
            <input name="name" placeholder="Enter your full name" onChange={handleChange} value={formData.name || ''}/>
          </label>
          <label>
            <p>Email</p>
            <input type="email" name="email" placeholder="example@email.com" onChange={handleChange} value={formData.email || ''}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter new password" onChange={handleChange} value={formData.password || ''}/>
          </label>
          <label>
            <p>Confirm Password</p>
            <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} value={formData.confirmPassword || ''}/>
          </label>
          <label>
            <p>Your Phone Number</p>
            <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber || ''}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
