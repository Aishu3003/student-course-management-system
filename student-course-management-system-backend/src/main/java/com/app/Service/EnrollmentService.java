package com.app.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entities.Enrollment;
import com.app.repository.EnrollmentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    public Optional<Enrollment> getEnrollmentById(Long id) {
        return enrollmentRepository.findById(id);
    }

    public Enrollment saveOrUpdateEnrollment(Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }

    public void deleteEnrollment(Long id) {
        enrollmentRepository.deleteById(id);
    }
}
