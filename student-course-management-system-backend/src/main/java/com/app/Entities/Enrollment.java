package com.app.Entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long studentId;
    private Long courseId;
    private Date enrollmentDate;
    
    
    
	public Enrollment() {
		super();
	}

	

	public Enrollment(Long id, Long studentId, Long courseId, Date enrollmentDate) {
		super();
		this.id = id;
		this.studentId = studentId;
		this.courseId = courseId;
		this.enrollmentDate = enrollmentDate;
	}



	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Long getStudentId() {
		return studentId;
	}


	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}


	public Long getCourseId() {
		return courseId;
	}


	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}


	public Date getEnrollmentDate() {
		return enrollmentDate;
	}


	public void setEnrollmentDate(Date enrollmentDate) {
		this.enrollmentDate = enrollmentDate;
	}



	@Override
	public String toString() {
		return "Enrollment [id=" + id + ", studentId=" + studentId + ", courseId=" + courseId + ", enrollmentDate="
				+ enrollmentDate + "]";
	}


	
    
    
}

