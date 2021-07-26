import React from 'react';
import Landing from '../pages/landing';
import About from '../pages/about';
import Contact from "../pages/contact";
import Work from "../pages/work";

export const Routes = nav => {
  const routes = [
    { title: "About", component: About, path: "/about" },
    { title: "Contact", component: Contact, path: "/contact" }
  ];
  const landing = { title: "Home", component: Landing, path: "/" };
  nav ? routes.unshift(landing) : routes.push(landing);
  return routes;
}

export const PostRoutes = () => {
  return [
    { title: "SEO", component: Work, path: "work#seo" },
    { title: "Print", component: Work, path: "work#print" },
    { title: "Social", component: Work, path: "work#social" }
  ];
}

export const NoNavRoutes = () => {
  return [
    { title: "", component: Work, path: "/work" },
  ];
}
