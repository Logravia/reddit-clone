import { Button } from "@chakra-ui/react";
import React from "react";

const AuthButtons: React.FC = () => {
  return (
    <>
      <Button
        variant={"outline"}
        height={"30px"}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr="5px"
      >
        Log in
      </Button>
      <Button
        height={"32px"}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "100px" }}
      >
        Signup
      </Button>
    </>
  );
};
export default AuthButtons;
