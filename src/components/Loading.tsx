import { Flex, Spinner } from '@chakra-ui/react';

const Loading = () => {
	return (
		<Flex my='20px' justify='center'>
			<Spinner
				thickness='9px'
				width='200px'
				height='200px'
				speed='1s'
				emptyColor='gray.100'
				color='pink.500'
				size='xl'
			/>
		</Flex>
	);
};

export default Loading;
