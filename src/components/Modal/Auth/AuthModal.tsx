import { AuthModalState } from '@/atoms/authModalAtom';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';

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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Here is some text.</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AuthModal;