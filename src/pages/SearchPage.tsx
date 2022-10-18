import { Box, Heading } from "@chakra-ui/react";
import { domAnimation, LazyMotion, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList";
import { useGetMovies } from "../hooks/useGetMovies";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState<string | null>(searchParams.get("query"));
  const { movies, loading } = useGetMovies({
    path: "/search/multi",
    params: { query: searchParams.get("query")! },
  });

  return (
    <div>
      <LazyMotion features={domAnimation}>
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={"durantion: 0.5"}
        >
          <Heading as="h2" color="white">
            Result search {query}
          </Heading>
        </Box>
        {!loading ? <CardList movies={movies} /> : <h1>loading....</h1>}
      </LazyMotion>
    </div>
  );
};

export default SearchPage;
