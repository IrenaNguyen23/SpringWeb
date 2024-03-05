package com.baohoa.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.baohoa.backend.entity.Feedback;
import com.baohoa.backend.service.FeedbackService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/feedbacks")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, exposedHeaders = "Content-Range")

public class FeedbackController {

    private FeedbackService feedbackService;
    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback Feedback){
        Feedback saveFeedback = feedbackService.createFeedback(Feedback);
        return new ResponseEntity<> (saveFeedback, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable("id") Long FeedbackId){
        Feedback Feedback = feedbackService.getFeedbackById(FeedbackId);
        return new ResponseEntity<>(Feedback, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedbacks(){
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + feedbacks.size() + "/" + feedbacks.size());
        
        return ResponseEntity.ok().headers(headers).body(feedbacks);
    }

    @PutMapping("{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable("id") Long FeedbackId, @RequestBody Feedback Feedback) {
        Feedback.setId(FeedbackId);
        Feedback updateFeedback = feedbackService.updateFeedback(Feedback);
        return new ResponseEntity<>(updateFeedback, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable("id") Long FeedbackId){
        feedbackService.deleteFeedback(FeedbackId);
        return new ResponseEntity<>("Feedback successfully deleted!", HttpStatus.OK);
    }
    
}