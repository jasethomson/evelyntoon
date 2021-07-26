import React from 'react';
import Nav from './nav';
import PostNav from './postnav';

const NavHeader = props => {
  return (
    <header>
      <div className="headerInner">
        <Nav />
      </div>
    </header>
  );
}

export default NavHeader;
