// Implement a React App With Two Routes Using React Router (Home and About) all components are in this file only

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '30px' }}>Home</h1>

      <p>This is the application's home page.</p>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '30px' }}>About</h1>

      <p>This is the application's about page.</p>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', border: '5px solid black', margin: '20px', width: '400px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
