import { ArrowForwardIcon, EmailIcon, LinkIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { API_IMAGE_PORTRAIT_HOST } from '../constant';
import { ICast, IGenre, IMovieOrigin } from '../interface/movie';
import Card from './Card';
import TagGenre from './TagGenre';
import WrapperAvatar from './WrapperAvatar';
import { FaPlay } from 'react-icons/fa';
import ModalTrailer from './ModalTrailer';

interface Props {
	movie: IMovieOrigin;
	casts: ICast[];
}

const MovieInfo: FC<Props> = ({ movie, casts }) => {
	const { onClose, onOpen, isOpen } = useDisclosure();
	return (
		<>
			<ModalTrailer
				video={movie.videos.results[0]}
				onClose={onClose}
				isOpen={isOpen}
			/>
			<Flex pb='5'>
				<Box width='800px'>
					<Card
						title={movie.title}
						image={`${API_IMAGE_PORTRAIT_HOST}/${movie.poster_path}`}
						rating={movie.vote_average}
						desc={movie.overview}
					/>
				</Box>
				<Box px='4'>
					<Heading as='h2'>{movie.title}</Heading>
					<Flex>
						{movie.genres?.map(genre => (
							<TagGenre key={genre.id} name={genre.name} id={genre.id} />
						))}
					</Flex>
					<Text>{movie.overview}</Text>
					<WrapperAvatar casts={casts} />
					<Stack direction='row' spacing={6}>
						<Button
							leftIcon={<LinkIcon />}
							href={movie.homepage}
							as='a'
							target='_blank'
							variant='solid'
							color='white'
							bg='pink.500'
							_hover={{ bg: 'pink.400' }}
						>
							Website
						</Button>
						<Button
							leftIcon={<LinkIcon />}
							href={`https://www.imdb.com/title/${movie.imdb_id}`}
							as='a'
							target='_blank'
							color='white'
							variant='solid'
							bg='pink.500'
							_hover={{ bg: 'pink.400' }}
						>
							IMDB
						</Button>
						{movie.videos.results.length > 0 && (
							<Button
								leftIcon={<FaPlay />}
								color='white'
								variant='solid'
								bg='pink.500'
								onClick={onOpen}
								_hover={{ bg: 'pink.400' }}
							>
								Trailer
							</Button>
						)}
					</Stack>
				</Box>
			</Flex>
		</>
	);
};

export default MovieInfo;
