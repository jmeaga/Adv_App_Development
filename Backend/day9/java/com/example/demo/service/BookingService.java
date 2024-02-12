package com.example.demo.service;

import com.example.demo.dto.BookingDto;
import com.example.demo.entity.Booking;
import com.example.demo.mapper.BookingMapper;
import com.example.demo.repo.BookingRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingService {

    private final BookingRepo bookingRepo;
    private final BookingMapper bookingMapper;

    public BookingService(BookingRepo bookingRepo, BookingMapper bookingMapper) {
        this.bookingRepo = bookingRepo;
        this.bookingMapper = bookingMapper;
    }

    public List<BookingDto> getAllBookings() {
        List<Booking> bookings = bookingRepo.findAll();
        return bookings.stream()
                .map(bookingMapper::toDto)
                .collect(Collectors.toList());
    }

    public BookingDto getBookingById(Long id) {
        return bookingRepo.findById(id)
                .map(bookingMapper::toDto)
                .orElse(null);
    }

    public BookingDto createBooking(BookingDto bookingDto) {
        Booking booking = bookingMapper.toEntity(bookingDto);
        booking = bookingRepo.save(booking);
        return bookingMapper.toDto(booking);
    }

    public BookingDto updateBookingById(Long id, BookingDto updatedBookingDto) {
        if (bookingRepo.existsById(id)) {
            updatedBookingDto.setId(id); // Ensure the ID is set for the update
            Booking updatedBooking = bookingMapper.toEntity(updatedBookingDto);
            updatedBooking = bookingRepo.save(updatedBooking);
            return bookingMapper.toDto(updatedBooking);
        } else {
            return null; // Return null if the booking does not exist
        }
    }

    public void deleteBookingById(Long id) {
        bookingRepo.deleteById(id);
    }
}
