// CustomNavDropdown.js
import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';

const CustomNavDropdown1 = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <NavDropdown
      title="ABOUT"
      id="nav-downdown"
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      
    >
      <NavDropdown.Item href="#action/1.1">ABOUT US</NavDropdown.Item>
      <NavDropdown.Item href="#action/1.2">HOW ABOUT YOU</NavDropdown.Item>
    </NavDropdown>
  );
};

const CustomNavDropdown2 = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <NavDropdown
      title="PRODUCTS"
      id="nav-downdown"
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <NavDropdown.Item href="#action/2.1">TOP</NavDropdown.Item>
      <NavDropdown.Item href="#action/2.2">BOTTOM</NavDropdown.Item>
      <NavDropdown.Item href="#action/2.2">OUTTER</NavDropdown.Item>
      <NavDropdown.Item href="#action/2.2">WOW</NavDropdown.Item>
    </NavDropdown>
  );
};

const CustomNavDropdown3 = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <NavDropdown
      title="ARCHIVE"
      id="nav-downdown"
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <NavDropdown.Item href="#action/3.1">ARTWORK</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">SUPPORT</NavDropdown.Item>
    </NavDropdown>
  );
};

export { CustomNavDropdown1, CustomNavDropdown2, CustomNavDropdown3 };
