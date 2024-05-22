import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://email-api-server.vercel.app/api/email/sendMail', { email });
      console.log(response.data);
      alert(response.data);

      // Clear the input field
      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <div className="main-block">
      <h1>Send Simple Mail</h1>
      <form onSubmit={handleSubmit}>
        <div className="info">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default App;
