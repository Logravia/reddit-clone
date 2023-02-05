import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Icon,
  Flex,
  Checkbox,
  Stack,
  Box,
  Input,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { MdOutlinePublic } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";

type CommunityCreationModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommunityCreationModal: React.FC<CommunityCreationModalProps> = ({
  open,
  setOpen,
}) => {
  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Let us create a community!</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" padding="10px 10px">
            <Heading as="h3" size="sm">
              Name
            </Heading>
            <Text variant="explanation">
              Community names including capitalization cannot be changed
            </Text>
            <Input
              name="name"
              size="sm"
            />
            <Text fontSize="9pt" pt={2}></Text>
            <Box>
              <Heading as="h3" size="sm">
                Community Settings
              </Heading>
              <Stack spacing={2}>
                <Checkbox colorScheme="blue" name="public">
                  <Flex alignItems="center">
                    <Icon as={MdOutlinePublic} mr={2} color="gray.500" />
                    <Text variant="setting">Public</Text>
                    <Text variant="explanation">
                      Anyone can view, post, and comment here
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox colorScheme="blue" name="restricted">
                  <Flex alignItems="center">
                    <Icon as={BsFillEyeFill} color="gray.500" mr={2} />
                    <Text variant="setting">Restricted</Text>
                    <Text variant="explanation">
                      Only approved users can post here
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox colorScheme="blue" name="private">
                  <Flex alignItems="center">
                    <Icon as={HiLockClosed} color="gray.500" mr={2} />
                    <Text variant="setting">Private</Text>
                    <Text variant="explanation">
                      Only approved users can view and post here
                    </Text>
                  </Flex>
                </Checkbox>
              </Stack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant={"outline"} mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline">Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommunityCreationModal;
