document.addEventListener('DOMContentLoaded', () => {
  const movieContainer = document.querySelector('.movie-container');

  const movies = [
    { title: 'Movie 1', image: 'https://via.placeholder.com/150' },
    { title: 'Movie 2', image: 'https://via.placeholder.com/150' },
    { title: 'Movie 3', image: 'https://via.placeholder.com/150' },
    { title: 'Movie 4', image: 'https://via.placeholder.com/150' },
    { title: 'Movie 5', image: 'https://via.placeholder.com/150' }
  ];

  movieContainer.innerHTML = '';

  movies.forEach(movie => {
    const img = document.createElement('img');
    img.src = movie.image;
    img.alt = movie.title;
    movieContainer.appendChild(img);
  });
});