package com.example.demo.dto;

import java.util.Date;

public class BookingDto {
    private Long id;
    private String eventName;
    private Date submissionDate;
    private String description;
    private String eventType;
    private Date eventDate;
    private int headCount;

    // Constructors, getters, and setters

    public BookingDto() {
    }

    public BookingDto(Long id, String eventName, Date submissionDate, String description, String eventType, Date eventDate, int headCount) {
        this.id = id;
        this.eventName = eventName;
        this.submissionDate = submissionDate;
        this.description = description;
        this.eventType = eventType;
        this.eventDate = eventDate;
        this.headCount = headCount;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public Date getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(Date submissionDate) {
        this.submissionDate = submissionDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public Date getEventDate() {
        return eventDate;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }

    public int getHeadCount() {
        return headCount;
    }

    public void setHeadCount(int headCount) {
        this.headCount = headCount;
    }
}
