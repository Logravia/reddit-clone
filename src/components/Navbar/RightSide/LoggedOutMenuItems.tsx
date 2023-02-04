import { AuthModalState } from "@/atoms/authModalAtom";
import { MenuItem, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { useSetRecoilState } from "recoil";

type LoggedOutMenuItemsProps = {};

const LoggedOutMenuItems: React.FC<LoggedOutMenuItemsProps> = () => {
  const setModalState = useSetRecoilState(AuthModalState);

  function openLogin() {
    setModalState((prev) => ({
      view: "login",
      open: true,
    }));
  }

  return (
    <>
      <MenuItem
        _hover={{ bg: "blue.400", color: "white" }}
        onClick={() => openLogin()}
      >
        <Flex align={"center"}>
          <Icon as={FiLogIn} fontSize="20" mr="2" mt="0.3"></Icon>
          <Text>Login</Text>
        </Flex>
      </MenuItem>
    </>
  );
};
export default LoggedOutMenuItems;
