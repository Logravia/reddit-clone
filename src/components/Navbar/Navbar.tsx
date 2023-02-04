import { auth } from "@/firebase/clientApp";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightSide from "./RightSide/RightSide";
import SearchBox from "./SearchBox";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth)

  return (
    <Flex bg="white" height="46px" padding="6px 12px">
      <Flex gap="10px" align={"center"}>
        <Image
          src="/images/pidgey.png"
          alt="website logo"
          height="100%"
        ></Image>
        <Text display={{ base: "none", md: "unset" }}>Pidgitt</Text>
      </Flex>

      <SearchBox></SearchBox>
      <RightSide user={user}></RightSide>
      {/* <Directory></Directory> */}
    </Flex>
  );
};
export default Navbar;
