import { auth } from "@/firebase/clientApp";
import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";

type LoggedInControlsProps = {};

const LoggedInControls: React.FC<LoggedInControlsProps> = () => {
  return (
    <Button onClick={()=>{signOut(auth)}}>Log out</Button>
  )
};
export default LoggedInControls;
