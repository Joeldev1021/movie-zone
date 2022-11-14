import {
	Box,
	BoxProps,
	CloseButton,
	Flex,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
	IconHome,
	IconCompass,
	IconStar,
	IconTrending,
	IconSettings,
} from '../icons/index';
import NavItem from './NavItem';

interface LinkItemProps {
	name: string;
	icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
	{ name: 'Home', icon: IconHome },
	{ name: 'Trending', icon: IconTrending },
	{ name: 'Explore', icon: IconCompass },
	{ name: 'Favorites', icon: IconStar },
	{ name: 'Settings', icon: IconSettings },
];

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	return (
		<Box
			transition='3s ease'
			bg={useColorModeValue('white', 'gray.900')}
			borderRight='1px'
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos='fixed'
			h='full'
			{...rest}
		>
			<Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
				<Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
					Logo
				</Text>
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{LinkItems.map(link => (
				<NavItem key={link.name} icon={link.icon}>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

export default SidebarContent;
