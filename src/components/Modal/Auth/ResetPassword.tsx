import { auth } from "@/firebase/clientApp";
import { Input, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [email, setEmail] = useState("");
  const [sendResetEmail, sending, error] = useSendPasswordResetEmail(auth)
  const [isResetSent, setIsResetSent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await sendResetEmail(email);
    if(!error){
        setIsResetSent(true)
    }
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
        disabled={isResetSent}
      ></Input>
      {isResetSent && <Text color={"green.400"}>Reset was sent!</Text>}
      <Button type="submit" width="100%" mb="4" isLoading={sending}>
        Reset Password
      </Button>
    </form>
  );
};
export default ResetPassword;
