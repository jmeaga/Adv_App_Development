// App.jsx (React component)

import './Booking.css';
import { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
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