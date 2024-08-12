import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/"><img src="tuf.jpg" alt="Logo" className="logo" /></a>
        <Link to="/dashboard">
          <button className="make-flashcards-btn">Dashboard</button>
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/academy">Why It Works</a></li>
          <li><a href="/instructor">Educators</a></li>
          {/* <li><a href="#businesses">Businesses</a></li> */}
          <li><a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/">DSA SHEET</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <a href="#login" className="login-link">Log In</a>
        <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"><button className="get-started-btn">Get Started</button></a>
      </div>
    </header>
  );
};

export default Header;
