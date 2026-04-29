const movies = [
  {
    title: "Vikram",
    genre: "Action",
    year: 2022,
    runtime: "2h 55m",
    rating: 4.8,
    size: "7.2 GB",
    downloads: "4.2M",
    quality: "4K",
    poster: "image/vikram.jpg",
    banner: "image/vikram-bg.jpg",
    description: "A black-ops investigation reveals a hidden war led by a ghost from the past.",
    crew: "Cast: Kamal Haasan, Vijay Sethupathi, Fahadh Faasil | Dir: Lokesh Kanagaraj"
  },
  {
    title: "Master",
    genre: "Action",
    year: 2021,
    runtime: "2h 59m",
    rating: 4.6,
    size: "7.5 GB",
    downloads: "4.5M",
    quality: "4K",
    poster: "image/Master.jpg",
    banner: "image/master-bg.jpg",
    description: "A troubled professor at a juvenile home clashes with a ruthless criminal mastermind.",
    crew: "Cast: Vijay, Vijay Sethupathi, Malavika Mohanan | Dir: Lokesh Kanagaraj"
  },
  {
    title: "Withlove",
    genre: "Drama",
    year: 2026,
    runtime: "2h 11m",
    rating: 4.7,
    size: "5.2 GB",
    downloads: "2.0M",
    quality: "1080p",
    poster: "image/withlove.jpg",
    banner: "image/withlove-bg.jpg",
    description: "A heartfelt story about love, choices, and second chances.",
    crew: "Cast: Abishan Jeevinth, Anaswara Rajan | Dir: P Madan"
  },
  {
    title: "Thiruchitrambalam",
    genre: "Romance",
    year: 2022,
    runtime: "2h 13m",
    rating: 4.5,
    size: "5.6 GB",
    downloads: "2.9M",
    quality: "1080p",
    poster: "image/thiruchitrambalam.jpg",
    banner: "image/thiruchitrambalam-bg.jpg",
    description: "A young delivery worker navigates family pressure and unexpected romance.",
    crew: "Cast: Dhanush, Nithya Menen | Dir: Mithran Jawahar"
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "Action",
    year: 2021,
    runtime: "2h 28m",
    rating: 4.8,
    size: "7.1 GB",
    downloads: "5.2M",
    quality: "4K",
    poster: "image/spidy.jpg",
    description: "Peter Parker faces multiverse chaos when old enemies return.",
    crew: "Cast: Tom Holland, Zendaya | Dir: Jon Watts"
  },
  {
    title: "The Amazing Spider-Man 2",
    genre: "Action",
    year: 2014,
    runtime: "2h 22m",
    rating: 4.3,
    size: "6.4 GB",
    downloads: "3.7M",
    quality: "1080p",
    poster: "image/asm2.jpg",
    description: "Spider-Man battles powerful new villains while protecting New York.",
    crew: "Cast: Andrew Garfield, Emma Stone | Dir: Marc Webb"
  },
  {
    title: "Kung Fu Panda",
    genre: "Animation",
    year: 2008,
    runtime: "1h 32m",
    rating: 4.4,
    size: "4.0 GB",
    downloads: "3.3M",
    quality: "720p",
    poster: "image/kung  fu panda.jpg",
    description: "An unlikely panda is chosen to become the Dragon Warrior.",
    crew: "Cast: Jack Black, Dustin Hoffman | Dir: Mark Osborne"
  },
  {
    title: "Cars",
    genre: "Animation",
    year: 2006,
    runtime: "1h 57m",
    rating: 4.2,
    size: "4.3 GB",
    downloads: "2.8M",
    quality: "720p",
    poster: "image/Cars.jpg",
    description: "A race car learns humility and friendship in a small town.",
    crew: "Cast: Owen Wilson, Paul Newman | Dir: John Lasseter"
  },
  {
    title: "Hachiko",
    genre: "Drama",
    year: 2009,
    runtime: "1h 33m",
    rating: 4.7,
    size: "4.8 GB",
    downloads: "2.6M",
    quality: "1080p",
    poster: "image/hachiko.jpg",
    description: "A loyal dog waits every day for his owner beyond all odds.",
    crew: "Cast: Richard Gere, Joan Allen | Dir: Lasse Hallstrom"
  },
  {
    title: "Coco",
    genre: "Animation",
    year: 2017,
    runtime: "1h 45m",
    rating: 4.6,
    size: "4.1 GB",
    downloads: "2.5M",
    quality: "720p",
    poster: "image/coco.jpg",
    description: "A music-loving boy enters a magical world to uncover his family history.",
    crew: "Cast: Anthony Gonzalez, Gael Garcia Bernal | Dir: Lee Unkrich"
  },
  {
    title: "Kudumbasthan",
    genre: "Comedy",
    year: 2024,
    runtime: "2h 06m",
    rating: 4.1,
    size: "5.1 GB",
    downloads: "1.9M",
    quality: "1080p",
    poster: "image/kudumbasthan.jpg",
    description: "A chaotic family comedy full of misunderstandings and heartfelt moments.",
    crew: "Cast: K Manikandan, Saanve Megghana | Dir: Rajeshwar Kalisamy"
  },
  {
    title: "Aavesham",
    genre: "Comedy",
    year: 2024,
    runtime: "2h 32m",
    rating: 4.4,
    size: "5.8 GB",
    downloads: "2.7M",
    quality: "1080p",
    poster: "image/aavesham.jpg",
    description: "Three students get pulled into the wild world of a powerful local gangster.",
    crew: "Cast: Fahadh Faasil, Hipzster | Dir: Jithu Madhavan"
  },
  {
    title: "Don",
    genre: "Comedy",
    year: 2022,
    runtime: "2h 44m",
    rating: 4.2,
    size: "5.6 GB",
    downloads: "2.5M",
    quality: "1080p",
    poster: "image/don.jpg",
    description: "A carefree student matures through college life, friendship, and family bonds.",
    crew: "Cast: Sivakarthikeyan, Priyanka Arul Mohan | Dir: Cibi Chakaravarthi"
  },
  {
    title: "Dune",
    genre: "SCI-FI",
    year: 2021,
    runtime: "2h 35m",
    rating: 4.7,
    size: "7.4 GB",
    downloads: "4.8M",
    quality: "4K",
    poster: "image/dune.jpg",
    description: "A gifted heir faces destiny on the most dangerous planet in the galaxy.",
    crew: "Cast: Timothee Chalamet, Zendaya | Dir: Denis Villeneuve"
  },
  {
    title: "Soorarai Pottru",
    genre: "Drama",
    year: 2020,
    runtime: "2h 33m",
    rating: 4.8,
    size: "6.7 GB",
    downloads: "4.0M",
    quality: "4K",
    poster: "image/soorarai pottru.jpg",
    description: "An entrepreneur battles barriers to make air travel affordable for all.",
    crew: "Cast: Suriya, Aparna Balamurali | Dir: Sudha Kongara"
  },
  {
    title: "Asuran",
    genre: "Drama",
    year: 2019,
    runtime: "2h 21m",
    rating: 4.7,
    size: "6.1 GB",
    downloads: "3.4M",
    quality: "1080p",
    poster: "image/asuran.jpg",
    description: "A father protects his family when violence tears through his village.",
    crew: "Cast: Dhanush, Manju Warrier | Dir: Vetrimaaran"
  },
  {
    title: "The Conjuring",
    genre: "Thriller",
    year: 2013,
    runtime: "1h 52m",
    rating: 4.5,
    size: "5.0 GB",
    downloads: "3.1M",
    quality: "1080p",
    poster: "image/conjuring.jpg",
    description: "Paranormal investigators help a family terrorized by a dark presence.",
    crew: "Cast: Vera Farmiga, Patrick Wilson | Dir: James Wan"
  },
  {
    title: "The Nun",
    genre: "Thriller",
    year: 2018,
    runtime: "1h 36m",
    rating: 4.0,
    size: "4.7 GB",
    downloads: "2.9M",
    quality: "1080p",
    poster:"image/nun.jpg",
    description: "A priest and a novice uncover a demonic secret in an isolated abbey.",
    crew: "Cast: Demian Bichir, Taissa Farmiga | Dir: Corin Hardy"
  },
  {
    title: "Dragon",
    genre: "Drama",
    year: 2025,
    runtime: "2h 01m",
    rating: 4.5,
    size: "5.0 GB",
    downloads: "1.9M",
    quality: "1080p",
    poster:"image/Dragon.jpg",
    description: "Following a breakup, student Ragavan leaves school and becomes involved in financial fraud. He seeks money and influence but faces increasing risks from his actions.",
    crew: "Cast: Pradeep Ranganathan, Kayadu Lohar | Dir: Ashwath Marimuthu"
  },
  {
    title: "Youth",
    genre: "Comedy",
    year: 2026,
    runtime: "2h 04m",
    rating: 4.5,
    size: "4.9 GB",
    downloads: "1.8M",
    quality: "1080p",
    poster: "image/youth.jpg",
    description: "AFifteen-year-old Praveen enters adolescence determined to find true love before school ends. Through relationships and heartbreaks, he discovers love's real meaning, shaping his maturity and outlook on life.",
    crew: "Cast: Ken Karunas, Meenakshi Dinesh | Dir: Ken Karunas"
  },
  {
    title: "Spiderman brand new day",
    genre: "Action",
    year: 2026,
    runtime: "2h 10m",
    rating: 4.6,
    size: "6.8 GB",
    downloads: "2.4M",
    quality: "4K",
    poster: "image/spidynewday.jpg",
    description: "Spider-Man faces a new chapter filled with risks, alliances, and redemption.",
    crew: "Cast: Tom Holland, Sadie Sink | Dir: Destin Daniel Cretton"
  },
  {
    title: "Eko",
    genre: "Thriller",
    year: 2025,
    runtime: "2h 08m",
    rating: 4.7,
    size: "5.3 GB",
    downloads: "2.0M",
    quality: "1080p",
    poster: "image/eko.jpg",
    description: "A mysterious investigation reveals secrets buried in a quiet town.",
    crew: "Cast: Sandeep Pradeep, Biana Momin | Dir: Dinjith Ayyathan"
  }
];

const series = [
  {
    title: "Breaking Bad",
    genre: "Series",
    year: 2008,
    runtime: "5 Seasons",
    rating: 4.9,
    size: "28.0 GB",
    downloads: "6.2M",
    quality: "4K",
    poster: "image/brba.jpg",
    description: "A chemistry teacher turns to crime after a life-changing diagnosis.",
    crew: "Cast: Bryan Cranston, Aaron Paul | Creator: Vince Gilligan"
  },
  {
    title: "The Boys",
    genre: "Series",
    year: 2019,
    runtime: "4 Seasons",
    rating: 4.7,
    size: "22.0 GB",
    downloads: "4.8M",
    quality: "4K",
    poster: "image/boys.jpg",
    description: "A group of vigilantes takes on corrupt superheroes and corporate power.",
    crew: "Cast: Karl Urban, Jack Quaid | Creator: Eric Kripke"
  },
  {
    title: "Stranger Things",
    genre: "Series",
    year: 2016,
    runtime: "4 Seasons",
    rating: 4.8,
    size: "24.5 GB",
    downloads: "5.1M",
    quality: "4K",
    poster: "image/st.jpg",
    description: "Kids uncover supernatural mysteries in a small town.",
    crew: "Cast: Millie Bobby Brown, Finn Wolfhard | Creators: Duffer Brothers"
  },
  {
    title: "House of the Dragon",
    genre: "Series",
    year: 2022,
    runtime: "2 Seasons",
    rating: 4.6,
    size: "19.7 GB",
    downloads: "4.3M",
    quality: "4K",
    poster: "image/hs.jpg",
    description: "A royal family civil war threatens the future of a powerful dynasty.",
    crew: "Cast: Emma D'Arcy, Matt Smith | Creator: Ryan Condal"
  }
];

const hero = document.getElementById("hero");
const heroContent = document.querySelector(".hero-content");
const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");
const heroMeta = document.getElementById("heroMeta");
const heroGenre = document.getElementById("heroGenre");
const heroBgA = document.querySelector(".hero-bg-a");
const heroBgB = document.querySelector(".hero-bg-b");
const prevSlideBtn = document.getElementById("prevSlideBtn");
const nextSlideBtn = document.getElementById("nextSlideBtn");
const sliderDots = document.getElementById("sliderDots");
const trendingRow = document.getElementById("trendingRow");
const movieGrid = document.getElementById("movieGrid");
const seriesGrid = document.getElementById("seriesGrid");
const categoryFilters = document.getElementById("categoryFilters");
const movieModal = document.getElementById("movieModal");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModalBtn");
const searchWrap = document.querySelector(".search-wrap");
const searchToggleBtn = document.getElementById("searchToggleBtn");
const searchInput = document.getElementById("searchInput");
const playBtn = document.getElementById("playBtn");
const downloadBtn = document.getElementById("downloadBtn");
const heroMovies = movies.slice(0, 4);
const staticTrendingMovies = movies.slice(0, 7);

let activeMovieTitle = heroMovies[0].title;
let currentMovieIndex = 0;
let autoSlideTimer = null;
let activeBgLayer = "A";
let activeCategory = "All";
let searchQuery = "";

function setHero(movie, index = currentMovieIndex) {
  heroContent?.classList.remove("is-changing");
  void hero.offsetWidth;
  heroContent?.classList.add("is-changing");

  const nextLayer = activeBgLayer === "A" ? heroBgB : heroBgA;
  const activeLayer = activeBgLayer === "A" ? heroBgA : heroBgB;
  nextLayer.style.backgroundImage = `url("${movie.banner}")`;
  nextLayer.classList.add("hero-bg-active");
  activeLayer.classList.remove("hero-bg-active");
  activeBgLayer = activeBgLayer === "A" ? "B" : "A";

  heroTitle.textContent = movie.title;
  heroDescription.textContent = movie.description;
  heroGenre.textContent = movie.genre;
  heroMeta.textContent = `⭐ ${movie.rating} | ${movie.year} | ${movie.runtime}`;
  currentMovieIndex = index;
  activeMovieTitle = movie.title;
  updateSliderDots();
  updateActiveCards();
}

function createCard(movie) {
  const card = document.createElement("article");
  card.className = "movie-card";
  card.innerHTML = `
    <div class="movie-card-shell">
      <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
      <div class="card-overlay"></div>
      <span class="genre-badge">${movie.genre}</span>
      <div class="movie-info">
        <p class="movie-title">${movie.title}</p>
        <div class="movie-sub">
          <span>⭐ ${movie.rating}</span>
          <span>${movie.year}</span>
        </div>
        <div class="movie-meta-line">
          <span><span class="meta-icon">💾</span>${movie.size}</span>
          <span><span class="meta-icon">⬇</span>${movie.downloads}</span>
        </div>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    openMovieModal(movie);
  });

  return card;
}

function updateActiveCards() {
  document.querySelectorAll(".movie-card").forEach((card) => {
    const title = card.querySelector(".movie-title")?.textContent || "";
    card.classList.toggle("active", title === activeMovieTitle);
  });
}

function changeSlide(direction) {
  const total = heroMovies.length;
  const nextIndex = (currentMovieIndex + direction + total) % total;
  setHero(heroMovies[nextIndex], nextIndex);
}

function createSliderDots() {
  sliderDots.innerHTML = "";
  heroMovies.forEach((movie, index) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot";
    dot.setAttribute("aria-label", `Show ${movie.title}`);
    dot.addEventListener("click", () => {
      setHero(movie, index);
      resetAutoSlide();
    });
    sliderDots.appendChild(dot);
  });
  updateSliderDots();
}

function updateSliderDots() {
  const dots = sliderDots.querySelectorAll(".slider-dot");
  dots.forEach((dot, idx) => dot.classList.toggle("active", idx === currentMovieIndex));
}

function renderMovies() {
  const filteredMovies = movies.filter((movie) => {
    const categoryMatch = activeCategory === "All" || movie.genre.toLowerCase() === activeCategory.toLowerCase();
    const searchMatch = movie.title.toLowerCase().includes(searchQuery) || movie.genre.toLowerCase().includes(searchQuery);
    return categoryMatch && searchMatch;
  });

  movieGrid.innerHTML = "";

  filteredMovies.forEach((movie, index) => {
    const gridCard = createCard(movie);
    movieGrid.appendChild(gridCard);
    setTimeout(() => {
      gridCard.classList.add("visible");
    }, index * 90);
  });

  observeOnScroll();
}

function renderTrendingMovies() {
  trendingRow.innerHTML = "";
  staticTrendingMovies.forEach((movie, index) => {
    const trendingCard = createCard(movie);
    trendingRow.appendChild(trendingCard);
    setTimeout(() => {
      trendingCard.classList.add("visible");
    }, index * 90);
  });
  observeOnScroll();
}

function renderSeries() {
  if (!seriesGrid) return;
  seriesGrid.innerHTML = "";
  series.forEach((show, index) => {
    const seriesCard = createCard(show);
    seriesGrid.appendChild(seriesCard);
    setTimeout(() => {
      seriesCard.classList.add("visible");
    }, index * 90);
  });
  observeOnScroll();
}

function setupButtons() {
  playBtn.addEventListener("click", () => {
    playBtn.classList.add("active");
    setTimeout(() => playBtn.classList.remove("active"), 220);
    alert(`Playing: ${activeMovieTitle}`);
  });

  downloadBtn.addEventListener("click", () => {
    downloadBtn.classList.add("active");
    setTimeout(() => downloadBtn.classList.remove("active"), 220);
    alert(`Downloading: ${activeMovieTitle}`);
  });
}

function observeOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".movie-card").forEach((card) => observer.observe(card));
}

function createCategoryFilters() {
  const categories = ["All", "Action", "Drama", "Thriller", "Comedy", "Romance", "Animation"];
  categoryFilters.innerHTML = "";
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = `filter-btn${category === activeCategory ? " active" : ""}`;
    btn.textContent = category;
    btn.addEventListener("click", () => {
      activeCategory = category;
      createCategoryFilters();
      renderMovies();
    });
    categoryFilters.appendChild(btn);
  });
}

function setupSearch() {
  searchToggleBtn.addEventListener("click", () => {
    searchWrap.classList.toggle("active");
    if (searchWrap.classList.contains("active")) {
      searchInput.focus();
    } else {
      searchInput.value = "";
      searchQuery = "";
      renderMovies();
    }
  });

  searchInput.addEventListener("input", (event) => {
    searchQuery = event.target.value.trim().toLowerCase();
    renderMovies();
  });
}

function openMovieModal(movie) {
  modalContent.innerHTML = `
    <div class="modal-card">
      <div class="modal-poster">
        <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
      </div>
      <div class="modal-right">
        <h2 class="modal-title">${movie.title}</h2>
        <p class="modal-main-meta">⭐ ${movie.rating} | ${movie.year} | ${movie.genre}</p>
        <div class="modal-sub-meta">
          <span><span class="meta-icon">💾</span>${movie.size}</span>
          <span><span class="meta-icon">⬇</span>${movie.downloads}</span>
        </div>
        <p class="modal-description">${movie.description}</p>
        <h3>Cast & Crew</h3>
        <p>${movie.crew}</p>
        <h3 style="margin-top: 16px;">Download Options</h3>
        <div class="download-list">
          <span class="download-pill">4K</span>
          <span class="download-pill">1080p</span>
          <span class="download-pill">720p</span>
        </div>
      </div>
    </div>
  `;
  movieModal.classList.add("open");
  movieModal.setAttribute("aria-hidden", "false");
}

function closeMovieModal() {
  movieModal.classList.remove("open");
  movieModal.setAttribute("aria-hidden", "true");
}

function setupModal() {
  closeModalBtn.addEventListener("click", closeMovieModal);
  movieModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeMovieModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMovieModal();
    }
  });
}

function startAutoSlide() {
  autoSlideTimer = setInterval(() => changeSlide(1), 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

function setupSliderControls() {
  prevSlideBtn.addEventListener("click", () => {
    changeSlide(-1);
    resetAutoSlide();
  });

  nextSlideBtn.addEventListener("click", () => {
    changeSlide(1);
    resetAutoSlide();
  });
  hero.addEventListener("mouseenter", stopAutoSlide);
  hero.addEventListener("mouseleave", startAutoSlide);
}

heroBgA.style.backgroundImage = `url("${heroMovies[0].banner}")`;
heroBgA.classList.add("hero-bg-active");
heroBgB.classList.remove("hero-bg-active");

setHero(heroMovies[0], 0);
createSliderDots();
createCategoryFilters();
renderTrendingMovies();
renderMovies();
renderSeries();
setupButtons();
setupSliderControls();
setupSearch();
setupModal();
startAutoSlide();