import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = () => {
  return (
    <Flex>
      <Button variant={"outline"}>
        <Image src="/images/g-logo.png" height="50%" mr="2"></Image>
        Continue with Google</Button>
    </Flex>
  );
};
export default OAuthButtons;
