import { Navbar, Nav } from 'react-bootstrap';
import { CustomNavDropdown1, CustomNavDropdown2, CustomNavDropdown3 } from './CustomNavDropdown';
import { IoIosMail } from "react-icons/io";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" className="custom-navbar mx-auto" style={{ position: 'fixed', width: '80%', zIndex: '11' }}>
      <Navbar.Brand href="/" className='brand' style={{ color: 'white' }}>WhyjmFlex</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <CustomNavDropdown1 />
          <CustomNavDropdown2 />
          <CustomNavDropdown3 />
        </Nav>
        <Nav>
          <Nav.Link href="#deets" style={{ color: 'white' }} >CONTACT US</Nav.Link>
          <a href="#3333" style={{ textDecoration: 'none' }}>
            <IoIosMail style={{ marginTop: '8px' }} size='25px' color='black' />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
