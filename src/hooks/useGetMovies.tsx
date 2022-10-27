import { FC, useEffect, useState } from "react";
import { API } from "../api";
import { IMovieOrigin, IMovieResponse } from "../interface/movie";

interface Props {
  path: string;
  params?: {
    query?: string;
    with_genres?: string;
    page: number;
  };
}

export const useGetMovies = ({ path, params }: Props) => {
  const [movies, setMovies] = useState<IMovieOrigin[]>([]);
  const [movieResponse, setMovieResponse] = useState<IMovieResponse>(
    {} as IMovieResponse
  );
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    API.get<IMovieResponse>(path, { params: { ...params } })
      .then((res) => {
        setMovieResponse(res.data);
        setMovies([...movies, ...res.data.results]);
      })
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, [params?.query || params?.with_genres || params?.page]);

  return { movies, loading, error, movieResponse };
};
