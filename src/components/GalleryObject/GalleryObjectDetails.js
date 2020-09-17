const galleryObjects = [
  {
    file: 'callme',
    title: 'Call Me!',
    description: 'This was created for a friend. I find a great deal of inspiration from street art, and stencils.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/callme.jpg'
  },
  {
    file: 'digitalscenery',
    title: 'Digital Scenery',
    description: 'A retro sci-fi concept created by digital collage, and blending techniques.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/digitalscenery.jpg'
  },
  {
    file: 'owltattoomock',
    title: 'Owl Tattoo Mock-up',
    description: 'A tattoo concept for a series of pieces where fauna is formed by flora.',
    media: 'Photoshop, Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/owltattoomock.jpg'
  },
  {
    file: 'jeffQA',
    title: 'Jeff: QA',
    description: 'A character (Jeff) designed for an animated web series.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/jeffQA.jpg'
  },
  {
    file: 'imagine',
    title: 'Imagine Changing the World',
    description: 'Commissioned mural for Imagine Harvard school in Cleveland, OH.',
    media: 'Spray paint',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/ImagineChangingTheWorld.jpg'
  }, 
  {
    file: 'ToastPoster',
    title: 'Toast Improv Poster',
    description: 'Poster designed for the Toast Improv group.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/ToastPoster.jpg'
  },
  {
    file: 'steveQA',
    title: 'Steve: QA',
    description: 'A character (Steve) designed for an animated web series.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/steveQA.png'
  },
  {
    file: 'elephantTattoo',
    title: 'Elephant Tattoo Mock-up',
    description: 'A tattoo concept for a series of pieces where fauna is formed by flora.',
    media: 'Photoshop, Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/elephantTattoo.jpg'
  },
  {
    file: 'rachelQA',
    title: 'Rachel: QA',
    description: 'A character (Rachel) designed for an animated web series.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/rachelQA.png'
  },
  {
    file: 'epiphany',
    title: 'Epiphany',
    description: 'The first of three handmade skateboards and custom painted designs created for the "Board to Death" artshow.',
    media: 'Paint markers, acrylic Paint, sharpie',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/epiphany.jpg'
  }, 
  {
    file: 'kingsofNY',
    title: 'Kings of New York',
    description: 'T-Shirt design example with Graffiti lettering.',
    media: '',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/kingsofNY.jpg'
  },
  {
    file: 'MDshirt',
    title: 'Maryland T-Shirt Design',
    description: 'T-Shirt design for Maryland pride with cityscape of Baltimore.',
    media: 'Pen & Ink, Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/MDshirt.jpg'
  },
  {
    file: 'goodbyebluemondays',
    title: 'Goodbye Blue Mondays',
    description: 'Street art inspired self-portrait.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/goodbyebluemondays.jpg'
  },
  {
    file: 'breezyclean',
    title: 'Breezy Clean',
    description: 'Logo concept for Breezy Clean company.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/breezyclean.jpg'
  },
  {
    file: 'cleboard',
    title: 'Carbon Copy Labs: Cleveland Rides',
    description: 'Skateboard graphic designed with Cleveland sports team logos.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/cleboard.jpg'
  },
  {
    file: 'artshowinvite',
    title: 'Coalesce Art Show Invitation',
    description: 'College Art Show Invitation design.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/artshowinvite.jpg'
  },
  {
    file: 'oldhaunts',
    title: 'Old Haunts Brewing',
    description: 'Logo concept for Old Haunts Brewing company.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/OldHaunts.jpg'
  }, 
  {
    file: 'clegraff',
    title: 'Cleveland Burner',
    description: 'The second of three handmade skateboards and custom painted designs created for the "Board to Death" artshow.',
    media: 'Paint marker, sharpie, arcylic paint',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/ClevelandGraff.jpg'
  }, 
  {
    file: 'carboncopylogo',
    title: 'Carbon Copy Labs Logo',
    description: 'Logo for Carbon Copy Labs, a handmade skateboard company operated by myself, and friend.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/carboncopylogo.png'
  },
  {
    file: 'cclbanners',
    title: 'Carbon Copy Labs Site Banners',
    description: 'Banners for Carbon Copy Labs website, a handmade skateboard company operated by myself, and friend.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/cclbanners.jpg'
  },  
  {
    file: 'wishyouwerehere',
    title: 'Wish You Were Here',
    description: 'Abstract art created for college art show.',
    media: 'Photoshop, Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/wishyouwerehere.jpg'
  }, 
  {
    file: 'syntaxerror',
    title: 'Syntax Error',
    description: 'The third of three handmade skateboards and custom painted designs created for the "Board to Death" artshow.',
    media: 'Paint marker, sharpie, arcylic paint, wood stain',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/NineToFive.jpg'
  }
];

export default galleryObjects;