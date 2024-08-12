import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
    <div className="content">
      <h1>Rise to your challenge.</h1>
      <p>Flashcards for serious learners.</p>
      <Link to="/findcard">
      <button className="find-flashcards-btn">Find Flashcards</button>
      </Link>
      <Link to="/dashboard">
      <button className="make-flashcards-btn">Dashboard</button>
      </Link>
      <a href='https://takeuforward.org/array/top-array-interview-questions-structured-path-with-video-solutions/'><button className="watch-video-btn">Watch Video</button></a>
      <div>
      <Link to="/admin">
      <button className="find-flashcards-btn">Admin</button>
      </Link>
      </div>
    </div>
  );

  export default Home;