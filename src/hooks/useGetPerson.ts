import { useEffect, useState } from "react"
import { API } from "../api";
import { IMovieOrigin, IMovieResponse, IPerson, IPersonMovies } from "../interface/movie";

interface Props {
    path: string;
    params?: {
        query?: string;
        with_genres?: string;
    };
    pathPerson: string;
}

export const useGetPerson = ({ path, params, pathPerson }: Props) => {

    const [person, setPerson] = useState<IPerson>({} as IPerson)
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState<IMovieOrigin[]>([] as IMovieOrigin[]);
    const getMovies = () => {
        setLoading(true);
        Promise.all([
            API.get<IPersonMovies>(path, { params: { ...params } })
                .then(res => res.data.cast),
            API.get<IPerson>(pathPerson).then((res) => res.data)
        ]).then(res => {
            setMovies(res[0])
            setPerson(res[1])
        }).finally(() => setLoading(false))
    };

    useEffect(() => {
        getMovies();
    }, [path]);

    return { loading, movies, person }

}