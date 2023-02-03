import { AuthModalState } from '@/atoms/authModalAtom';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal:React.FC = () => {
    const [modalState, setModalState] = useRecoilState(AuthModalState)

    function handleClose() {
       setModalState(prev=>({
        ...prev,
        open: false
       })) ;
    }

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Signup"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            pb={6}
          >
            <Flex flexDir={"column"} align={"center"} justify={"center"} width={"75%"}>
              <OAuthButtons/>
              <Text color={"gray.400"} mt="3">OR</Text>
              <AuthInputs/>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default AuthModal;
