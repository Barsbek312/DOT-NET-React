import Header from './Header';
import AboutUs from './pages/About-Us/AboutUs'
import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper clear">
      <Header/>
      <AboutUs/>
    </div>
  );
}

export default App;
