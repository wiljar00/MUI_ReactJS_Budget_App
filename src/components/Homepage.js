import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
      <div className="homepage-container">
        <div className="background-image">
          <div className="background-overlay"></div>
          <div className="content">
            <h1>Welcome to Your Financial Tracker</h1>
            <p className="app-description">
              Your one-stop solution for managing your finances efficiently and effortlessly.
            </p>
            <div className="button-container">
              <Link to="/graphs">
                <button className="homepage-button">Go to Graphs</button>
              </Link>
              <Link to="/budget">
                <button className="homepage-button">Go to Budget</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Homepage;