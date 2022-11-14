import React from 'react';
import { Box, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
/* const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
}; */
const settings = {
	dots: true,
	autoplaySpeed: 5000,
	autoplay: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export default function Carousel({ images }: { images: string[] }) {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = React.useState<Slider | null>(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: '90%', md: '50%' });
	const side = useBreakpointValue({ base: '30%', md: '10px' });

	// These are the images used in the slide

	return (
		<Box
			rounded='md'
			position={'relative'}
			height={'600px'}
			width={'full'}
			overflow={'hidden'}
			my='8'
		>
			<IconButton
				aria-label='left-arrow'
				colorScheme='messenger'
				borderRadius='full'
				position='absolute'
				left={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
			>
				<BiLeftArrowAlt />
			</IconButton>
			<IconButton
				aria-label='right-arrow'
				colorScheme='messenger'
				borderRadius='full'
				position='absolute'
				right={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickNext()}
			>
				<BiRightArrowAlt />
			</IconButton>
			{/* Slider */}
			<Slider {...settings} ref={slider => setSlider(slider)}>
				{images.map((url, index) => (
					<>
						<Box
							key={index}
							height={'6xl'}
							position='relative'
							backgroundPosition='center'
							backgroundRepeat='no-repeat'
							backgroundSize='cover'
							backgroundImage={`url(${url})`}
						>
							<Box
								position='absolute'
								left={side}
								top={10}
								transform={'translate(0%, -50%)'}
								zIndex={2}
							>
								<Text>Movie</Text>
							</Box>
						</Box>
					</>
				))}
			</Slider>
		</Box>
	);
}
