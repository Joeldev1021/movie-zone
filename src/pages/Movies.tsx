import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import Loading from '../components/Loading';
import { useGetMovies } from '../hooks/useGetMovies';
import useNearScreen from '../hooks/useNearScreen';

function Movies() {
	const { pathname } = useLocation();
	const { getMoreMovies, loading, movies } = useGetMovies({
		path: pathname,
	});
	const divRef = useRef<HTMLDivElement | null>(null);
	const { entries } = useNearScreen({ target: divRef });

	useEffect(() => {
		if (entries?.isIntersecting) {
			getMoreMovies();
		}
	}, [entries]);

	return (
		<>
			<Box minH='100vh'>{!loading && <CardList movies={movies} />}</Box>
			{loading && <Loading />}
			<div ref={divRef}></div>
		</>
	);
}

export default Movies;
