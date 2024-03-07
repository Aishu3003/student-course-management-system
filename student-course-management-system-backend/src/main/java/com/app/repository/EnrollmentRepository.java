package com.app.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entities.Enrollment;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
}
