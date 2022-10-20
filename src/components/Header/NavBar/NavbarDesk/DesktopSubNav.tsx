import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Link,
  Box,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import { IGenre } from "../../../../interface/movie.interface";
import { INavItem } from "../../../../interface/navItem";

interface Props {
  label?: string;
  href?: string;
  genre?: IGenre;
}

export const DesktopSubNav = ({ label, href, genre }: Props) => {
  console.log(genre);
  return (
    <Link
      as={LinkRouter}
      to={href!}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontSize="sm"
          >
            {label ? label : genre?.name}
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
