import {
	Avatar,
	Box,
	Heading,
	Text,
	useMediaQuery,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICast } from '../interface/movie';

interface Props {
	casts: ICast[];
}

const WrapperAvatar: FC<Props> = ({ casts }) => {
	const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
	return (
		<Box my='3'>
			<Heading pb='2' as='h2' fontSize='20px'>
				Casts
			</Heading>
			<Box
				display='flex'
				height='60px'
				w={isLargerThan1200 ? 500 : 400}
				overflow='scroll'
			>
				{casts.map(cast => (
					<WrapItem key={cast.id} mx='2'>
						<Link to={`/person/${cast.id}`}>
							<Avatar
								src={`https://image.tmdb.org/t/p/w185/${cast.profilePath}`}
								name={cast.name}
							/>
						</Link>
					</WrapItem>
				))}
			</Box>
		</Box>
	);
};

export default WrapperAvatar;
