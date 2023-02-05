import CommunityCreationModal from "@/components/Modal/CommunityCreation/CommunityCreationModal";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon, Menu,
  MenuButton, MenuItem, MenuList,
  Text
} from "@chakra-ui/react";
import React, { useState,  } from "react";
import { GrAdd } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";

type CommunityDropdown = {};

const CommunityDropdown: React.FC<CommunityDropdown> = () => {

  const [open, setOpen] = useState(false)

  return (
    <Flex display={{ base: "none", md: "flex" }}>
      <CommunityCreationModal open={open} setOpen={setOpen}/>
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
          <MenuItem onClick={()=>{setOpen(true)}}>
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
