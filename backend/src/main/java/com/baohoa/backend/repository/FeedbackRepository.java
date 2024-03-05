package com.baohoa.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baohoa.backend.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback,Long>{
    
}
