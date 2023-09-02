"use client"
import { useState } from 'react';
export default function AddData() {
  const [formData, setFormData] = useState({
    name: '',
    pay: '',
    value: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your server to add the data to the SQLite database
    try {
      
      const response = await fetch('/api/add-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data added successfully, you can redirect to a success page or handle it as needed
        console.log('Data added successfully');
      } else {
        // Handle errors here
        console.error('Error adding data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="pay">Pay:</label>
        <input
          type="text"
          id="pay"
          name="pay"
          value={formData.pay}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="value">Value:</label>
        <input
          type="text"
          id="value"
          name="value"
          value={formData.value}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="description">Description:</label><br />
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea><br /><br />

        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}
