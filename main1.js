
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
}
sectionsData.forEach(section => createSection(section));