import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import Picture from './default.jpg';
import * as API from 'services/api';
const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  console.log(movieId);
  useEffect(() => {
    API.fetchCastMovie(movieId).then(setCasts);
  }, [movieId]);
  console.log(casts);
  return (
    <div>
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>
              <h1>{cast.name}</h1>
              <img
                src={
                  cast.profile_path
                    ? `${BASE_URL}${cast.profile_path}`
                    : Picture
                }
                alt={cast.title}
                width="100"
                height="150"
              />
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
}
