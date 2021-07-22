import React from 'react';

const Contact = props => {
  return (
    <div className="page page-contact">
      <div className="insert-101 insert-101-a">
        <h1>Get in contact with me!</h1>
      </div>
      <div className="insert-101 insert-101-b">
        <div className="insert-102 insert-102-a">
          <div className="insert-103 insert-103-a">
            <i className="fas fa-mobile-alt fa-2x"></i>
          </div>
          <div className="insert-103 insert-103-b">
            <a href="tel:+1-310-561-6618">(310) 561-6618</a>
          </div>
        </div>
        <div className="insert-102 insert-102-b">
          <div className="insert-103 insert-103-a">
            <i className="fas fa-envelope fa-2x"></i>
          </div>
          <div className="insert-103 insert-103-b">
            <a href="mailto:evelyntoon.618@gmail.com">evelyntoon.618@gmail.com</a>
          </div>
        </div>
        <div className="insert-102 insert-102-c">
          <div className="insert-103 insert-103-a">
            <i className="fab fa-linkedin fa-2x"></i>
          </div>
          <div className="insert-103 insert-103-b">
            <a href="https://www.linkedin.com/in/evelyn-toon" target="_blank">evelyn-toon (linkedin)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
