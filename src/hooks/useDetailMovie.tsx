import { FC, useEffect, useState } from "react";
import { API } from "../api";
import { movieMapper } from "../helper";
import { IMovie } from "../interface/movie.interface";

interface Props {
  path: string;
}

export const useDetailsMovie = ({ path }: Props) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    API.get(path)
      .then((response) => setData(response.data))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  //return { data, loading, error };
  return [data, loading, error];
};
