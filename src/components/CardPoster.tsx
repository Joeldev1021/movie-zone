import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const CardPoster = ({ image, name }: { image: string; name: string }) => {
	return (
		<Box minWidth='300px'>
			<Image src={image} alt={name} borderRadius='2xl' objectFit='cover' />
		</Box>
	);
};
export default CardPoster;
