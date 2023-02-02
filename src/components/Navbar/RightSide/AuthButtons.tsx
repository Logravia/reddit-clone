import { AuthModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const AuthButtons: React.FC = () => {
    const setModalState = useSetRecoilState(AuthModalState)

    function openLogin() {
        setModalState({open: true, view: "login"})
    }

    function openSignUp() {
        setModalState({open: true, view: "signup"})
    }

  return (
    <>
      <Button
        onClick={openLogin}
        variant={"outline"}
        height={"30px"}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr="5px"
      >
        Log in
      </Button>
      <Button
        onClick={openSignUp}
        height={"32px"}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "100px" }}
      >
        Signup
      </Button>
    </>
  );
};
export default AuthButtons;
