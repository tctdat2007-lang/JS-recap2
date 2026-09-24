const movies = [];

const numberOfMovies = Number(
  prompt('How many movies do you want to rate?')
);

for (let i = 0; i < numberOfMovies; i++) {
  const title = prompt('Enter movie title:');
  const rating = Number(prompt('Enter rating (1-5):'));

  const movie = {
    title: title,
    rating: rating,
  };

  movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

document.write('<h2>Movies</h2>');

for (const movie of movies) {
  document.write(movie.title + ': ' + movie.rating + '<br>');
}

const highestRatedMovie = movies[0];

document.write('<h2>Highest Rated Movie</h2>');
document.write(
  highestRatedMovie.title + ': ' + highestRatedMovie.rating
);
