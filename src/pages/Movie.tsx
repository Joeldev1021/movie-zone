import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import CardList from "../components/CardList";
import { API_IMAGE_PORTRAIT_HOST } from "../constant";
import { useDetailsMovie } from "../hooks/useDetailMovie";

function Movie() {
  const { id } = useParams();
  const { movieDetails, error, loading } = useDetailsMovie(id!);

  return (
    <Box>
      {loading === false ? (
        <Flex>
          <Box width="800px">
            <Card
              title={movieDetails.movie.title}
              image={`${API_IMAGE_PORTRAIT_HOST}/${movieDetails.movie.poster_path}`}
              rating={movieDetails.movie.vote_average}
              desc={movieDetails.movie.overview}
            />
          </Box>
          <Box px="4">
            <Heading as="h2">{movieDetails.movie.title}</Heading>

            <Flex>
              <Text>thriller</Text>
            </Flex>
            <Text>{movieDetails.movie.overview}</Text>
          </Box>
        </Flex>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
}

export default Movie;
/*   <iframe
          title={videos.results[1].title}
          src={`https://www.youtube.com/embed/${videos.results[1].key}`}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />*/
