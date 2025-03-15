const videoCards = [
  { image: "images/disney.png", video: "video/disney.mp4" },
  { image: "images/pixar.png", video: "video/pixar.mp4" },
  { image: "images/marvel.png", video: "video/marvel.mp4" },
  { image: "images/star-wars.png", video: "video/star-war.mp4" },
  { image: "images/geographic.png", video: "video/geographic.mp4" }
];
// Data for movies
const sectionsData = [
  {
    title: "Popular Language",
    movies: [ 
      
      { imgSrc: "images/language1.webp"},
      { imgSrc: "images/language2.webp"},
      { imgSrc: "images/language3.webp"},
      { imgSrc: "images/language4.webp"},
      { imgSrc: "images/language5.webp"},
      { imgSrc: "images/language6.webp"},
      { imgSrc: "images/language7.webp"},
      { imgSrc: "images/language6.webp"},
      { imgSrc: "images/language4.webp"},
    ]
  },
  {
    title: "Popular Channels",
    movies: [
      { imgSrc: "images/popu1.webp"},
      { imgSrc: "images/popu2.webp"},
      { imgSrc: "images/popu3.webp"},
      { imgSrc: "images/popu4.webp"},
      { imgSrc: "images/popu5.webp"},
      { imgSrc: "images/popu6.webp"},
      { imgSrc: "images/popu7.webp"},
      { imgSrc: "images/popu2.webp"},
      { imgSrc: "images/popu4.webp"},
      
    ]
  },
  {
    title: "Popular Genres",
    movies: [
      { imgSrc: "images/gen1.webp"},
      { imgSrc: "images/gen2.webp"},
      { imgSrc: "images/gen3.webp"},
      { imgSrc: "images/gen4.webp"},
      { imgSrc: "images/gen5.webp"},
      { imgSrc: "images/gen6.webp"},
      { imgSrc: "images/gen7.webp"},
      { imgSrc: "images/gen8.webp"},
      { imgSrc: "images/gen4.webp"},
    ]
  },
  {
    title: "Popular Sports",
    movies: [
      { imgSrc: "images/sport1.webp"},
      { imgSrc: "images/sport2.webp"},
      { imgSrc: "images/sport3.avif"},
      { imgSrc: "images/sport4.webp"},
      { imgSrc: "images/sport5.webp"},
      { imgSrc: "images/sport6.webp"},
      { imgSrc: "images/sport7.webp"},
      { imgSrc: "images/sport8.webp"},
      { imgSrc: "images/sport4.webp"},
    ]
  }
];

// Define content sections as an array of objects
const sections = [
  {
    title: 'Company',
    items: [
      { text: 'About Us', href: '#' },
      { text: 'Careers', href: '#' },
    ],
  },
  {
    title: 'View Website in',
    items: [{ text: '✔ English', href: null }],
  },
  {
    title: 'Need Help?',
    items: [
      { text: 'Visit Help Center', href: '#' },
      { text: 'Share Feedback', href: '#' },
    ],
  },
  {
    title: 'Connect with Us',
    socialLinks: [
      { href: '#', iconClass: 'fab fa-facebook' },
      { href: '#', iconClass: 'fab fa-x-twitter' },
      { href: '#', iconClass: 'fa-brands fa-youtube' },
      { href: '#', iconClass: 'fa-brands fa-whatsapp' },
    ],
  },
];
