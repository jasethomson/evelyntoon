import React, { useContext, createContext } from 'react';

const Header = props => {
  return (
    <div className={`header ${props.className ? props.className : null}`}>
      {props.title ? <h1>{props.title}</h1> : ""}
    </div>
  );
}

export default Header;
