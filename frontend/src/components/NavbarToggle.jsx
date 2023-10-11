import React, { useState } from 'react';
import NavbarDesign1 from './NavbarDesign1';
import NavbarDesign2 from './NavbarDesign2';
import NavbarDesign3 from './NavbarDesign3';

const NavbarToggle = ({ setNavbarDesign }) => {
  const handleDesignChange = (design) => {
    setNavbarDesign(design);
  };

  return (
    <div>
      <button onClick={() => handleDesignChange('NavbarDesign1')}>Navbar 1</button>
      <button onClick={() => handleDesignChange('NavbarDesign2')}>Navbar 2</button>
      <button onClick={() => handleDesignChange('NavbarDesign3')}>Navbar 3</button>
    </div>
  );
};

export default NavbarToggle;
