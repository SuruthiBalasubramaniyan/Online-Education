import React, { useState } from 'react';
import Head from './Head';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { VscAccount } from 'react-icons/vsc';

const Header = ({ openLoginModal, openSignupModal }) => {
  const [click, setClick] = useState(false);
  const handleIconClick = () => {
    openLoginModal(); 
  };
  return (
    <div> 
      <Head /> 
      <header>
        <Navbar expand='lg' className='flexSB nav'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto px-4'>
              <Nav.Link href='/' className='px-4'>Home</Nav.Link>
              <Nav.Link href='/courses' className='px-4'>Courses</Nav.Link>
              <Nav.Link href='/about' className='px-4'>About</Nav.Link>
              <Nav.Link href='/team' className='px-4'>Team</Nav.Link>
              <Nav.Link href='/pricing' className='px-4'>Pricing</Nav.Link>
              <Nav.Link href='/journal' className='px-4'>Journal</Nav.Link>
              <Nav.Link href='/contact' className='px-4'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='fab icon ms-2' onClick={handleIconClick}>
              <VscAccount />
            </div>
          <Nav.Link className='ms-auto toggle' onClick={() => setClick(!click)}>Get Certificate</Nav.Link>

        </Navbar>
      </header>
    </div>
  );
}
export default Header;
