import { ChevronRightIcon } from "@chakra-ui/icons";
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
import { NAV_ITEMS } from "../../constant";
import { useGetMovies } from "../../hooks/useGetMovies";
import { API } from "../../api";
import { useEffect, useState } from "react";
import { IGenre } from "../../interface/movie.interface";
import { Link as LinkRouter } from "react-router-dom";

const NavbarDesk = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    API.get("/genre/movie/list").then((response) =>
      setGenres(response.data.genres)
    );
  }, []);

  console.log(genres);
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {genres.length && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack height="auto" overflow="hidden">
                  <Flex flexWrap={"wrap"}>
                    {genres.map((item: IGenre) => (
                      <DesktopSubNav
                        key={item.id}
                        id={item.id}
                        name={item.name}
                      />
                    ))}
                  </Flex>
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
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
