import CommunityCreation from "@/components/Modal/CommunityCreation/CommunityCreation";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon, Menu,
  MenuButton, MenuItem, MenuList,
  Text
} from "@chakra-ui/react";
import React from "react";
import { GrAdd } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";

type CommunityDropdown = {};

const CommunityDropdown: React.FC<CommunityDropdown> = () => {
  return (
    <Flex display={{ base: "none", md: "flex" }}>
      {false && <CommunityCreation />}
      <Menu>
        <MenuButton>
          <Flex align="center" ml="3">
            <Flex align="center">
              <Icon as={IoMdHome}></Icon>
              <Text display={{ base: "none", lg: "flex" }}>Communities</Text>
              <ChevronDownIcon></ChevronDownIcon>
            </Flex>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Flex align="center">
              <Icon as={GrAdd} mr="2"/>
              <Text>Create community</Text>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default CommunityDropdown;
