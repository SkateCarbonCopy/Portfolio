import React from 'react';
//import logo from '../../logo.svg';
import './App.css';
import Landing from '../Landing/Landing';
import GalleryContainer from '../GalleryContainer/GalleryContainer';

const callMe = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/callme.jpg'
};

const digitalScenery = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/digitalscenery.jpg'
};

const owl = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/owltattoomock.png'
};

const jeffQA = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/jeffQA.png'
};

const toast = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/ToastPoster.jpg'
};

const steveQA = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/steveQA.png'
};

const neverForget = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/elephantTattoo.jpg'
};

const rachelQA = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/rachelQA.png'
};

const kingsOfNY = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/kingsofNY.jpg'
};

const mdShirt = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/MDshirt.jpg'
};

const goodbyeBlueMondays = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/goodbyebluemondays.jpg'
};

const cle = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/cleboard.png'
};

const artShow = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/artshowinvite.jpg'
};

const ccl = {
  imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/carboncopylogo.png'
};

export const galleryObjects = [callMe, digitalScenery, owl, jeffQA, toast, steveQA, neverForget, rachelQA, kingsOfNY, mdShirt, goodbyeBlueMondays, cle, artShow, ccl];

function App() {
  return (
    <div className="App">
      <Landing />
      <GalleryContainer galleryObjects={galleryObjects} />
    </div>
  );
}

export default App;
