import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import Icons from "../Icons";
import AuthButtons from "./AuthButtons";
import LoggedInControls from "./LoggedInControls";
import UserData from "./UserData";
import UserMenu from "./UserMenu";

type RightSideProps = {
  user: User | null | undefined;
};

const RightSide: React.FC<RightSideProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify={"center"} align={"center"} gap="2px">
        {user ? <Icons/> : <AuthButtons />}
        <UserMenu user={user} />
        {user && <UserData user={user}/>}
      </Flex>
    </>
  );
};
export default RightSide;
