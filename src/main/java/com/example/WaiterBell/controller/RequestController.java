package com.example.WaiterBell.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.WaiterBell.model.Request;
import com.example.WaiterBell.repository.RequestRepository;
import com.example.WaiterBell.service.MailService;

@RestController
@RequestMapping("/request")
@CrossOrigin
public class RequestController {
    @Autowired
    private RequestRepository repository;

    @Autowired
    private MailService mailService;

    @PostMapping // Maps POST requests to "/request"
    public ResponseEntity<String> handleRequest(@RequestBody Request request) {
      // Save the request to the database
      repository.save(request);

      // Construct email content
      String subject = "New Request Submission";
      String body = String.format(
          "A new request has been submitted:\n\n" +
          "Name: %s %s\n" +
          "Email: %s\n" +
          "Phone: %s\n" +
          "Number of Tables: %d\n" +
          "Number of Bells: %d\n\n" +
          "Please take appropriate action.",
          request.getFirstName(),
          request.getLastName(),
          request.getEmail(),
          request.getPhone(),
          request.getNumTables(),
          request.getNumBells()
      );

      // Send the email notification to the organization's email
      mailService.sendRequestNotification("your_organization_email@example.com", subject, body);

      return ResponseEntity.ok("Data received and notification sent.");
    }

   
}