import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, PostRoutes } from '../utils/routes';
import { HashLink } from 'react-router-hash-link';
import { addHtmlCls } from './tools';

const Nav = () => {
  const [hide, setHide] = useState({
    hamburger: 'showNav',
    nav: 'hideNav'
  });
  const handleChange = path => {
    console.log('nav handleChange', path);
    let nav = hide.nav === "hideNav" ? 'showNav' : "hideNav";
    let hamburger = hide.hamburger === "hideNav" ? 'showNav' : "hideNav";
    nav === "showNav" ?
      document.getElementsByTagName('header')[0].classList.add('showNav') :
      document.getElementsByTagName('header')[0].classList.remove('showNav');
    setHide({
      hamburger: hamburger,
      nav: nav
    });
    addHtmlCls(path);
  }
  const routes = Routes(true);
  const postRoutes = PostRoutes(true);
  return (
    <React.Fragment>
      <i className={`fas fa-bars fa-2x cursor-pointer ${hide.hamburger}`} onClick={handleChange}></i>
      <h3 className={`nav-name ${hide.hamburger}`}>Evelyn Toon</h3>
      <nav className={`${hide.nav}`}>
        <div className="insert-nav-inner">
          <div className="insert-101 insert-101-a">
            <ul>
              {routes.map(route => <li key={`link-${route.title}`}><Link onClick={() => handleChange(route.path)} to={route.path}>{route.title}</Link></li>)}
            </ul>
          </div>
          <div className="insert-101 insert-101-b">
            <h3>Evelyn Toon</h3>
          </div>
          <div className="insert-101 insert-101-c">
            <ul>
              {postRoutes.map(route => <li key={`link-${route.title}`}><HashLink onClick={() => handleChange(route.path)} to={route.path}>{route.title}</HashLink></li>)}
            </ul>
          </div>
        </div>
        <i className={`fas fa-times fa-2x cursor-pointer ${hide.nav}`} onClick={() => handleChange(route.path)}></i>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
