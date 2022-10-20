import { Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { IMovie } from "../interface/movie.interface";
import { FC } from "react";
import Card from "./Card";

interface Props {
  movies: IMovie[];
}

const CardList: FC<Props> = ({ movies }) => {
  return (
    <SimpleGrid minChildWidth="200px" spacing="50px">
      {movies.map((movie) => (
        <Card
          id={movie.id}
          key={movie.id}
          title={movie.title}
          image={movie.imageLarge}
          rating={movie.rating}
          desc={movie.description}
        />
      ))}
    </SimpleGrid>
  );
};

export default CardList;
