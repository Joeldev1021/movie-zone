import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";

function Search() {
  const [query, setQuery] = useState<string>();
  const navigate = useNavigate();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
    setQuery("");
  };

  return (
    <Box mb="4">
      <form onSubmit={handleSubmit}>
        <InputGroup borderWidth="1px" borderRadius="10px">
          <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
          <Input
            variant="filled"
            type="text"
            placeholder="Search movie..."
            onChange={handleChangeInput}
            backgroundColor="transparent"
            focusBorderColor="pink.500"
            autoFocus={true}
          />
        </InputGroup>
      </form>
    </Box>
  );

  /*  return (
    <form onSubmit={handleSubmit}>
      <Flex w="-webkit-max-content" m="auto" my="5">
        <Input
          onChange={handleChangeInput}
          defaultValue={query}
          textColor="white"
          placeholder="Basic usage"
        />
        <Button type="submit">Search</Button>
      </Flex>
    </form>
  ); */
}

export default Search;
