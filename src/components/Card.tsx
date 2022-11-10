import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Image,
	Text,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
interface CardProps {
	id?: number;
	image?: string;
	rating: number;
	title: string;
	desc: string;
}

const Card = ({ desc, image, title, rating }: CardProps) => {
	return (
		<motion.div
			initial={{ y: -30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.7 }}
		>
			<Box
				bg='red'
				maxWidth='300px'
				position='relative'
				borderRadius='lg'
				overflow='hidden'
				margin='auto'
			>
				<Image src={image} alt={title} />
				<CardInfo title={title} desc={desc} rating={rating} />
			</Box>
		</motion.div>
	);
};

export default Card;

const CardInfo: FC<CardProps> = ({ title, desc, rating }) => {
	const [valueRating, setValueRating] = useState<number>(Number(rating));
	return (
		<Box
			bg='rgba(0,0,0,0.7)'
			_hover={{ opacity: 1 }}
			top={0}
			left={0}
			padding='2'
			height='full'
			width='full'
			opacity={0}
			color='white'
			position='absolute'
			transition='0.3s linear'
		>
			<Text
				fontSize='1.1rem'
				py='2'
				color='pink.500'
				fontWeight='bold'
				align='center'
			>
				{title}
			</Text>
			<Text mt='8' align='center' fontSize='sm' noOfLines={6}>
				{desc}
			</Text>
			<Box
				style={{ bottom: 0, right: 0 }}
				display='flex'
				alignItems='end'
				position='absolute'
			>
				<CircularProgress
					value={valueRating * 10}
					color='#21D07A'
					thickness='8px'
				>
					<CircularProgressLabel>{rating.toFixed(2)}</CircularProgressLabel>
				</CircularProgress>
			</Box>
		</Box>
	);
};
