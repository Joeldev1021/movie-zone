import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { API } from "../../../../api";
import { NAV_ITEMS } from "../../../../constant";
import { IGenre } from "../../../../interface/movie";
import { INavItem } from "../../../../interface/navItem";
import { DesktopSubNav } from "./DesktopSubNav";

export const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [genres, setGenres] = useState<IGenre[]>();

  useEffect(() => {
    API.get("/genre/movie/list").then((response) =>
      setGenres(response.data.genres)
    );
  }, []);

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Text
                p="2"
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Text>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW="150px"
              >
                <Stack>
                  {navItem.children.map((child: INavItem) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}

            {genres && !navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
              >
                <Stack overflow="hidden">
                  <Flex flexWrap="wrap">
                    {genres.map((genre: IGenre) => (
                      <DesktopSubNav key={genre.id} genre={genre} />
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
/* <PopoverContent
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
          </PopoverContent> */
