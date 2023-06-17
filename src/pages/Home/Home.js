import { useEffect, useState } from 'react';
import { GetTrendingMovies } from '../../services/getFilmsAPI';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    GetTrendingMovies()
      .then(data => {
        setTrendingMovies([...data.results]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </section>
  );
};

export default Home;
