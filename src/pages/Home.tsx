import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { useGetMovies } from "../hooks/useGetMovies";
const { VITE_API_MOVIE_KEY } = import.meta.env;
/* 
"/trending/movie/day"
		"/genre/movie/list"
 */

function Home() {
  const { movies, loading } = useGetMovies({ path: "trending/movie/day" });

  return (
    <>
      {!loading ? (
        <CardList movies={movies} />
      ) : (
        <Heading as="h2" color="white">
          Cargando
        </Heading>
      )}
    </>
  );
}

export default Home;
