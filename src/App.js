import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Home from './Home';
import './App.css';
import FlashcardFinder from './FlashcardFinder';
import Academy from './Academy';
import Instructor from './Instructor';
import FlashcardDashboard from './AdminDashboard';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/findcard' element={<FlashcardFinder/>}/>
          <Route path='/academy' element={<Academy/>}/>
          <Route path='/instructor' element={<Instructor/>}/>
          <Route path="/admin" element={<FlashcardDashboard/>} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}



export default App;
