import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';

const Landing = props => {
  return (
    <div className="page page-landing">
      <div className="insert-101 insert-101-a">
        <Header className="insert-102 insert-102-a" title={"CONTENT COORDINATOR"} />
      </div>
      <div className="insert-101 insert-101-b">
        <div className="insert-102 insert-102-a">
          <div className="insert-103 insert-103-a">
            <Link to="/work">View My Work</Link>
          </div>
          <div className="insert-103 insert-103-b">
            <a target="_blank" href="resume.pdf">My Resume</a>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Landing;
