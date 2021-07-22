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
            <div className="insert-104 insert-104-a">
              <Link to="/work">View My Work</Link>
            </div>
            <div className="insert-104 insert-104-b">
              <a target="_blank" href="resume.pdf">My Resume</a>
            </div>

            <div className="insert-104 insert-104-c">
              <p>Building value through creative copy and strategy.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Landing;
