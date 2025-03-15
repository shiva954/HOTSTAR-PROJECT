

// Video cards


const container = document.createElement('div');
container.classList.add('video-card-container');
document.body.appendChild(container);

videoCards.forEach(card => {
  const videoCard = document.createElement('div');
  videoCard.classList.add('video-card');

  const image = document.createElement('img');
  image.src = card.image;
  image.classList.add('video-card-image');
  image.alt = '';

  const video = document.createElement('video');
  video.src = card.video;
  video.muted = true;
  video.loop = true;
  video.classList.add('card-video');

  // Add hover functionality directly
  videoCard.addEventListener('mouseover', () => video.play());
  videoCard.addEventListener('mouseleave', () => video.pause());

  videoCard.appendChild(image);
  videoCard.appendChild(video);
  container.appendChild(videoCard);
});
// Function to create sports video sections
function createVideoSections(sections) {
  sections.forEach(section => {
      // Section Title
      const sectionTitle = document.createElement("h1");
      sectionTitle.className = "sports-title";
      sectionTitle.textContent = section.title;

      // Section Container
      const sectionContainer = document.createElement("div");
      sectionContainer.className = "sports-section";

      // Card Container
      const cardContainer = document.createElement("div");
      cardContainer.className = "sports-card-container";

      // Video Cards
      section.movies.forEach(videoData => {
          const card = document.createElement("div");
          card.className = "sports-card";

          const videoElement = document.createElement("video");
          videoElement.src = videoData.video;
          videoElement.className = "sports-video";
          videoElement.controls = true;

          card.appendChild(videoElement);
          cardContainer.appendChild(card);
      });

      // Append elements
      sectionContainer.appendChild(cardContainer);
      document.body.appendChild(sectionTitle);
      document.body.appendChild(sectionContainer);
  });
}

// Call the function
createVideoSections(sectionsData);


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
