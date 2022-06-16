import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import * as API from 'services/api';
export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    API.fetchPopularMovies()
      .then(setMovies)
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
