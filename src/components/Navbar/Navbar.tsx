import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import SearchBox from "./SearchBox";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="46px" padding="6px 12px">
      <Flex gap="10px" align={"center"}>
        <Image src="/images/pidgey.png" height="100%"></Image>
        <Text display={{ base: "none", md: "unset" }}>Pidgitt</Text>
      </Flex>

      <SearchBox></SearchBox>
      {/* <Directory></Directory>
      <RightSide></RightSide> */}
    </Flex>
  );
};
export default Navbar;
