import React from 'react';

import './assets/styles/global.css'
import './assets/styles/app.css'

import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Jobs from './sections/Jobs';

function App() {
  return (
    <div>
      <Header/>
      <div className="page">
        <About/>
        <Jobs/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
