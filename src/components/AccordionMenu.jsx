import React, { useState } from 'react';
import { Collapse, Nav, NavItem, NavLink } from 'react-bootstrap'; // Import Bootstrap components
import { Link } from 'react-router-dom';

const AccordionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState('left'); 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
  //   <div>
  //     <Nav className="d-flex justify-content-end"> {/* Use Bootstrap Nav */}
  //       <NavItem onClick={toggleMenu}>
  //         <NavLink to="#">Menu</NavLink>
  //       </NavItem>
  //     </Nav>
  //     {isOpen && ( // Conditionally render links based on isOpen state
  //       <Nav className="flex-column"> {/* Apply flexbox for vertical layout */}
  //       <NavItem>
  //         <Link to="/">Home</Link>
  //       </NavItem>
  //       <NavItem>
  //         <Link to="/users">Users</Link>
  //       </NavItem>
  //     </Nav>
  //     )}
  //   </div>
  // );

  <div className="dropdown">
  <button className="dropdown-btn" onClick={toggleMenu}>
    Menu
  </button>
  {isOpen && (
    <div className={`dropdown-content ${menuPosition === 'left' ? 'dropdown-menu-right' : ''}`}>
      <div className="dropdown-item">
          <Link to="/">Home</Link>
      </div>
      <div className="dropdown-item">
          <Link to="/users">Users</Link>
      </div>
    </div>
  )}
</div>
)};

export default AccordionMenu;