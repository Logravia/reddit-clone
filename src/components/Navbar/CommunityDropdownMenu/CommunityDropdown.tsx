import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Flex, Icon, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import {IoMdHome} from 'react-icons/io'

type CommunityDropdown = {};

const CommunityDropdown: React.FC<CommunityDropdown> = () => {
  return (
    <Flex display={{base: "none", md:"flex"}}>
      <Menu>
        <MenuButton>
          <Flex align="center" ml="3">
            <Flex align="center">
              <Icon as={IoMdHome}></Icon>
              <Text display={{base:"none", lg:"flex"}}>Communities</Text>
              <ChevronDownIcon></ChevronDownIcon>
            </Flex>
          </Flex>
        </MenuButton>
        <MenuList>
          {/* //TODO Community list items */}
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default CommunityDropdown;
