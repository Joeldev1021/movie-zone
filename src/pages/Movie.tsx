import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import MovieInfo from '../components/MovieInfo';
import { useDetailsMovie } from '../hooks/useDetailMovie';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import Loading from '../components/Loading';

function Movie() {
	const { id } = useParams();
	const { pathname } = useLocation();
	const [page, setPage] = useState(1);
	const [mediaType, setMediaType] = useState<string>('');
	const { movieDetails, movieSimilar, loading, error } = useDetailsMovie(
		pathname,
		page
	);
	if (error) {
		<h1>Error</h1>;
	}

	useEffect(() => {
		setMediaType(pathname.includes('tv') ? 'tv' : 'movie');
	}, []);

	console.log('media', mediaType);
	return (
		<Box>
			{loading === false ? (
				<Box>
					<MovieInfo movie={movieDetails.movie} casts={movieDetails.cast} />
					<Text fontSize='3xl'>Related movies</Text>
					{movieSimilar.length > 0 && (
						<CardList mediaType={mediaType} movies={movieSimilar} />
					)}
					<Flex my='4' justifyContent='space-between'>
						<Button
							leftIcon={<ImArrowLeft />}
							color='white'
							variant='solid'
							bg='pink.500'
							onClick={() => setPage(page - 1)}
							_hover={{ bg: 'pink.400' }}
						>
							page {page - 1}
						</Button>
						<Button
							rightIcon={<ImArrowRight />}
							color='white'
							variant='solid'
							bg='pink.500'
							onClick={() => setPage(page + 1)}
							_hover={{ bg: 'pink.400' }}
						>
							page {page + 1}
						</Button>
					</Flex>
				</Box>
			) : (
				<Loading />
			)}
		</Box>
	);
}

export default Movie;
