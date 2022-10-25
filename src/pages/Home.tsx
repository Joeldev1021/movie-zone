import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import CardList from "../components/CardList";
import { useGetMovies } from "../hooks/useGetMovies";
import useNearScreen from "../hooks/useNearScreen";
const { VITE_API_MOVIE_KEY } = import.meta.env;

function Home() {
  const [page, setPage] = useState(1);
  const { movies, loading, movieResponse } = useGetMovies({
    path: "trending/movie/day",
    params: { page: page },
  });
  const divRef = useRef<HTMLDivElement | null>(null);
  const { entries } = useNearScreen({ target: divRef, setPage });

  useEffect(() => {
    if (entries?.isIntersecting) setPage((prev) => prev + 1);
  }, [entries]);

  return (
    <>
      <Box minH="100vh">
        <CardList movies={movies} />
      </Box>
      {loading && (
        <Heading as="h2" bg="red" color="white">
          Cargando
        </Heading>
      )}
      <div ref={divRef}></div>
    </>
  );
}

export default Home;
