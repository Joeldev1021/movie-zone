import { SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IMovieOrigin } from '../interface/movie';
import { FC, useEffect } from 'react';
import Card from './Card';
import { API_IMAGE_PORTRAIT_HOST } from '../constant';

interface Props {
	movies: IMovieOrigin[];
	mediaType?: string;
}

const CardList: FC<Props> = ({ movies, mediaType }) => {
	return (
		<SimpleGrid minChildWidth='200px' spacing='50px'>
			{movies.map(movie => (
				<Link
					key={movie.id}
					to={`/${movie.media_type ? movie.media_type : mediaType}/${movie.id}`}
				>
					<Card
						id={movie.id}
						title={movie.title || movie.name}
						image={`${API_IMAGE_PORTRAIT_HOST}/${movie.poster_path}`}
						rating={movie.vote_average}
						desc={movie.overview}
					/>
				</Link>
			))}
		</SimpleGrid>
	);
};

export default CardList;
