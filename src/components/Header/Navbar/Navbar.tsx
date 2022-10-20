import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { IGenre } from "../../../interface/movie.interface";
import { INavItem } from "../../../interface/navItem";

interface NavItemProps {
  item?: INavItem[];
  genres?: IGenre[];
  title: string;
}

const NavbarDesk: FC<NavItemProps> = ({ item, genres, title }) => {
  /*  const linkColor = useColorModeValue("gray.200", "gray.600");
  const linkHoverColor = useColorModeValue("white", "gray.800");
  const popoverContentBgColor = useColorModeValue("gray.800", "white"); */

  return (
    <Stack direction={"row"} spacing={4}>
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Link
            p={2}
            fontSize={"sm"}
            //  color={linkColor}
            _hover={{
              textDecoration: "none",
            }}
          >
            {title}
            <ChevronDownIcon mx="1" color="pink.500" />
          </Link>
        </PopoverTrigger>

        {genres && genres.length && (
          <PopoverContent
            border={0}
            boxShadow={"xl"}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack height="auto" overflow="hidden">
              <Flex flexWrap={"wrap"}>
                {genres.map((item: IGenre) => (
                  <DesktopSubNav key={item.id} id={item.id} name={item.name} />
                ))}
              </Flex>
            </Stack>
          </PopoverContent>
        )}
      </Popover>
    </Stack>
  );
};

export default NavbarDesk;

const DesktopSubNav = ({ name, id }: IGenre) => {
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
