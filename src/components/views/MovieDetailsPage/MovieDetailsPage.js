import { useParams, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'services/api';
const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetailsPage() {
  const history = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const goBack = () => history(-1);
  useEffect(() => {
    API.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);
  return (
    <>
      <button onClick={goBack}>Go back</button>
      {movie && (
        <>
          <img src={`${BASE_URL}${movie.poster_path}`} alt={movie.title} />
          <h2>
            {movie.title} ({movie.release_date})
          </h2>
          <p>vote average: {movie.vote_average}</p>
          <p>
            overview:
            {movie.overview}
          </p>
        </>
      )}
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </>
  );
}
