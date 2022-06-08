import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFount } from './views/NotFount';
// import { Loader } from './views/Loader';
// import { HomePage } from './views/HomePage/HomePage';
// import { MoviesPage } from './views/MoviePage/MoviesPage';
// import { MovieDetailsPage } from './views/MovieDetailsPage/MovieDetailsPage';
// import { Cast } from './views/Casts';
// import { Reviews } from './views/Reviews/Reviews';
// import { AppBar } from './AppBar/AppBar';
const Loader = lazy(() => import('./views/Loader.js'));
const AppBar = lazy(() => import('./AppBar/AppBar.js'));
const Casts = lazy(() => import('./views/Casts/Casts.js'));
const MoviesPage = lazy(() => import('./views/MoviePage/MoviesPage.js'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage.js')
);

const Reviews = lazy(() => import('./views/Reviews/Reviews.js'));

const HomePage = lazy(() => import('./views/HomePage/HomePage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />

            <Route path="movies" element={<MoviesPage />} />

            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path=":cast" element={<Casts />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<NotFount />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
