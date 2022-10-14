import { FC, useEffect, useState } from "react";
import { API } from "../api";
import { movieMapper } from "../helper";
import { IMovie } from "../interface/movie.interface";

interface Props {
  path: string;
  query?: string;
}

export const useGetMovies = ({ path, query }: Props) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    API.get(path, { params: { query } })
      .then((response) => setMovies(movieMapper(response.data.results)))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, [path, query]);

  return { movies, loading, error };
};
