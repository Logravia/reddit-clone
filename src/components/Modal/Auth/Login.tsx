import { AuthModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setModalState = useSetRecoilState(AuthModalState);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function onSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  function switchToSignup() {
    setModalState((prev) => ({
      ...prev,
      view: "signup",
    }));
  }

  function switchToResetPW() {
    setModalState((prev) => ({
      ...prev,
      view: "resetPassword",
    }));
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
      {/* // TODO Extract error message component */}
      {error && <Text color={"red.500"}>{error.message}</Text>}
      <Button type="submit" width="100%" mb="4" isLoading={loading}>
        Login
      </Button>
      <Flex fontSize="9pt" justifyContent="center" direction={"column"}>
        <Text mr={1}>Forgot your password?</Text>
        <Text
          color={"blue.500"}
          fontWeight={700}
          cursor="pointer"
          onClick={switchToResetPW}
        >
          Click here!
        </Text>
        <Text mr={1}>New here?</Text>
        <Text
          color={"blue.500"}
          fontWeight={700}
          cursor="pointer"
          onClick={switchToSignup}
        >
          Sign-up!
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
