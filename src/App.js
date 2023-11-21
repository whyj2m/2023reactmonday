// App.js

import React from 'react';
import Navbar from './components/NavBar';
import VideoBox from './components/VideoBox';
import Section01 from './components/Section01';

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
        </div>
      </div>
    </div>
  );
}

export default App;
