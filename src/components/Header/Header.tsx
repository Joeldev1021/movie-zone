import {
	Box,
	Flex,
	IconButton,
	Button,
	Stack,
	Collapse,
	useColorModeValue,
	useDisclosure,
	Container,
	Image,
	Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Theme from './Theme';
import { Link as LinkRouter } from 'react-router-dom';
import { MobileNav } from './NavBar/NavbarMobil/MobileNav';
import { DesktopNav } from './NavBar/NavbarDesk/DesktopNav';

export default function Header() {
	const { isOpen, onToggle } = useDisclosure();
	const bg = useColorModeValue('bg.light', 'bg.dark');
	const borderColor = useColorModeValue('gray.200', 'gray.800');
	return (
		<Box
			as='header'
			position='sticky'
			bg={bg}
			top='0'
			borderColor={borderColor}
			borderBottomWidth='1px'
			w='full'
			py='6'
			zIndex={100}
			shadow='sm'
		>
			<Container maxW={{ base: '100%', md: '80%', lg: '70%' }}>
				<Flex py={{ base: 2 }} px={{ base: 4 }}>
					<Flex
						flex={{ base: 1, md: 'auto' }}
						ml={{ base: -2 }}
						display={{ base: 'flex', md: 'none' }}
					>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ? (
									<CloseIcon w={3} h={3} />
								) : (
									<HamburgerIcon w={5} h={5} />
								)
							}
							variant={'ghost'}
							aria-label={'Toggle Navigation'}
						/>
					</Flex>
					<Flex
						alignItems='center'
						flex={{ base: 1 }}
						justify={{ base: 'center', md: 'start' }}
					>
						<Link bottom='15px' position='relative' as={LinkRouter} to='/'>
							<Image
								src='https://imgur.com/GJ0W5Vf.png'
								alt='logo'
								width='140px'
							/>
						</Link>
						<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
							<DesktopNav />
						</Flex>
					</Flex>

					<Stack
						flex={{ base: 1, md: 0 }}
						justify={'flex-end'}
						direction={'row'}
						spacing={6}
					>
						<Theme />

						<Button
							as={'a'}
							fontSize={'sm'}
							fontWeight={400}
							variant={'link'}
							href={'#'}
						>
							Sign In
						</Button>
						<Button
							display={{ base: 'none', md: 'inline-flex' }}
							fontSize={'sm'}
							fontWeight={600}
							color='white'
							bg={'pink.500'}
							_hover={{
								bg: 'pink.400',
							}}
						>
							Sign Up
						</Button>
					</Stack>
				</Flex>

				<Collapse in={isOpen} animateOpacity>
					<MobileNav />
				</Collapse>
			</Container>
		</Box>
	);
}
