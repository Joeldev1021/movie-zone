import React from "react";
import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
import { useGetMovies } from "../hooks/useGetMovies";

const GenrePage = () => {
  const { id } = useParams();
  const { movies, loading } = useGetMovies({
    path: "/discover/movie",
    params: { with_genres: id },
  });
  return <div>{<CardList movies={movies} />}</div>;
};

export default GenrePage;
