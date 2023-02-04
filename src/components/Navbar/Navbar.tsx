import { auth } from "@/firebase/clientApp";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CommunityDropdown from "./CommunityDropdownMenu/CommunityDropdown";
import RightSide from "./RightSide/RightSide";
import SearchBox from "./SearchBox";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth)

  return (
    <Flex bg="white" height="46px" padding="6px 12px" justifyContent="space-between" gap="10px">
      <Flex gap="10px" alignItems={"center"}>
        <Image
          src="/images/pidgey.png"
          alt="website logo"
          width="34px"
        ></Image>
        <Text display={{ base: "none", md: "unset" }}>Pidgitt</Text>
      </Flex>
      {user && <CommunityDropdown/>}
      <SearchBox></SearchBox>
      <RightSide user={user}></RightSide>
    </Flex>
  );
};
export default Navbar;
