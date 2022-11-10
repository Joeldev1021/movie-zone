import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import CardList from '../components/CardList';
import Loading from '../components/Loading';
import { useGetMovies } from '../hooks/useGetMovies';
import useNearScreen from '../hooks/useNearScreen';

function Home() {
	const { movies, loading, getMoreMovies } = useGetMovies({
		path: `trending/all/day`,
	});

	const divRef = useRef<HTMLDivElement | null>(null);
	const { entries } = useNearScreen({ target: divRef });

	useEffect(() => {
		if (entries?.isIntersecting) getMoreMovies();
	}, [entries]);
	return (
		<>
			<Box minH='100vh'>
				<CardList movies={movies} />
			</Box>
			{loading && <Loading />}
			<div ref={divRef}></div>
		</>
	);
}

export default Home;
