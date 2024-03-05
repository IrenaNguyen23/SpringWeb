package com.baohoa.backend.service.impl;

import lombok.AllArgsConstructor;
import com.baohoa.backend.entity.Feedback;
import org.springframework.stereotype.Service;
import com.baohoa.backend.service.FeedbackService;
import com.baohoa.backend.repository.FeedbackRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor

public class FeedbackServiceImpl implements FeedbackService{
    private FeedbackRepository feedbackRepository;

    @Override
    public Feedback createFeedback(Feedback feedback){
        return feedbackRepository.save(feedback);
    }

    @Override
    public Feedback getFeedbackById(Long feedbackId){
        Optional<Feedback> optionalFeedback = feedbackRepository.findById(feedbackId);
        return optionalFeedback.get();
    }
    @Override
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback updateFeedback(Feedback feedback){
        Feedback existingFeedback = feedbackRepository.findById(feedback.getId()).get();
        existingFeedback.setCreated_at(feedback.getCreated_at());
        existingFeedback.setEmail(feedback.getEmail());
        existingFeedback.setNote(feedback.getNote());
        existingFeedback.setFirstname(feedback.getFirstname());
        existingFeedback.setLastname(feedback.getLastname());
        existingFeedback.setPhone_number(feedback.getPhone_number());
        existingFeedback.setSubject_name(feedback.getSubject_name());
        existingFeedback.setStatus(feedback.getStatus());
        existingFeedback.setUpdated_at(feedback.getUpdated_at());
        Feedback updateFeedback = feedbackRepository.save(existingFeedback);
        return updateFeedback;
    }
    @Override
    public void deleteFeedback(Long feedbackId){
        feedbackRepository.deleteById(feedbackId);
    }
}
