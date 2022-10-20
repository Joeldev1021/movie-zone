import { Box, Container } from "@chakra-ui/react";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "../components/Search";
import { motion } from "framer-motion";

interface PropsLayout {
  Outlet: React.ReactNode;
}

const Layout = () => {
  return (
    <Box>
      <Header />
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Container
          maxW={{ base: "100%", md: "70%" }}
          mt={{ base: "1", md: "3" }}
        >
          <Search />
          <Outlet />
        </Container>
      </motion.div>
    </Box>
  );
};

export default Layout;
