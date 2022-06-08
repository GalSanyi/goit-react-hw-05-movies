import axios from 'axios';
const API_KEY = '0b3a2577ef47ebb117f3888c8be479cf';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchPopularMovies() {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function fetchCastMovie(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data.cast;
}

export async function fetchReviewsMovie(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data.results;
}

export async function fetchSearchMovies(query, page) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );

  return response.data.results;
}
