import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

type SearchBoxProps = {};

const SearchBox: React.FC<SearchBoxProps> = () => {
  return (
    <Flex align={"center"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" placeholder="Search" />
      </InputGroup>
    </Flex>
  );
};
export default SearchBox;
