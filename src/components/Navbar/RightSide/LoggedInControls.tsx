import { auth } from "@/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import Icons from "../Icons";
import UserMenu from "./UserMenu";

type LoggedInControlsProps = {
  user: User | null | undefined;
};

const LoggedInControls: React.FC<LoggedInControlsProps> = ({user}) => {
  return (
    <Flex align={"center"}>
      <Icons />
    </Flex>
  );
};
export default LoggedInControls;
