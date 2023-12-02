
//const apiKey = {{ your_movie_db_api_key_here }};
const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
const moviesContainer = document.getElementById("movies");
// Filme als Array von Objekten mit Details
const movies = [
    {
      title: 'Fast & Furious 6',
      description: 'Hobbs is tasked with catching a team of mercenary drivers who manage to evade him every time. However....',
      genre: 'Action',
      rating: 4.5,
      release: 2013,
      image: "images/bild1.jpg"
      // Weitere Details hier...
    },
    // Weitere Filme hier...
  ];
  
  // Funktion, um Filme auf der Seite anzuzeigen
  function displayMovies() {
    const movieContainer = document.querySelector('.movie-card');
  
    movies.forEach((movie) => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie');
  
      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
        <p>Genre: ${movie.genre}</p>
        <p>Rating: ${movie.rating}</p>
        <p>Release: ${movie.release}</p>
        <!-- Weitere Details hier... -->
      `;
  
      movieContainer.appendChild(movieCard);
    });
  }
  
  // Aufruf der Funktion, um Filme beim Laden der Seite anzuzeigen
  window.addEventListener('DOMContentLoaded', displayMovies);
  
  // Weitere Interaktionen und Funktionen hier hinzufügen, z.B. Filtern von Filmen, Anzeige von Details beim Klick usw.





async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.results.forEach(media => {
            const movieCard = createMovieCard(media);
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createMovieCard(media) {
    const { title, name, backdrop_path } = media;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie_item")

    movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class = "title">${title || name}</div>
    `;
    return movieCard;
}

fetchMovies();