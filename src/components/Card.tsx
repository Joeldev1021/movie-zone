import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Image,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FC, useState } from "react";

interface CardProps {
  image?: string;
  rating: number;
  title: string;
  desc: string;
}

const Card: FC<CardProps> = ({ image, rating, title, desc }) => {
  return (
    <Box position="relative" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />
      <CardInfo title={title} desc={desc} rating={rating} />
    </Box>
  );
};

export default Card;

const CardInfo: FC<CardProps> = ({ title, desc, rating }) => {
  const [valueRating, setValueRating] = useState<number>(Number(rating));
  return (
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
      <Text mt="8" align="center" fontSize="sm" noOfLines={6}>
        {desc}
      </Text>
      <Box
        style={{ bottom: 0, right: 0 }}
        display="flex"
        alignItems="end"
        position="absolute"
      >
        <CircularProgress
          value={valueRating * 10}
          color="#21D07A"
          thickness="8px"
        >
          <CircularProgressLabel>{rating.toFixed(2)}</CircularProgressLabel>
        </CircularProgress>
      </Box>
    </Box>
  );
};
