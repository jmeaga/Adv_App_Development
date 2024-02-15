import React, { useState } from 'react';
import './AdminCourse.css'; // Import your CSS file
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const AdminCourse = () => {
  const initialCourses = [
    { id: 1, eventName: 'BirthdayEvent', venue: 'Venue', cost: '$100', duration: '2 hours' },
    { id: 2, eventName: 'Event B', venue: 'Venue', cost: '$50', duration: '1 hour' },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [newCourse, setNewCourse] = useState({ eventName: '', venue: '', cost: '', duration: '' });
  const [editingCourseId, setEditingCourseId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const addCourse = () => {
    setCourses((prevCourses) => [...prevCourses, { ...newCourse, id: prevCourses.length + 1 }]);
    setNewCourse({ eventName: '', venue: '', cost: '', duration: '' });
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
    setNewCourse({ eventName: '', venue: '', cost: '', duration: '' });
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
            <th>Event Name</th>
            <th>Venue</th>
            <th>Cost</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.eventName}</td>
              <td>{course.venue}</td>
              <td>{course.cost}</td>
              <td>{course.duration}</td>
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
          placeholder="Cost"
          name="cost"
          value={newCourse.cost}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Duration"
          name="duration"
          value={newCourse.duration}
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
