import React from 'react';
//import logo from '../../logo.svg';
import './App.css';
import Landing from '../Landing/Landing';
import galleryObjects from '../GalleryObject/GalleryObjectDetails';
import GalleryContainer from '../GalleryContainer/GalleryContainer';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

/*
shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
*/


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
