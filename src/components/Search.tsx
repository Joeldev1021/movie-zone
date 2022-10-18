import { Button, Container, Flex, FormControl, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  );
}

export default Search;
