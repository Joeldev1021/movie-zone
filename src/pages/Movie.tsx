import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
import MovieInfo from "../components/MovieInfo";
import { useDetailsMovie } from "../hooks/useDetailMovie";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";

function Movie() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { movieDetails, movieSimilar, loading } = useDetailsMovie(id!, page);

  return (
    <Box>
      {loading === false ? (
        <Box>
          <MovieInfo movie={movieDetails.movie} casts={movieDetails.cast} />
          <Text fontSize="3xl">Related movies</Text>
          <CardList movies={movieSimilar!} />
          <Flex my="4" justifyContent="space-between">
            <Button
              leftIcon={<ImArrowLeft />}
              color="white"
              variant="solid"
              bg="pink.500"
              onClick={() => setPage(page - 1)}
              _hover={{ bg: "pink.400" }}
            >
              page {page - 1}
            </Button>
            <Button
              rightIcon={<ImArrowRight />}
              color="white"
              variant="solid"
              bg="pink.500"
              onClick={() => setPage(page + 1)}
              _hover={{ bg: "pink.400" }}
            >
              page {page + 1}
            </Button>
          </Flex>
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
}

export default Movie;
