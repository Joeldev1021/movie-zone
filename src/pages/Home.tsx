import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import CardList from '../components/CardList';
import { useGetMovies } from '../hooks/useGetMovies';
import useNearScreen from '../hooks/useNearScreen';

//TODO: trending/all/day
function Home() {
	const [page, setPage] = useState(1);
	const { movies, loading } = useGetMovies({
		path: `trending/all/day`,
	});

	const divRef = useRef<HTMLDivElement | null>(null);
	const { entries } = useNearScreen({ target: divRef });

	useEffect(() => {
		if (entries?.isIntersecting) setPage(prev => prev + 1);
	}, [entries]);

	return (
		<>
			<Box minH='100vh'>
				<CardList movies={movies} />
			</Box>
			{loading && (
				<Heading as='h2' bg='red' color='white'>
					Cargando
				</Heading>
			)}
			<div ref={divRef}></div>
		</>
	);
}

export default Home;
