import CardList from '../components/CardList';
import Loading from '../components/Loading';
import useNearScreen from '../hooks/useNearScreen';
import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovies } from '../hooks/useGetMovies';

const SearchPage = () => {
	const params = useParams();
	const [query, setQuery] = useState<string | null>(params.query!);
	const { movies, loading, getMoreMovies } = useGetMovies({
		path: '/search/multi',
		params: { query: useParams().query },
	});

	useEffect(() => {
		setQuery(params.query!);
	}, [query]);

	const divRef = useRef<HTMLDivElement | null>(null);
	const { entries } = useNearScreen({ target: divRef });

	useEffect(() => {
		if (entries?.isIntersecting) {
			getMoreMovies();
		}
	}, [entries]);
	return (
		<>
			<Box
				as={motion.div}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={'durantion: 0.5'}
			>
				<Heading fontSize='2xl' pb='4'>
					Result search {query}
				</Heading>
			</Box>
			{!loading && <CardList movies={movies} />}
			{loading && <Loading />}
			<div ref={divRef}></div>
		</>
	);
};

export default SearchPage;
