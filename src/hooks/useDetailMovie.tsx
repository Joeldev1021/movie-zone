import { useEffect, useState } from "react";
import { API } from "../api";
import { movieCastMapper } from "../helper";
import {
  IMovieDetails,
  IMovieOrigin,
  IMovieResponse,
} from "../interface/movie";

export const useDetailsMovie = (id: string, page: number) => {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>(
    {} as IMovieDetails
  );
  const [movieSimilar, setMovieSimilar] = useState<IMovieOrigin[]>();
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>();

  const getDetails = () => {
    setLoading(true);
    Promise.all([
      API.get<IMovieOrigin>(`/movie/${id}`, {
        params: { append_to_response: "videos" },
      }).then((res) => res.data),
      API.get(`/movie/${id}/credits`).then((res) =>
        movieCastMapper(res.data.cast)
      ),
    ])
      .then((response) =>
        setMovieDetails({
          movie: response[0],
          cast: response[1],
        })
      )
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  const getMovieSimiliar = async () => {
    API.get<IMovieResponse>(`/movie/${id}/similar`, {
      params: { page: page },
    })
      .then((res) => setMovieSimilar(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovieSimiliar();
  }, [id, page]);

  useEffect(() => {
    getDetails();
  }, [id]);
  return { movieDetails, movieSimilar, loading, error };
};
