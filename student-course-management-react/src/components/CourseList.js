import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name} - {course.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
