import * as API from 'services/api';
import s from './MoviePage.module.css';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    API.fetchSearchMovies(query, page).then(setMovies);
  }, [page, query]);

  const handleSubmitForm = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      return toast.error('Image not found', 1000);
    }
    setQuery(searchValue);
    setPage(1);
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
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
