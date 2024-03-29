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
import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { MdOutlinePublic } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import {
  doc,
  Firestore,
  getDoc,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

type CreationModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommunityCreationModal: React.FC<CreationModalProps> = ({
  open,
  setOpen,
}) => {
  const [name, setName] = useState("");
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function validName() {
    // TODO validate names
    return true;
  }

  function communityObj() {
    return {
      creatorName: user?.displayName,
      creatorId: user?.uid,
      creationDate: serverTimestamp(),
      name: name,
      privacy: "",
      moderators: [user?.displayName],
      moderatorIDs: [user?.uid],
      imgURL: "",
      subscribers: 1,
    };
  }

  async function handleCommunityCreation() {

    setLoading(true);

    try {
      if (!validName()) {throw new Error("Invalid name")}
      if (!user) { throw new Error("No user");}

      const communityRef = doc(db, "communities", name);
      const userRef = doc(db, "users", user.uid);

      // Creating community and adding community to the user should both succeed or both fail.
      await runTransaction(db, async (transaction) => {
        // To forbid from making a community of the same name
        const communityDoc = await transaction.get(communityRef);
        if (communityDoc.exists()) {
          throw new Error("Community name exists");
        }

        const userDoc = await transaction.get(userRef);
        if (!userDoc) {
          throw new Error("No user data!");
        }

        let userData = userDoc.data();
        if (!userData) {
          throw new Error("Empty document!");
        }

        userData = {
          ...userData,
          subscribes: [...userData.subscribes, name],
          moderates: [...userData.moderates, name],
        };

        // Create community
        transaction.set(communityRef, communityObj());
        // Set user subscription state
        transaction.set(userRef, userData);
      });

    } catch (e) {
      // TODO display error
      console.log(e);
    }
setLoading(false);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <Button
              variant="outline"
              isLoading={loading}
              onClick={handleCommunityCreation}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommunityCreationModal;
