import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'interstellar',
      description: 'How love for your family endures across time, and the importance of human life is the people we love.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
      rating: 7,
    },
    {
      title: 'the godfather',
      description: 'The film follows Vito Corleone, the head of an Italian-American mafioso family between 1945 and 1955',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      rating: 9,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]); 
  };

  const handleFilter = (filters) => {
    const { title, rating } = filters;
    let filtered = movies;

    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= parseFloat(rating));
    }

    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    const newMovie = {
      title: prompt('Enter movie title:'),
      description: prompt('Enter movie description:'),
      posterURL: prompt('Enter movie poster URL:'),
      rating: parseFloat(prompt('Enter movie rating:')),
    };

    addMovie(newMovie);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <button onClick={handleAddMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
