import { AuthModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setModalState = useSetRecoilState(AuthModalState)



  function onSubmit() {

  }

  function switchToSignup() {
    setModalState(prev=>({
        ...prev,
        view: "signup"
    }))
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        type="email"
        placeholder="email@provider.com"
        mb="2"
        value={email}
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      ></Input>
      <Input
        required
        name="password"
        type="password"
        placeholder="password"
        mb="2"
        value={password}
        onChange={(e) => {
          setPassword(e.currentTarget.value);
        }}
      ></Input>
      <Button type="submit" width="100%" mb="4">Login</Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text color={"blue.500"} fontWeight={700} cursor="pointer" onClick={switchToSignup}>Sign-up!</Text>
      </Flex>
    </form>
  );
};
export default Login;