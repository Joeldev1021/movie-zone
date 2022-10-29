import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CardList from '../components/CardList';
import Loading from '../components/Loading';
import { useGetMovies } from '../hooks/useGetMovies';
import useNearScreen from '../hooks/useNearScreen';

function Movies() {
	const { pathname } = useLocation();
	const divRef = useRef<HTMLDivElement | null>(null);
	const { entries } = useNearScreen({ target: divRef });
	const { error, getMoreMovies, loading, movies } = useGetMovies({
		path: pathname,
	});

	const isMoviePath = pathname.includes('movie') ? '/movie' : '/tv';

	useEffect(() => {
		if (entries?.isIntersecting) {
			getMoreMovies();
		}
	}, [entries]);

	return (
		<>
			<Box minH='100vh'>
				<CardList path={isMoviePath} movies={movies} />
			</Box>
			{loading && <Loading />}
			<div ref={divRef}></div>
		</>
	);
}

export default Movies;
