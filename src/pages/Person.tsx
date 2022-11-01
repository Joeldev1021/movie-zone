import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import { useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import CardPoster from '../components/CardPoster';
import Loading from '../components/Loading';
import { API_IMAGE_PORTRAIT_HOST } from '../constant';
import { useGetPerson } from '../hooks/useGetPerson';
import PersonInfo from './PersonInfo';

const Person = () => {
	const { id } = useParams();
	const { person, loading, movies } = useGetPerson({
		path: `/person/${id}/movie_credits`,
		pathPerson: `/person/${id}`,
	});

	return (
		<Box>
			{!loading ? (
				<Box>
					<Flex justify='space-between' mb='10'>
						<CardPoster
							image={`${API_IMAGE_PORTRAIT_HOST}/${person.profile_path}`}
							name={person.name}
							key={person.id}
						/>
						<PersonInfo
							biography={person.biography}
							birthday={person.birthday}
							name={person.name}
						/>
					</Flex>
					<Text fontSize='3xl'>Related movies</Text>
					<CardList movies={movies} />
					<Flex my='4' justifyContent='space-between'>
						<Button
							leftIcon={<ImArrowLeft />}
							color='white'
							variant='solid'
							bg='pink.500'
							_hover={{ bg: 'pink.400' }}
						>
							2
						</Button>
						<Button
							rightIcon={<ImArrowRight />}
							color='white'
							variant='solid'
							bg='pink.500'
							_hover={{ bg: 'pink.400' }}
						>
							1
						</Button>
					</Flex>
				</Box>
			) : (
				<Loading />
			)}
		</Box>
	);
};

export default Person;
