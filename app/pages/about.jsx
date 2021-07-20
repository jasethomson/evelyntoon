import React from 'react';
import Header from '../components/header';

const About = props => {
  return (
    <div className="page page-about">
      <div className="insert-101 insert-101-a">
        <div className="insert-innner">
          <Header title="About Me" />
          <div className="insert-102 insert-102-a">
            <p>Hi there, I’m Evelyn Toon!</p>
          </div>
          <div className="insert-102 insert-102-b">
            <p>I’m a Content Coordinator specializing in search engine optimization and product copy.</p>
          </div>
          <div className="insert-102 insert-102-c">
            <p>From niche knick knacks to collaborative collections, I know how to make products do the talking (through words that is).</p>
          </div>
          <div className="insert-102 insert-102-d">
            <p>Here are 4 things you should know about me:</p>
            <ol>
              <li><p>I believe that content creation is composed of both creativity and research. Highlighting all that a brand has to offer requires a unique perspective as well as the ability to be seen.</p></li>
              <li><p>I have a floppy dog named Harper who I love to go on hikes with.</p></li>
              <li><p>My copywriting skills cover both short and long copy - from engaging taglines to company best practices.</p></li>
              <li><p>I have a background in fashion merchandising, so I’ve got a small obsession with textiles and what products are made of.</p></li>
            </ol>
          </div>
        </div>
      </div>
      <div className="insert-101 insert-101-b">
        <div className="insert-inner">
          <div className="insert-102 insert-102-a">
            <img src="images/evelynToon.jpg" alt="Evelyn Toon image" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
