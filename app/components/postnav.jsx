import React from 'react';
import { Link } from 'react-router-dom';
import { PostRoutes } from '../utils/routes';

const PostNav = () => {
  const routes = PostRoutes();
  return (
    <nav>
      <ul>
        {routes.map(route => <li key={`link-${route.path}`}><Link to={route.path}>{route.title}</Link></li>)}
      </ul>
    </nav>
  );
}

export default PostNav;
