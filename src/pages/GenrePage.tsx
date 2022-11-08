import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import Loading from '../components/Loading';
import { useGetMovies } from '../hooks/useGetMovies';
import useNearScreen from '../hooks/useNearScreen';

const GenrePage = () => {
	const { id } = useParams();
	const { movies, loading, getMoreMovies } = useGetMovies({
		path: '/discover/movie',
		params: { with_genres: id },
	});
	const divRef = useRef<HTMLDivElement | null>(null);
	const { entries } = useNearScreen({ target: divRef });

	useEffect(() => {
		if (entries?.isIntersecting) getMoreMovies();
	}, [entries]);

	return (
		<>
			<Box>
				<CardList movies={movies} />
			</Box>
			{loading && <Loading />}
			<div ref={divRef}></div>
		</>
	);
};

export default GenrePage;
