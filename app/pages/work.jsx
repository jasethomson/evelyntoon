import React from 'react';
import Header from '../components/header';

const Work = props => {
  return (
    <div className="page page-work">
      <section id="seo" className="sec sec-1">
        <div className="insert-101 insert-101-a">
          <Header title="SEO" />
        </div>
      </section>
      <section id="print" className="sec sec-2">
        <Header title="Print" />
      </section>
      <section id="social" className="sec sec-3">
        <Header title="Social" />
      </section>
    </div>
  );
}

export default Work;
