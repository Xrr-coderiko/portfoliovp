import React from 'react'
import './App.css';
import Home from './PortfolioContainer/Home/Home';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import Project from './PortfolioContainer/Projects/Project';


function App() {
  return (
    <div className="App">
      <PortfolioContainer/>
      <button className='hbtn'
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          borderRadius: '80px',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          border: 'none',
          backgroundColor: '#33ccff',
          color: '^',
          textAlign: 'center',
        }}
      >
        ^
      </button>
    </div>
  );
}

export default App;
