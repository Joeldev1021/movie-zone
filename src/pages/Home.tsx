import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import CardList from '../components/CardList';
import Carousel from '../components/corousel/Carousel';
import Loading from '../components/Loading';
import { API_IMAGE_LANDSCAPE_HOST } from '../constant';
import { useGetMovies } from '../hooks/useGetMovies';
import useNearScreen from '../hooks/useNearScreen';

function Home() {
	const { movies, loading, getMoreMovies } = useGetMovies({
		path: `trending/all/day`,
	});

	const divRef = useRef<HTMLDivElement | null>(null);
	const { entries } = useNearScreen({ target: divRef });
	const [imageArray, setImageArray] = useState<string[]>([]);

	const fillImage = () => {
		let array: string[] = [];
		for (let index = 0; index < 3; index++) {
			console.log(index);
			array.push(`${API_IMAGE_LANDSCAPE_HOST}/${movies[index].poster_path}`);
		}
		setImageArray(array);
	};

	useEffect(() => {
		if (movies.length > 0) fillImage();
	}, [movies]);

	useEffect(() => {
		if (entries?.isIntersecting) getMoreMovies();
	}, [entries]);

	return (
		<>
			<Box minH='100vh'>
				{/* 	<Image
							width='100%'
							src={`${API_IMAGE_LANDSCAPE_HOST}/${movies[0].poster_path}`}
						/> */}
				{imageArray.length > 0 && <Carousel images={imageArray} />}
				<CardList movies={movies} />
			</Box>
			{loading && <Loading />}
			<div ref={divRef}></div>
		</>
	);
}

export default Home;
