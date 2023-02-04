import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";
import LoggedInControls from "./LoggedInControls";

type RightSideProps = {
  user: User | null | undefined;
};

const RightSide: React.FC<RightSideProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify={"center"} align={"center"}>
        {user ? <LoggedInControls/>: <AuthButtons/>}
      </Flex>
    </>
  );
};
export default RightSide;
