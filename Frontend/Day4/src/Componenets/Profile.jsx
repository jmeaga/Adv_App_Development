import './Profile.css';
import { useState } from 'react';

const Payment = () => {
  const [formData, setFormData] = useState({
    paymentId: '',
    status: '',
    totalAmount: 0,
    paymentDate: '',
    modeOfPayment: '',
    customerId: '',
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
    <div className="payment-form">
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="paymentId">Payment ID:</label>
        <input
          type="text"
          id="paymentId"
          name="paymentId"
          value={formData.paymentId}
          onChange={handleChange}
          required
        />

        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Failed">Failed</option>
        </select>

        <label htmlFor="totalAmount">Total Amount:</label>
        <input
          type="number"
          id="totalAmount"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
          required
        />

        <label htmlFor="paymentDate">Payment Date:</label>
        <input
          type="date"
          id="paymentDate"
          name="paymentDate"
          value={formData.paymentDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="modeOfPayment">Mode of Payment:</label>
        <input
          type="text"
          id="modeOfPayment"
          name="modeOfPayment"
          value={formData.modeOfPayment}
          onChange={handleChange}
          required
        />

        <label htmlFor="customerId">Customer ID:</label>
        <input
          type="text"
          id="customerId"
          name="customerId"
          value={formData.customerId}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;