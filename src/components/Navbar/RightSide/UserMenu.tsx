import { FaRedditSquare } from "react-icons/fa";
import {FiLogOut} from "react-icons/fi"
import { VscAccount } from "react-icons/vsc";

import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import { auth } from "@/firebase/clientApp";
import LoggedInMenuItems from "./LoggedInMenuItems";
import LoggedOutMenuItems from "./LoggedOutMenuItems";

type UserMenuProps = {
  user: User | null | undefined;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <Menu>
      <MenuButton >
        <Flex align="center" ml="3">
          <Flex align="center" >
            <>
              {user ? (
                <Icon as={FaRedditSquare} fontSize={"18pt"} color="gray.400" />
              ) : (
                <Icon as={VscAccount} fontSize={"18pt"} color="gray.400" />
              )}
            </>
            <ChevronDownIcon></ChevronDownIcon>
          </Flex>
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? <LoggedInMenuItems/> : <LoggedOutMenuItems/>}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
