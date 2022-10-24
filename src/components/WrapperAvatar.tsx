import { Avatar, Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { FC } from "react";
import { ICast } from "../interface/movie";

interface Props {
  casts: ICast[];
}

const WrapperAvatar: FC<Props> = ({ casts }) => {
  return (
    <>
      <Text as="h3">Cast</Text>
      <Box display="flex" height="60px" width="600px" overflow="scroll">
        {casts.map((cast) => (
          <WrapItem key={cast.castId} mx="2">
            <Avatar
              src={`https://image.tmdb.org/t/p/w185/${cast.profilePath}`}
              name={cast.name}
            />
          </WrapItem>
        ))}
      </Box>
    </>
  );
};

export default WrapperAvatar;
