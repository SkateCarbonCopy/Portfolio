import React from 'react';
//import logo from '../../logo.svg';
import './App.css';
import Cover from '../Cover/Cover';
import GalleryContainer from '../GalleryContainer/GalleryContainer';

const galleryObject = {
  imageSrc: 'https://mdbootstrap.com/img/Photos/Others/images/58.jpg'
};

export const galleryObjects = [galleryObject, galleryObject, galleryObject, galleryObject, galleryObject, galleryObject];

function App() {
  return (
    <div className="App">
      <Cover />
      <GalleryContainer galleryObjects={galleryObjects} />
    </div>
  );
}

export default App;
