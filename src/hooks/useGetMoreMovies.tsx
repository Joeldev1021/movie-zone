import { useCallback, useEffect, useState } from 'react';
import { API } from '../api';
import { IMovieOrigin, IMovieResponse } from '../interface/movie';

interface Props {
	path: string;
	page: number;
}

export const useGetMoreMovies = ({ path, page }: Props) => {
	const [movies, setMovies] = useState<IMovieOrigin[]>([]);
	const [movieResponse, setMovieResponse] = useState<IMovieResponse>(
		{} as IMovieResponse
	);
	const [isLoading, setisLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [hasNextPage, setHasNextPage] = useState(false);

	/* const getMovies = () => {
		setLoading(true);
		API.get<IMovieResponse>(path, { params: { ...params, page: 1 } })
			.then(res => {
				setMovieResponse(res.data);
				setMovies(res.data.results);
			})
			.catch(err => console.log(err))
			.finally(() => setLoading(false));
	};

	const getMoreMovies = () => {
		setLoading(true);
		API.get<IMovieResponse>(path, { params: { ...params } })
			.then(res => {
				setMovies(prevState => [...prevState, ...res.data.results]);
			})
			.catch(err => console.log(err))
			.finally(() => setLoading(false));
	}; */

	const getMoviesPage = async ({
		pageParam,
		options,
	}: {
		pageParam: number;
		options: AbortSignal;
	}) => {
		const response = await API.get<IMovieResponse>(path, {
			signal: options,
			params: { page: pageParam },
		});
		return response.data;
	};

	useEffect(() => {
		setisLoading(true);
		setIsError(false);

		const controller = new AbortController();
		const { signal } = controller;
		getMoviesPage({ pageParam: page!, options: signal })
			.then(data => {
				setMovies(prev => [...prev, ...data.results]);
				setHasNextPage(Boolean(data.results.length));
				setisLoading(false);
			})
			.catch(err => {
				setisLoading(false);
				if (signal.aborted) return;
				setIsError(true);
			});

		return () => controller.abort();
	}, [page]);

	useEffect(() => {
		console.log('path', path);
	}, [path]);

	return { movies, isLoading, isError, hasNextPage };
};

/* export const getPostsPage = async (pageParam = 1, options = {}) => {
    const response = await api.get(`/posts?_page=${pageParam}`, options)
    return response.data
} */
