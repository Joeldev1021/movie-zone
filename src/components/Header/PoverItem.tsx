import { Flex, PopoverContent, Stack } from "@chakra-ui/react";
import React from "react";
import { IGenre } from "../../interface/movie.interface";

const PopoverItem = ({ name, id }: IGenre) => {
  return (
    <Link
      as={LinkRouter}
      to={`/category/${id}`}
      role={"group"}
      display={"block"}
      width="150px"
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
            fontSize="sm"
          >
            {name}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

export default PopoverItem;
