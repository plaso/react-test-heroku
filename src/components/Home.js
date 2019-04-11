import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>
        This is the home page
      </p>
      <Link className="App-link" to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link className="App-link" to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
    </div>
  );
};

export default Home;