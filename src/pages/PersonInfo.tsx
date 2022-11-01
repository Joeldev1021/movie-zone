import { Flex, Text } from '@chakra-ui/react';

interface Props {
	biography: string;
	name: string;
	birthday: string;
}

const PersonInfo = ({ biography, name, birthday }: Props) => {
	return (
		<Flex flexDir='column' ml='12'>
			<Text>{name}</Text>
			<Text>{biography}</Text>
			<Text>{birthday}</Text>
		</Flex>
	);
};

export default PersonInfo;
