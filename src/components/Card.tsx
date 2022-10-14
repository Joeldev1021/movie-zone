import { Badge, Box, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FC } from "react";

interface CardProps {
  image: string;
  rating: number;
  title: string;
}

const Card: FC<CardProps> = ({ image, rating, title }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          color="white"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
