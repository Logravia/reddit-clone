import { Flex, Icon, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { BsStars } from "react-icons/bs";
import React from "react";

type UserDataProps = {
  user: User | null | undefined;
};

const UserData: React.FC<UserDataProps> = ({ user }) => {
  return (
    <Flex
      display={{ base: "none", lg: "flex" }}
      flexDir="column"
      fontSize={"12"}
    >
      <Text>{user?.displayName || user?.email}</Text>
      <Flex gap="2px" align="center">
        <Text>{"Karma: 1"}</Text>
        <Icon as={BsStars} color="red.500"/>
      </Flex>
    </Flex>
  );
};
export default UserData;
