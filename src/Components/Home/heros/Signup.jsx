// import React from 'react';
// import {Button} from 'react-bootstrap'
// import './Modal.css';

// const SignupModal = ({ onClose, onSwitchToLogin }) => {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <Button className="close btn-danger" onClick={onClose}>&times;</Button>
//         <h2>Sign Up</h2>
//         <form>
//           <input type="text" placeholder="Name" required />
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit" style={{color:'#1eb2a6'}}>Sign Up</button>
//         </form>
//         <p>Already have an account? <button onClick={onSwitchToLogin}>Login</button></p>
//       </div>
//     </div>
//   );
// };

// export default SignupModal;
import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
import { Button } from 'react-bootstrap';

const SignupModal = ({ onClose, onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/signup', { name, email, password });
      alert('Signup successful');
      onSwitchToLogin();
    } catch (error) {
      console.error('Signup failed', error);
      alert('Signup error');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Button className="close btn-danger" onClick={onClose}>&times;</Button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" style={{ color: '#1eb2a6' }}>Sign Up</button>
        </form>
        <p>Already have an account? <button onClick={onSwitchToLogin}>Login</button></p>
      </div>
    </div>
  );
};

export default SignupModal;
