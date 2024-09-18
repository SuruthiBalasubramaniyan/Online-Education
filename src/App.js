import React, { useState } from 'react';
import './App.css';
import Header from './Components/Common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/about/About';
import CourseHome from './Components/allcourses/CourseHome';
import Team from './Components/team/Team';
import Pricing from './Components/pricing/Pricing';
import Blog from './Components/blog/Blog';
import Contact from './Components/contact/Contact';
import Footer from './Components/Common/footer/Footer';
import LoginModal from './Components/Home/heros/Login';
import SignupModal from './Components/Home/heros/Signup';

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
    setSignupModalOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
    setLoginModalOpen(false);
  };

  const closeModals = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(false);
  };

  const switchToSignup = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(true);
  };

  const switchToLogin = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(true);
  };

  return (
    <>
       
      <Header openLoginModal={openLoginModal} openSignupModal={openSignupModal} />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<CourseHome />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/journal' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

      {(isLoginModalOpen || isSignupModalOpen) && (
        <div className="modal-overlay">
          {isLoginModalOpen && (
            <LoginModal onClose={closeModals} onSwitchToSignup={switchToSignup} />
          )}
          {isSignupModalOpen && (
            <SignupModal onClose={closeModals} onSwitchToLogin={switchToLogin} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
