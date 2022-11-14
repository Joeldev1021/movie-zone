import { ReactNode } from 'react';
import {
	IconButton,
	Avatar,
	Box,
	Flex,
	HStack,
	VStack,
	useColorModeValue,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	FlexProps,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Container,
} from '@chakra-ui/react';
import { IconMenu, IconBell, IconChevronDown } from '../icons/index';
import SidebarContent from './SidebarContent';

export default function SidebarWithHeader({
	children,
}: {
	children: ReactNode;
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size='full'
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}

			<Container
				pos='fixed'
				left='0'
				right='0'
				zIndex='100'
				maxW={{ base: '100%', md: '90%', lg: '85%' }}
			>
				<MobileNav onOpen={onOpen} />
			</Container>
			<Box bg='black' ml={{ base: 0, md: 60 }} p='4'>
				{children}
			</Box>
		</Box>
	);
}

interface MobileProps extends FlexProps {
	onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const navItem = ['Movies', 'TV Shows', 'Animes'];

	const hoverText = {
		transition: '.3s linear',
		color: 'pink.400',
		textUnderlineOffset: 'underline',
	};
	return (
		//header
		<Flex
			ml={{ base: 0, md: 60 }}
			height='20'
			alignItems='center'
			//	bg='blue.500'
			bg={useColorModeValue('white', 'black')}
			borderBottomWidth='1px'
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={{ base: 'space-between' }}
			//justifyContent={'center'}
			{...rest}
		>
			<Flex justifyContent='space-between' width={{ base: '2xs' }}>
				{navItem.map(item => (
					<Box key={item}>
						<Text
							fontSize='lg'
							fontWeight='medium'
							cursor='pointer'
							color={linkColor}
							_hover={hoverText}
						>
							{item}
						</Text>
					</Box>
				))}
			</Flex>
			{/* ================= display mobile ============== */}
			<IconButton
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant='outline'
				aria-label='open menu'
				icon={<IconMenu />}
			/>
			<Text
				display={{ base: 'flex', md: 'none' }}
				fontSize='2xl'
				fontFamily='monospace'
				fontWeight='bold'
			>
				Logo
			</Text>
			{/* ================= display mobile ============== */}

			<HStack spacing={{ base: '0', md: '6' }}>
				<IconButton
					size='lg'
					variant='ghost'
					aria-label='open menu'
					icon={<IconBell />}
				/>
				<Flex alignItems={'center'}>
					<Menu>
						<MenuButton
							py={2}
							transition='all 0.3s'
							_focus={{ boxShadow: 'none' }}
						>
							<HStack>
								<Avatar
									size={'sm'}
									src={
										'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
									}
								/>
								<VStack
									display={{ base: 'none', md: 'flex' }}
									alignItems='flex-start'
									spacing='1px'
									ml='2'
								>
									<Text fontSize='sm'>Justina Clark</Text>
									<Text fontSize='xs' color='gray.600'>
										Admin
									</Text>
								</VStack>
								<Box display={{ base: 'none', md: 'flex' }}>
									<IconChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue('white', 'gray.900')}
							borderColor={useColorModeValue('gray.200', 'gray.700')}
						>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Settings</MenuItem>
							<MenuItem>Billing</MenuItem>
							<MenuDivider />
							<MenuItem>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};
