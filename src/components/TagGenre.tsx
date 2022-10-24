import { InfoIcon } from "@chakra-ui/icons";
import { HStack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IGenre } from "../interface/movie";

const TagGenre: FC<IGenre> = ({ name, id }) => {
  return (
    <HStack mr="3" spacing={4}>
      <Link to={`/genre/${id}`}>
        <Tag size={"lg"} key={"lg"} variant="subtle" colorScheme="pink">
          <TagLeftIcon boxSize="12px" as={InfoIcon} />
          <TagLabel>{name}</TagLabel>
        </Tag>
      </Link>
    </HStack>
  );
};

export default TagGenre;
