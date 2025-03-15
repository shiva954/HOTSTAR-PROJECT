// Create a new video element
const videoElement = document.createElement("video");

// Set video attributes
videoElement.src = "video/gc.mp4"; // Replace with your video source
videoElement.controls = true;
videoElement.autoplay = false;

// Add a CSS class to the video element
videoElement.className = "custom-video";

// Append to the body or another container
document.body.appendChild(videoElement);




// Function to create a section dynamically
function createSection(section) {
  // Section Title
  const sectionTitle = document.createElement("h1");
  sectionTitle.className = "title";
  sectionTitle.textContent = section.title;

  // Section Container
  const sectionContainer = document.createElement("div");
  sectionContainer.className = "movies-list";

  // Navigation Buttons
  const preButton = document.createElement("button");
  preButton.className = "pre-btn";
  preButton.innerHTML = `<img src="images/pre.png" alt="">`;

  const nxtButton = document.createElement("button");
  nxtButton.className = "nxt-btn";
  nxtButton.innerHTML = `<img src="images/nxt.png" alt="">`;

  // Card Container
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  // Movie Cards
  section.movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "card-img";
    img.src = movie.imgSrc;
    img.alt = "";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const movieName = document.createElement("h2");
    movieName.className = "name";
    movieName.textContent = movie.name;

    const description = document.createElement("h6");
    description.className = "des";
    description.textContent = movie.description;

    const watchlistBtn = document.createElement("button");
    watchlistBtn.className = "watchlist-btn";
    watchlistBtn.textContent = "add to watchlist";

    cardBody.appendChild(movieName);
    cardBody.appendChild(description);
    cardBody.appendChild(watchlistBtn);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
  });
  sectionContainer.appendChild(preButton);
  sectionContainer.appendChild(nxtButton);
  sectionContainer.appendChild(cardContainer);
  document.body.appendChild(sectionTitle);
  document.body.appendChild(sectionContainer);


  // Add scroll functionality for each created section
  preButton.addEventListener("click", () => {
    cardContainer.scrollBy({ left: -cardContainer.clientWidth, behavior: "smooth" });
  });

  nxtButton.addEventListener("click", () => {
    cardContainer.scrollBy({ left: cardContainer.clientWidth, behavior: "smooth" });
  });
}

sectionsData.forEach(section => createSection(section));

// Create the footer element
const footer = document.createElement('footer');
footer.className = 'footer';
const footerContainer = document.createElement('div');
footerContainer.className = 'footer-container';
sections.forEach((section) => {
  const footerSection = document.createElement('div');
  footerSection.className = 'footer-section';
  const h4 = document.createElement('h4');
  h4.textContent = section.title;
  footerSection.appendChild(h4);
  if (section.socialLinks) {
    const socialLinksDiv = document.createElement('div');
    socialLinksDiv.className = 'social-links';
    section.socialLinks.forEach((link) => {
      const a = document.createElement('a');
      a.href = link.href;
      const icon = document.createElement('i');
      icon.className = link.iconClass;
      a.appendChild(icon);
      socialLinksDiv.appendChild(a);
    });
    footerSection.appendChild(socialLinksDiv);
  } else {
    const ul = document.createElement('ul');
    section.items.forEach((item) => {
      const li = document.createElement('li');
      if (item.href) {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
      } else {
        li.textContent = item.text;
      }
      ul.appendChild(li);
    });
    footerSection.appendChild(ul);
  }
  footerContainer.appendChild(footerSection);
});

footer.appendChild(footerContainer);
const footerBottom = document.createElement('div');
footerBottom.className = 'footer-bottom';

const p1 = document.createElement('p');
p1.textContent = '© 2024 STAR. All Rights Reserved.';
footerBottom.appendChild(p1);

const p2 = document.createElement('p');
['Terms of Use', 'Privacy Policy', 'FAQ'].forEach((text, index, array) => {
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = text;
  p2.appendChild(a);

  if (index < array.length - 1) {
    const separator = document.createTextNode(' | ');
    p2.appendChild(separator);
  }
});
footerBottom.appendChild(p2);
footer.appendChild(footerBottom);
document.body.appendChild(footer);
