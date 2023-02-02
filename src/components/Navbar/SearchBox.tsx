import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

type SearchBoxProps = {};

const SearchBox: React.FC<SearchBoxProps> = () => {
  return (
    <Flex align="center" flexGrow={1} mr={2}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />}
          height={"30px"}
        />
        <Input
          type="text"
          placeholder="Search"
          fontSize={"10pt"}
          _placeholder={{ color: "gray.500" }}
          _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
          _focus={{
            bg: "white",
            border: "0px",
            outline: "0px",
          }}
          height={"30px"}
          bg={"gray.100"}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchBox;
