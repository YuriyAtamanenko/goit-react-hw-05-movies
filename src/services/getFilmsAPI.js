import axios from 'axios';

const API_KEY = '94bb79451af3f2d199db1d286754a756';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function GetTrendingMovies() {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;

  return await axios.get(url).then(response => response.data);
}

export async function getMovieDetails(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

  return await axios.get(url).then(response => response.data);
}

export async function getMovieCredits(id) {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;

  return await axios.get(url).then(response => response.data);
}

export async function getMovieReviews(id) {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;

  return await axios.get(url).then(response => response.data);
}

export async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

  return await axios.get(url).then(response => response.data);
}
