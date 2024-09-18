// src/Components/Modals/LoginModal.js
import React from 'react';
import './Modal.css';
import {Button} from 'react-bootstrap'
const LoginModal = ({ onClose, onSwitchToSignup }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Button className="close btn-danger" onClick={onClose}>&times;</Button>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <button onClick={onSwitchToSignup}>Sign Up</button></p>
      </div>
    </div>
  );
};

export default LoginModal;
