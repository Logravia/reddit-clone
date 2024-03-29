import { AuthModalState } from '@/atoms/authModalAtom';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './Login';
import ResetPassword from './ResetPassword';
import Signup from './Signup';

type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const modalState = useRecoilValue(AuthModalState)

    return (
        <Flex direction="column" align="center" width="100%" mt="4">
            {modalState.view === 'login' && <Login/>}
            {modalState.view === 'signup' && <Signup/>}
            {modalState.view === 'resetPassword' && <ResetPassword/>}
        </Flex>
    )    
}
export default AuthInputs;