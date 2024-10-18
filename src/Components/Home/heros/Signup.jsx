import React from 'react';
import {Button} from 'react-bootstrap'
import './Modal.css';

const SignupModal = ({ onClose, onSwitchToLogin }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Button className="close" onClick={onClose}>&times;</Button>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <button onClick={onSwitchToLogin}>Login</button></p>
      </div>
    </div>
  );
};

export default SignupModal;
