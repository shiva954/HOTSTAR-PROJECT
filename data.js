 let movies = [
  {
    name: "wanda vision",
    des: "A journey into mystery and magic in the Marvel Universe.",
    image: "images/slider 3.png",
  },
  {
    name: "falcon and the winter soldier",
    des: "Action and camaraderie take flight in this dynamic series.",
    image: "images/slider 2.png",
  },
  {
    name: "raya and the last dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 4.png",
  },
  {
    name: "loki",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 1.png",
  },
  {
    name: "luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 5.png",
  },
];

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
    title: "Latest Releases",
    movies: [ 
      
      { imgSrc: "images/latest1.webp", name: "THUKRA KE MERA PYAAR", description: "Most Trending Latest Release Movie."},
      { imgSrc: "images/latest2.webp", name: "HARIKATHA", description:"Most Trending Latest Release Movie."},
      { imgSrc: "images/latest3.jpeg", name: "PARACHUTE", description:"Most Trending Latest Release Movie." },
      { imgSrc: "images/latest4.webp", name: "SKELETON CREW", description:"Most Trending Latest Release Movie. "},
      { imgSrc: "images/latest5.webp", name: "TSUNAMI RACE AGAINST TIME", description:"Most Trending Latest Release Movie. " },
      { imgSrc: "images/latest6.webp", name: "KISHKINDHA KAANDAM", description:  "Most Trending Latest Release Movie."},
      { imgSrc: "images/latest7.webp", name: "ALIEN ROMULUS", description: "Most Trending Latest Release Movie."},
      { imgSrc: "images/latest6.webp", name: "KISHKINDHA KAANDAM", description:  "Most Trending Latest Release Movie."},
      { imgSrc: "images/latest7.webp", name: "ALIEN ROMULUS", description: "Most Trending Latest Release Movie."},
    ]
  },
  {
    title: "Top 10 in India Today - Hindi",
    movies: [
      { imgSrc: "images/top1.webp", name: "SALAAR", description: "Most Trending Movie in Hindi." },
      { imgSrc: "images/top2.webp", name: "AAVESHAM", description: "Most Trending Movie in Hindi." },
      { imgSrc: "images/top3.webp", name: "ARM", description: "Most Trending Movie in Hindi." },
      { imgSrc: "images/top4.webp", name: "SARFIRA", description: "Most Trending Movie in Hindi." },
      { imgSrc: "images/top5.webp", name: "KISHKINDHA KAANDAM", description: "Most Trending Movie in Hindi." },
      { imgSrc: "images/top6.webp", name: "DEADPOOL & WOLVERINE", description: "Most Trending Movie in Hindi." },
      { imgSrc: "images/top4.webp", name: "SARFIRA", description: "Most Trending Movie in Hindi." },
      { imgSrc: "images/top5.webp", name: "KISHKINDHA KAANDAM", description: "Most Trending Movie in Hindi." },
      { imgSrc: "images/top6.webp", name: "DEADPOOL & WOLVERINE", description: "Most Trending Movie in Hindi." },
      
    ]
  },
  {
    title: "Star Maa Shows",
    movies: [
      { imgSrc: "images/maa1.webp", name: "BIGG BOSS", description: "Famous Show in Star maa." },
      { imgSrc: "images/maa2.webp", name: "MAHABHARATAM", description: "Famous Serial in Star maa." },
      { imgSrc: "images/maa3.webp", name: "BRAHMAMUDI", description: "Famous Serial in Star maa." },
      { imgSrc: "images/maa4.webp", name: "AADIVAARAM WITH STAR MAA PARIVAARAM", description: "Famous Show in Star maa." },
      { imgSrc: "images/maa5.webp", name: "KARTHIKA DEEPAM", description: "Famous Serial in Star maa." },
      { imgSrc: "images/maa6.webp", name: "Thor Ragnarok", description: "Famous Serial in Star maa." },
      { imgSrc: "images/maa7.webp", name: "GUNDENINDA GUDIGANTALU", description: "Famous Serial in Star maa." },
      { imgSrc: "images/maa5.webp", name: "KARTHIKA DEEPAM", description: "Famous Serial in Star maa." },
      { imgSrc: "images/maa6.webp", name: "Thor Ragnarok", description: "Famous Serial in Star maa." },
      { imgSrc: "images/maa7.webp", name: "GUNDENINDA GUDIGANTALU", description: "Famous Serial in Star maa." },
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