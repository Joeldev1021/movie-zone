import { LinkIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react';
import { FC } from 'react';
import { API_IMAGE_PORTRAIT_HOST } from '../constant';
import { ICast, IMovieOrigin } from '../interface/movie';
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
	const [isLargerThan800] = useMediaQuery('(min-width: 900px)');
	return (
		<>
			<ModalTrailer
				video={movie.videos.results[0]}
				onClose={onClose}
				isOpen={isOpen}
			/>
			<Flex flexDir={isLargerThan800 ? 'row' : 'column'} w='100%' py='5'>
				<Image
					src={`${API_IMAGE_PORTRAIT_HOST}/${movie.poster_path}`}
					alt={movie.title}
					borderRadius='2xl'
					mr={isLargerThan800 ? '8' : '0'}
				/>
				<Box>
					<Heading as='h2' fontSize='20px'>
						{movie.title}
					</Heading>
					<Flex my='3'>
						{movie.genres?.map(genre => (
							<TagGenre key={genre.id} name={genre.name} id={genre.id} />
						))}
					</Flex>
					<Text fontSize='14px'>{movie.overview}</Text>
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
