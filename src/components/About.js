import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <p>Now you are in about page</p>
      <Link className="App-link" to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link className="App-link" to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
    </div>
  );
};

export default About;