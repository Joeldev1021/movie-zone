import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Box } from "@chakra-ui/react";
import { movieMapper } from "./helper";
import { IMovie } from "./interface/movie.interface";

const API_KEY = import.meta.env.VITE_API_MOVIE_KEY;
const popularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

function App() {
  const [movieData, setMovieData] = useState<IMovie[]>([]);
  useEffect(() => {
    fetch(popularMovie)
      .then((res) => res.json())
      .then((data) => setMovieData(movieMapper(data.results)));
  }, []);

  return (
    <Box background="black" minHeight="100vh">
      {movieData.length &&
        movieData.map((movie) => {
          return (
            <Card key={movie.id} rating={movie.rating} image={movie.image} />
          );
        })}
    </Box>
  );
}

export default App;
