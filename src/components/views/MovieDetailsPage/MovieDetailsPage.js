import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './MovieDetailsPage.module.css';
import * as API from 'services/api';
const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const goBack = () => navigate(state?.from ?? '/');

  useEffect(() => {
    API.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);
  return (
    <>
      {movie && (
        <div className={s.wrap}>
          <div>
            <button className={s.button} onClick={goBack}>
              <svg
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1024 1024"
              >
                <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
              </svg>
              <span>Back</span>
            </button>
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              width="250"
            />
          </div>

          <div className={s.textContent}>
            <h2 className={s.title}>
              {movie.title} ({movie.release_date})
            </h2>
            <p>vote average: {movie.vote_average}</p>
            <p className={s.Overview}>Overview:</p>
            <p className={s.content}>{movie.overview}</p>
          </div>
        </div>
      )}
      <h2>Additional information</h2>
      <NavLink className={s.link} to="cast" state={{ from: state?.from }}>
        Cast
      </NavLink>
      <NavLink className={s.link} to="reviews" state={{ from: state?.from }}>
        Reviews
      </NavLink>
      <Outlet />
    </>
  );
}
