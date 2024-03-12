import React from 'react';
import AccordionMenu from './AccordionMenu';

const Header = () => {
  return (
    <header className="container d-flex justify-content-between align-items-center py-3">
      <h1>My Awesome App</h1>
      <AccordionMenu />
    </header>
  );
};

export default Header;