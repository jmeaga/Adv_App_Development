import './Booking.css';
import { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    submissionDate: '',
    description: '',
    eventType: '',
    eventDate: '',
    headCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    try {
       // Log the token to verify its value

      // Make sure token is available
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await axios.post('http://localhost:8080/bookings', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      console.log('Form submitted!', response.data);
      // Handle the response data as needed, e.g., show a success message

      // Clear form data after submission
      setFormData({
        eventName: '',
        submissionDate: '',
        description: '',
        eventType: '',
        eventDate: '',
        headCount: 0
      });

      // Handle the submission status as needed
    } catch (error) {
      console.error('Form submission failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className="app">
      <h1>Event Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          required
        />

        <label htmlFor="submissionDate">Submission Date:</label>
        <input
          type="date"
          id="submissionDate"
          name="submissionDate"
          value={formData.submissionDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="eventType">Event Type:</label>
        <input
          type="text"
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
        />

        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="headCount">Head Count:</label>
        <input
          type="number"
          id="headCount"
          name="headCount"
          value={formData.headCount}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
