import { auth } from "@/firebase/clientApp";
import { Flex, Icon, MenuDivider, MenuItem, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

type LoggedInMenuItemsProps = {};

const LoggedInMenuItems: React.FC<LoggedInMenuItemsProps> = () => {
  return (
    <>
      <MenuItem _hover={{ bg: "blue.400", color: "white" }}>
        <Flex align={"center"}>
          <Icon as={CgProfile} fontSize="20" mr="2" mt="0.3"></Icon>
          <Text>Profile</Text>
        </Flex>
      </MenuItem>
      <MenuDivider />
      <MenuItem
        _hover={{ bg: "blue.400", color: "white" }}
        onClick={() => signOut(auth)}
      >
        <Flex align={"center"}>
          <Icon as={FiLogOut} fontSize="20" mr="2" mt="0.3"></Icon>
          <Text>Logout</Text>
        </Flex>
      </MenuItem>
    </>
  );
};
export default LoggedInMenuItems;
