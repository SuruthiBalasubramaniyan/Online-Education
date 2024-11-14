// // src/Components/Modals/LoginModal.js
// import React from 'react';
// import './Modal.css';
// import {Button} from 'react-bootstrap'
// const LoginModal = ({ onClose, onSwitchToSignup }) => {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <Button className="close btn-danger" onClick={onClose}>&times;</Button>
//         <h2>Login</h2>
//         <form>
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit" style={{color:'#1eb2a6'}}>Login</button>
//         </form>
//         <p>Don't have an account? <button onClick={onSwitchToSignup}>Sign Up</button></p>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
import { Button } from 'react-bootstrap';

const LoginModal = ({ onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert(response.data.message); // shows login success message
      onClose();
      window.location.reload();
    } catch (error) {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Button className="close btn-danger" onClick={onClose}>&times;</Button>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" style={{ color: '#1eb2a6' }}>Login</button>
        </form>
        <p>Don't have an account? <button onClick={onSwitchToSignup}>Sign Up</button></p>
      </div>
    </div>
  );
};

export default LoginModal;

