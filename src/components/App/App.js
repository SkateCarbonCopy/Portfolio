import React from 'react';
//import logo from '../../logo.svg';
import './App.css';
import Landing from '../Landing/Landing';
import galleryObjects from '../GalleryObject/GalleryObjectDetails';
import GalleryContainer from '../GalleryContainer/GalleryContainer';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Landing />
      <AboutMe />
      <GalleryContainer galleryObjects={galleryObjects} />
      <Footer />
    </div>
  );
}

export default App;
