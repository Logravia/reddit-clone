import { AuthModalState } from '@/atoms/authModalAtom';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';

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
              {/* !TODO */}
              {/* <OAuthButtons/> */}
              <AuthInputs/>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default AuthModal;
