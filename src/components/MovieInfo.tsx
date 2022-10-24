import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { API_IMAGE_PORTRAIT_HOST } from "../constant";
import { ICast, IGenre, IMovieOrigin } from "../interface/movie";
import Card from "./Card";
import TagGenre from "./TagGenre";
import WrapperAvatar from "./WrapperAvatar";

interface Props {
  movie: IMovieOrigin;
  casts: ICast[];
}

const MovieInfo: FC<Props> = ({ movie, casts }) => {
  return (
    <Flex>
      <Box width="800px">
        <Card
          title={movie.title}
          image={`${API_IMAGE_PORTRAIT_HOST}/${movie.poster_path}`}
          rating={movie.vote_average}
          desc={movie.overview}
        />
      </Box>
      <Box px="4">
        <Heading as="h2">{movie.title}</Heading>
        <Flex>
          {movie.genres?.map((genre) => (
            <TagGenre key={genre.id} name={genre.name} id={genre.id} />
          ))}
        </Flex>
        <Text>{movie.overview}</Text>
        <WrapperAvatar casts={casts} />
      </Box>
    </Flex>
  );
};

export default MovieInfo;
