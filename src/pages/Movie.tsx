import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import CardList from "../components/CardList";
import MovieInfo from "../components/MovieInfo";
import TagGenre from "../components/TagGenre";
import WrapperAvatar from "../components/WrapperAvatar";
import { API_IMAGE_PORTRAIT_HOST } from "../constant";
import { useDetailsMovie } from "../hooks/useDetailMovie";

function Movie() {
  const { id } = useParams();
  const { movieDetails, loading } = useDetailsMovie(id!);

  return (
    <Box>
      {loading === false ? (
        <Box>
          <MovieInfo movie={movieDetails.movie} casts={movieDetails.cast} />
          <CardList movies={movieDetails.similari} />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
}

export default Movie;
