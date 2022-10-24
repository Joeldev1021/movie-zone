import { useEffect, useState } from "react";
import { API } from "../api";
import { movieCastMapper } from "../helper";
import {
  IMovieDetails,
  IMovieOrigin,
  IMovieResponse,
} from "../interface/movie";

export const useDetailsMovie = (id: string) => {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>(
    {} as IMovieDetails
  );
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
      API.get<IMovieResponse>(`/movie/${id}/similar`).then(
        (res) => res.data.results
      ),
    ])
      .then((response) =>
        setMovieDetails({
          movie: response[0],
          cast: response[1],
          similari: response[2],
        })
      )
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  return { movieDetails, loading, error };
};

/* const getDetails = async () => {
    const movie = await API.get(`/movie/${id}`).then((res) => res.data);
    const videos = await API.get(`/movie/${id}/videos`).then((res) => res.data);
    const credits = await API.get(`/movie/${id}/credits`).then(
      (res) => res.data
    );
    const similiar = await API.get(`/movie/${id}/similar`).then(
      (res) => res.data
    );

    console.log("videos", videos);
    console.log("movie", movie);
    console.log("credits", credits);
    console.log("similiar", similiar);
  }; */
