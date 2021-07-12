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
        <button>
          <Link to="/work">View My Work</Link>
        </button>
        <button>
          <a target="_blank" href="resume.pdf">My Resume</a>
        </button>
      </div>
    </div>

  );
}

export default Landing;
