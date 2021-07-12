import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, PostRoutes } from '../utils/routes';

const Nav = () => {
  const routes = Routes(true);
  const postRoutes = PostRoutes(true);
  return (
    <nav>
      <div className="insert-101 insert-101-a">
        <ul>
          {routes.map(route => <li key={`link-${route.title}`}><Link to={route.path}>{route.title}</Link></li>)}
        </ul>
      </div>
      <div className="insert-101 insert-101-b">
        <h3>Evelyn Toon</h3>
      </div>
      <div className="insert-101 insert-101-c">
        <ul>
          {postRoutes.map(route => <li key={`link-${route.title}`}><Link to={route.path}>{route.title}</Link></li>)}
        </ul>
      </div>


    </nav>
  );
}

export default Nav;
