import { Box, Container } from "@chakra-ui/react";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "../components/Search";
interface PropsLayout {
  Outlet: React.ReactNode;
}

const Layout = () => {
  return (
    <Box background="black" minHeight="100vh">
      <Header />

      <Container py="4" maxW="container.xl">
        <Search />
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
