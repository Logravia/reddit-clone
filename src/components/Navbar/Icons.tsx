import { Flex, Box, Icon } from "@chakra-ui/react";
import {BsArrowUpRightCircle, BsChatDots} from "react-icons/bs"
import {GrAdd, GrNotification} from "react-icons/gr"
import React from "react";

const Icons: React.FC = () => {
  return (
    <Flex gap="8px">
      <Flex display={{ base: "none", md: "flex" }} align={"center"} gap="8px">
        <Icon as={BsArrowUpRightCircle}/>
        <Icon as={BsChatDots}/>
      </Flex>
      <>
        <Icon as={GrNotification}/>
        <Icon as={GrAdd}/>
      </>
    </Flex>
  );
};
export default Icons;
