import React from "react";
import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
import { useGetMovies } from "../hooks/useGetMovies";

const GenrePage = () => {
  const { id } = useParams();
  const { movies, loading } = useGetMovies({
    path: "/discover/movie",
    params: { with_genres: id, page: 1 },
  });
  if (loading) {
    return <h1>cargando...</h1>;
  }
  return <CardList movies={movies} />;
};

export default GenrePage;
