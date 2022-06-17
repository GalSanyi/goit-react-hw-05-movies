import * as API from 'services/api';
import s from './MoviePage.module.css';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  useEffect(() => {
    if (!query) {
      return;
    }
    setSearchParams(`query=${query}`);
    API.fetchSearchMovies(query).then(setMovies);
  }, [query, setSearchParams]);

  const handleSubmitForm = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      return toast.error('Image not found', 1000);
    }
    setQuery(searchValue);
  };

  const handleSetQuery = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input
          className={s.d1}
          value={searchValue}
          onChange={handleSetQuery}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Movie Search"
        />
        <button className={s.d2} type="submit">
          Search
        </button>
      </form>
      <ToastContainer />
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
    </>
  );
}
