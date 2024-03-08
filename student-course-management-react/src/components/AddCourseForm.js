import axios from 'axios';
import React, { useState } from 'react';

function AddCourseForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newCourse = {
      name: name,
      description: description
    };
    axios.post('http://localhost:2930/courses', newCourse)
      .then(response => {
        console.log('Course added successfully: ', response.data);
        // Optionally, you can redirect or show a success message
      })
      .catch(error => {
        console.error('Error adding course: ', error);
      });
  };

  return (
    <div>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourseForm;
