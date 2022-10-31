import { FC, useCallback, useEffect, useState } from 'react';
import { API } from '../api';
import { IMovieOrigin, IMovieResponse } from '../interface/movie';

interface Props {
	path: string;
	params?: {
		query?: string;
		with_genres?: string;
	};
}

export const useGetMovies = ({ path, params }: Props) => {
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [page, setPage] = useState(1);
	const [limitPage, setLimitPage] = useState<number>(0);
	const [movies, setMovies] = useState<IMovieOrigin[]>([]);

	const getMovies = () => {
		setLoading(true);
		API.get<IMovieResponse>(path, { params: { ...params } })
			.then(res => {
				setLimitPage(res.data.total_pages);
				setPage(2);
				setMovies(res.data.results);
			})
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	};
	console.log('page-', page);
	const getMoreMovies = async () => {
		setLoading(true);
		await API.get<IMovieResponse>(path, { params: { ...params, page: page } })
			.then(res => {
				setMovies(prevState => [...prevState, ...res.data.results]);
			})
			.catch(err => console.log(err))
			.finally(() => {
				setPage(page + 1);
				setLoading(false);
			});
	};

	useEffect(() => {
		getMovies();
	}, [path, params?.query, params?.with_genres]);

	return { movies, getMoreMovies, loading, error };
};
