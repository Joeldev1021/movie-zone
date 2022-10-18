import { Box, CircularProgress, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FC } from "react";

interface CardProps {
  image: string;
  rating: number;
  title: string;
  desc: string;
}
const Card: FC<CardProps> = ({ image, rating, title, desc }) => {
  return (
    <Box position="relative" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />
      <Box
        bg="rgba(0,0,0,0.7)"
        _hover={{ opacity: 1 }}
        top={0}
        left={0}
        height="full"
        width="full"
        opacity={0}
        color="white"
        position="absolute"
        transition="0.3s linear"
      >
        <Text fontSize="1.1rem" align="center">
          {title}
        </Text>
        <Text fontSize="sm" noOfLines={6}>
          {desc}
        </Text>
        <Box>
          {rating}
          <StarIcon
            style={{ position: "absolute", right: 10, bottom: 30 }}
            color="yellow.500"
          />
          <CircularProgress value={30} color="orange.400" thickness="12px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
