import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { API } from "../../api";
import CardList from "../../components/CardList";
import Header from "../../components/Header/Header";
import Search from "../../components/Search";
import { movieMapper } from "../../helper";
import { useGetMovies } from "../../hooks/useGetMovies";
import { IMovie } from "../../interface/movie.interface";
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
