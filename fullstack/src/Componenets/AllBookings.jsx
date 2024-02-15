import { useState, useEffect } from 'react';
import './AllBookings.css';
import axios from 'axios';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/bookings', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBookings(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/bookings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Remove the deleted booking from the state
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>All Bookings</h1>
      {error && <div>Error: {error}</div>}
      <div className="booking-container">
        {bookings.map(booking => (
          <div key={booking.id} className="booking-box">
            <strong>Event Name:</strong> {booking.eventName}<br />
            <strong>Event Date:</strong> {booking.eventDate}<br />
            <strong>Event Type:</strong> {booking.eventType}<br />
            <strong>Description:</strong> {booking.description}<br />
            <strong>Head Count:</strong> {booking.headCount}<br />
            {/* Delete button */}
            <button onClick={() => handleDelete(booking.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBookings;
