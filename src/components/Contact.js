import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <p>Now you are in contact page</p>
      <Link className="App-link" to="/home" style={{ marginRight: '10px' }}>Home</Link>
      <Link className="App-link" to="/about" style={{ marginRight: '10px' }}>About</Link>
    </div>
  );
};

export default Contact;