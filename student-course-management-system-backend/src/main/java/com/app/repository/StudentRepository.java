package com.app.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entities.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
