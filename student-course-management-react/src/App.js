import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import AddCourseForm from './components/AddCourseForm';
import AddStudentForm from './components/AddStudentForm';
import CourseList from './components/CourseList';
import Enrollments from './components/Enrollments';
import StudentList from './components/StudentList';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Student Course Management System</h1>
        <Routes>
          <Route path="/students" component={StudentList} />
          <Route path="/courses" component={CourseList} />
          <Route path="/enrollments" component={Enrollments} />
          <Route path="/add-student" exact component={AddStudentForm} />
          <Route path="/add-course" exact component={AddCourseForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
