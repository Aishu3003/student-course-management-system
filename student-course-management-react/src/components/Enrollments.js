import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    axios.get('/enrollments')
      .then(response => {
        setEnrollments(response.data);
      })
      .catch(error => {
        console.error('Error fetching enrollments:', error);
      });
  }, []);

  return (
    <div>
      <h2>Enrollments</h2>
      <ul>
        {enrollments.map(enrollment => (
          <li key={enrollment.id}>
            Student: {enrollment.student.name} - Course: {enrollment.course.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Enrollments;
