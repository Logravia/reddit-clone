import { AuthModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

const Signup: React.FC = () => {
  const setModalState = useSetRecoilState(AuthModalState);
    const [inputVal, setInputVal] = useState({
        username: "",
        email: "",
        password: "",
        confirmPW:"",
    })

  function onSubmit() {}

  function switchToLogin() {
    setModalState((prev) => ({
      ...prev,
      view: "login",
    }));
  }

  function noteValue(e:React.ChangeEvent<HTMLInputElement>) {
    setInputVal(prev=>({
        ...prev,
        [e.target.name]: e.target.value,
    }));
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
      <Button type="submit" width="100%" mb="4">
        Login
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
