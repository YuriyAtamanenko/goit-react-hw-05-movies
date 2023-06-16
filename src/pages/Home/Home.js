import { useEffect, useState } from 'react';
import { GetTrendingMovies } from '../../services/getFilmsAPI';
import { StyledLink, List } from './Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

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
      <ul>
        {trendingMovies.map(movie => {
          return (
            <List key={movie.id}>
              <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </StyledLink>
            </List>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
