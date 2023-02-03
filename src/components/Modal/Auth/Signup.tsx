import { AuthModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import {FIREBASE_ERRORS} from '@/firebase/errors'

const Signup: React.FC = () => {
  const setModalState = useSetRecoilState(AuthModalState);
  const [inputVal, setInputVal] = useState({
    username: "",
    email: "",
    password: "",
    confirmPW: "",
  });

  const [passError, setPassError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, submitError] =
    useCreateUserWithEmailAndPassword(auth);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputVal.password !== inputVal.confirmPW) {
      setPassError("Passwords do not match!");
      return;
    } else {
      setPassError("");
      // TODO password validation
      createUserWithEmailAndPassword(inputVal.email, inputVal.password);
    }
  }

  function switchToLogin() {
    setModalState((prev) => ({
      ...prev,
      view: "login",
    }));
  }

  function noteValue(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;

    setInputVal((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));

    // reset error when pw being entered
    if (name === "password" || name == "confirmPW") {
      setPassError("");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="username"
        type="text"
        placeholder="username"
        mb="2"
        value={inputVal.username}
        onChange={noteValue}
      ></Input>
      <Input
        required
        name="email"
        type="email"
        placeholder="email@provider.com"
        mb="2"
        value={inputVal.email}
        onChange={noteValue}
      ></Input>
      <Input
        required
        name="password"
        type="password"
        placeholder="password"
        mb="2"
        value={inputVal.password}
        onChange={noteValue}
      ></Input>
      <Input
        required
        name="confirmPW"
        type="password"
        placeholder="confirm password"
        mb="2"
        value={inputVal.confirmPW}
        onChange={noteValue}
      ></Input>
      {/* // TODO Extract into a component */}
      {(passError || submitError) && (
        <Text color={"red.500"} textAlign="center" mb="4">
            {passError || FIREBASE_ERRORS[submitError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button type="submit" width="100%" mb="4" isLoading={loading}>
        Sign Up!
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={2}>Been here before?</Text>
        <Text
          color={"blue.500"}
          fontWeight={700}
          cursor="pointer"
          onClick={switchToLogin}
        >
          Login instead!
        </Text>
      </Flex>
    </form>
  );
};
export default Signup;
