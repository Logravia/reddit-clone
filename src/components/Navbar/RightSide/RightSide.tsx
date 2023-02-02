import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";

type RightSideProps = {
  // user, at some point
};

const RightSide: React.FC<RightSideProps> = () => {
  return (
    <>
      {/* <AuthModal></AuthModal> */}
      <Flex justify={"center"} align={"center"}>
        <AuthButtons></AuthButtons>
      </Flex>
    </>
  );
};
export default RightSide;
