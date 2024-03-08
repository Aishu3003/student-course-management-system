import axios from 'axios';
import React, { useState } from 'react';

function AddStudentForm() {
  const [firstName, setfirstName] = useState('');
  const[lastName,setlastName]=useState('');
  const [email, setEmail] = useState('');
  const[phoneNumber,setphoneNumber]=useState(''); 
  

  const handleSubmit = event => {
    event.preventDefault();
    const newStudent = {
      firstName:firstName,
      lastName:lastName,
      email: email,
      phoneNumber:phoneNumber

    };
    axios.post('http://localhost:2930/students', newStudent)
      .then(response => {
        console.log('Student added successfully: ', response.data);
        // Optionally, you can redirect or show a success message
      })
      .catch(error => {
        console.error('Error adding student: ', error);
      });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={e => setfirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={e => setlastName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="email" value={phoneNumber} onChange={e => setphoneNumber(e.target.value)} />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
