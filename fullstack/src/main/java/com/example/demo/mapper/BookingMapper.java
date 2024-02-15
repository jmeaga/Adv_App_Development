package com.example.demo.mapper;

import com.example.demo.dto.BookingDto;
import com.example.demo.entity.Booking;
import org.springframework.stereotype.Component;

@Component
public class BookingMapper {

    public BookingDto toDto(Booking booking) {
        BookingDto dto = new BookingDto();
        dto.setId(booking.getId());
        dto.setEventName(booking.getEventName());
        dto.setSubmissionDate(booking.getSubmissionDate());
        dto.setDescription(booking.getDescription());
        dto.setEventType(booking.getEventType());
        dto.setEventDate(booking.getEventDate());
        dto.setHeadCount(booking.getHeadCount());
        return dto;
    }

    public Booking toEntity(BookingDto dto) {
        Booking booking = new Booking();
        booking.setId(dto.getId());
        booking.setEventName(dto.getEventName());
        booking.setSubmissionDate(dto.getSubmissionDate());
        booking.setDescription(dto.getDescription());
        booking.setEventType(dto.getEventType());
        booking.setEventDate(dto.getEventDate());
        booking.setHeadCount(dto.getHeadCount());
        return booking;
    }
}
