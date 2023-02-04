import { auth } from "@/firebase/clientApp";
import { Button, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'

const OAuthButtons: React.FC = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  return (
    <Flex>
      <Button variant={"outline"} isLoading={loading} onClick={()=>signInWithGoogle()}>
        <Image src="/images/g-logo.png" alt="google logo" height="50%" mr="2"></Image>
        Continue with Google</Button>
        {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
