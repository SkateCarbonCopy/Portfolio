const galleryObjects = [
  {
    file: 'callme',
    title: 'Call Me!',
    description: 'This was created for a friend. I find a great deal of inspiration from street art, and stencils.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/callme.jpg',
    alt: 'Black and white stencil design of "Saved By the Bell\'s" Zach Morris using an old-school telephone layered over radiating blue lines.'
  },
  {
    file: 'digitalscenery',
    title: 'Digital Scenery',
    description: 'A retro sci-fi concept created by digital collage, and blending techniques.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/digitalscenery.jpg',
    alt: 'Digital collage of person in a suit with a retro computer head sending color waves from the monitor. Background of a distorted cityscape and mathematical symbols overlaid.'
  },
  {
    file: 'owltattoomock',
    title: 'Owl Tattoo Mock-up',
    description: 'A tattoo concept for a series of pieces where fauna is formed by flora.',
    media: 'Photoshop, Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/owltattoomock.jpg',
    alt: 'Owl in flight with leaves and flowers making up the owl\'s form.'
  },
  {
    file: 'jeffQA',
    title: 'Jeff: QA',
    description: 'A character (Jeff) designed for an animated web series.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/jeffQA.jpg',
    alt: 'Casual person with long hair in gray shirt and blue jeans.'
  },
  {
    file: 'imagine',
    title: 'Imagine Changing the World',
    description: 'Commissioned mural for Imagine Harvard school in Cleveland, OH.',
    media: 'Spray paint',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/ImagineChangingTheWorld.jpg',
    alt: '"Imagine Changing the World" in graffiti letters next to globe with angel wings.'
  }, 
  {
    file: 'ToastPoster',
    title: 'Toast Improv Poster',
    description: 'Poster designed for the Toast Improv group.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/ToastPoster.jpg',
    alt: 'Faces of actors/actresses altered to appear as though burnt into toast underneath show details.'
  },
  {
    file: 'steveQA',
    title: 'Steve: QA',
    description: 'A character (Steve) designed for an animated web series.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/steveQA.png',
    alt: 'Casual person with shaved head, beard, and gray clothing.'
  },
  {
    file: 'elephantTattoo',
    title: 'Elephant Tattoo Mock-up',
    description: 'A tattoo concept for a series of pieces where fauna is formed by flora.',
    media: 'Photoshop, Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/elephantTattoo.jpg',
    alt: 'Portrait of elephant head with flows and leaves making up the features.'
  },
  {
    file: 'rachelQA',
    title: 'Rachel: QA',
    description: 'A character (Rachel) designed for an animated web series.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/rachelQA.png',
    alt: 'Person with arms folded, long hair, glasses, blue shirt, and blue jeans.'
  },
  {
    file: 'epiphany',
    title: 'Epiphany',
    description: 'The first of three handmade skateboards and custom painted designs created for the "Board to Death" artshow.',
    media: 'Paint markers, acrylic Paint, sharpie',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/epiphany.jpg',
    alt: 'Japanese demon mask drawing over graffiti background.'
  }, 
  {
    file: 'kingsofNY',
    title: 'Kings of New York',
    description: 'T-Shirt design example with Graffiti lettering.',
    media: '',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/kingsofNY.jpg',
    alt: 'Complex graffiti style using greens, and white.'
  },
  {
    file: 'MDshirt',
    title: 'Maryland T-Shirt Design',
    description: 'T-Shirt design for Maryland pride with cityscape of Baltimore.',
    media: 'Pen & Ink, Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/MDshirt.jpg',
    alt: 'Cityscape of Baltimore behind "Maryland" graffiti letters, reflected in Baltimore harbor. Black eyed Susan as the sun (Maryland state flower).'
  },
  {
    file: 'goodbyebluemondays',
    title: 'Goodbye Blue Mondays',
    description: 'Street art inspired self-portrait.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/goodbyebluemondays.jpg',
    alt: 'Monochromatic portrait using inverted colors with handstyle graffiti background'
  },
  {
    file: 'breezyclean',
    title: 'Breezy Clean',
    description: 'Logo concept for Breezy Clean company.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/breezyclean.jpg',
    alt: 'Minimal house outline with sparkles coming from chimney over text logo'
  },
  {
    file: 'cleboard',
    title: 'Carbon Copy Labs: Cleveland Rides',
    description: 'Skateboard graphic designed with Cleveland sports team logos.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/cleboard.jpg',
    alt: 'Overlapping Cleveland sports team "C" logos over "Carbon Copy" text on skateboard deck'
  },
  {
    file: 'artshowinvite',
    title: 'Coalesce Art Show Invitation',
    description: 'College Art Show Invitation design.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/artshowinvite.jpg',
    alt: 'Repeating “Coalesce” text with artist\'s portraits inside text. Smoke effect emerging from text.'
  },
  {
    file: 'oldhaunts',
    title: 'Old Haunts Brewing',
    description: 'Logo concept for Old Haunts Brewing company.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/OldHaunts.jpg',
    alt: 'Modern style fox head logo over company name text'
  }, 
  {
    file: 'clegraff',
    title: 'Cleveland Burner',
    description: 'The second of three handmade skateboards and custom painted designs created for the "Board to Death" artshow.',
    media: 'Paint marker, sharpie, arcylic paint',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/ClevelandGraff.jpg',
    alt: 'Complex "Cleveland" graffiti'
  }, 
  {
    file: 'carboncopylogo',
    title: 'Carbon Copy Labs Logo',
    description: 'Logo for Carbon Copy Labs, a handmade skateboard company operated by myself, and friend.',
    media: 'Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/carboncopylogo.png',
    alt: 'Logo with C\'s in various styles arranged to abstractly resemble a skateboard wheel rolling'
  },
  {
    file: 'cclbanners',
    title: 'Carbon Copy Labs Site Banners',
    description: 'Banners for Carbon Copy Labs website, a handmade skateboard company operated by myself, and friend.',
    media: 'Photoshop',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/cclbanners.jpg',
    alt: 'Examples of various color effects on website banners of anatomical illustrations and Carbon Copy logo'
  },  
  {
    file: 'wishyouwerehere',
    title: 'Wish You Were Here',
    description: 'Abstract art created for college art show.',
    media: 'Photoshop, Illustrator',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/wishyouwerehere.jpg',
    alt: 'Abstract 3-D shapes over various patterned backgrounds with moon in the center.'
  }, 
  {
    file: 'syntaxerror',
    title: 'Syntax Error',
    description: 'The third of three handmade skateboards and custom painted designs created for the "Board to Death" artshow.',
    media: 'Paint marker, sharpie, arcylic paint, wood stain',
    imageSrc: process.env.PUBLIC_URL + '/_assets/img/gallery/NineToFive.jpg',
    alt: 'Coffin shaped skateboard with business person with retro computer as a head.'
  }
];

export default galleryObjects;