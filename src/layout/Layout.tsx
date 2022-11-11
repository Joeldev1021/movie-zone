import { Box, Container } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Search from '../components/Search';
import { motion } from 'framer-motion';
import LeftSidebar from '../components/LeftSideBar/LeftSideBar';
import SidebarWithHeader from '../components/LeftSideBar/LeftSideBar';

interface PropsLayout {
	Outlet: React.ReactNode;
}

const Layout = () => {
	return (
		<Box>
			<SidebarWithHeader>
				<Header />
				<Container
					maxW={{ base: '100%', md: '80%', lg: '70%' }}
					mt={{ base: '1', md: '3' }}
				>
					<Search />
					<Outlet />
				</Container>
			</SidebarWithHeader>
		</Box>
	);
};

export default Layout;
