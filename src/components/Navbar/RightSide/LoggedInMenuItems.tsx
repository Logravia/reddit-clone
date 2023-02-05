import { auth } from "@/firebase/clientApp";
import { MenuDivider, MenuItem, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

type LoggedInMenuItemsProps = {};

const LoggedInMenuItems: React.FC<LoggedInMenuItemsProps> = () => {
  return (
    <>
      <MenuItem icon={<CgProfile />}>
        <Text>Profile</Text>
      </MenuItem>
      <MenuDivider />
      <MenuItem icon={<FiLogOut />} onClick={() => signOut(auth)}>
        <Text>Logout</Text>
      </MenuItem>
    </>
  );
};
export default LoggedInMenuItems;
