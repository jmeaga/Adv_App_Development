// import React, { useState } from 'react';
// import './Contact.css'; // Make sure to import the CSS file

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real-world scenario, you would send this data to a server or API
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div>
//     <div className='abi'>
//     <div className="contact-us-container">
//     <form onSubmit={handleSubmit}>
//     <h2>Contact Us</h2>
//         <label>
//           Your Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             />
//         </label>
//         <label>
//           Email Address:
//           <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//           />
//         </label>
//         <label>
//           Subject:
//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleInputChange}
//             required
//             />
//             </label>
//             <label>
//             Message:
//             <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             required
//             />
//             </label>
//             <button type="submit">Submit</button>
//             </form>
//             </div>
//             </div>
//             </div>
//             );
//           };

// export default Contact;

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './Contact.css'; // Make sure to import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
  
      // Check if token exists
      if (!token) {
        console.error('Token not found. Please log in to access this feature.');
        return;
      }
  
      // Set the authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      // Make a POST request to your server or API with the authorization header
      const response = await axios.post('http://localhost:8080/contacts/post', formData, config);
  
      // Handle the response as needed
      console.log('Server response:', response.data);
  
      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
  
      alert('Form submitted successfully!');
    } catch (error) {
      // Handle errors
      console.error('An error occurred:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };
  
  return (
    <div>
      <div className='abi'>
        <div className="contact-us-container">
          <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <label>
              Your Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
