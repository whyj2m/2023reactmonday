// App.js

import React from 'react';
import Navbar from './components/NavBar';
import VideoBox from './components/VideoBox';
import Section01 from './components/Section01';
import Section02 from './components/Section02';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='topcontent'>
        <Navbar/>
        <div className="content-container">
          <VideoBox/>
          <Section01/>
          <Section02/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
