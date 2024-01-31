import React, { useState } from 'react';
import './AdminCourse.css'; // Import your CSS file
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const AdminCourse = () => {
  const initialCourses = [
    { id: 1, name: 'meaga', eventName: 'BirthdayEvent', venue: 'Venue ', bookingStatus: 'Booked', paymentStatus: 'Paid' },
    { id: 2, name: 'Course B', eventName: 'Event B', venue: 'Venue ', bookingStatus: 'Available', paymentStatus: 'Pending' },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [newCourse, setNewCourse] = useState({ name: '', eventName: '', venue: '', bookingStatus: '', paymentStatus: '' });
  const [editingCourseId, setEditingCourseId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const addCourse = () => {
    setCourses((prevCourses) => [...prevCourses, { ...newCourse, id: prevCourses.length + 1 }]);
    setNewCourse({ name: '', eventName: '', venue: '', bookingStatus: '', paymentStatus: '' });
  };

  const editCourse = (id) => {
    setEditingCourseId(id);
    const courseToEdit = courses.find((course) => course.id === id);
    setNewCourse({ ...courseToEdit });
  };

  const updateCourse = () => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => (course.id === editingCourseId ? newCourse : course))
    );
    setEditingCourseId(null);
    setNewCourse({ name: '', eventName: '', venue: '', bookingStatus: '', paymentStatus: '' });
  };

  const deleteCourse = (id) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
  };

  return (
    <div className="admin-course-container">
      <center>
        <h2 className='pin'>Event Management</h2>
      </center>
      <table className="course-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Event Name</th>
            <th>Venue</th>
            <th>Booking Status</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.eventName}</td>
              <td>{course.venue}</td>
              <td>{course.bookingStatus}</td>
              <td>{course.paymentStatus}</td>
              <td>
                <button onClick={() => editCourse(course.id)}>
                  <AiOutlineEdit />
                </button>
                <button onClick={() => deleteCourse(course.id)}>
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-course-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newCourse.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Event Name"
          name="eventName"
          value={newCourse.eventName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Venue"
          name="venue"
          value={newCourse.venue}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Booking Status"
          name="bookingStatus"
          value={newCourse.bookingStatus}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Payment Status"
          name="paymentStatus"
          value={newCourse.paymentStatus}
          onChange={handleInputChange}
        />
        {editingCourseId ? (
          <button className="update-btn" onClick={updateCourse}>
            Update Course
          </button>
        ) : (
          <button className="add-btn" onClick={addCourse}>
            Add Course
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminCourse;
