import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";

type RightSideProps = {
  // user, at some point
};

const RightSide: React.FC<RightSideProps> = () => {
  return (
    <>
      <Flex justify={"center"} align={"center"}>
        <AuthModal />
        <AuthButtons></AuthButtons>
      </Flex>
    </>
  );
};
export default RightSide;