import { userState } from "@/atoms/userAtom";
import { auth } from "@/firebase/clientApp";
import { MenuDivider, MenuItem, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useResetRecoilState } from "recoil";

type LoggedInMenuItemsProps = {};

const LoggedInMenuItems: React.FC<LoggedInMenuItemsProps> = () => {
  const resetUserState = useResetRecoilState(userState)
  
  async function logOut() {
    await signOut(auth);
    resetUserState();
  }


  return (
    <>
      <MenuItem icon={<CgProfile />}>
        <Text>Profile</Text>
      </MenuItem>
      <MenuDivider />
      <MenuItem icon={<FiLogOut />} onClick={() => {logOut()} }>
        <Text>Logout</Text>
      </MenuItem>
    </>
  );
};
export default LoggedInMenuItems;
