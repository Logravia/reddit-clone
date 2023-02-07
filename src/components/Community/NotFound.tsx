import { Button, Flex, Text} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
type NotFoundProps = {
  missingPageName: string;
};

const NotFound: React.FC<NotFoundProps> = ({ missingPageName }) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="30vh"
    >
      {/* //TODO Style the  Text*/}
      <Text>
        You&apos;re looking for{" "}
        <Text as="span" fontSize={16}>
          r/{missingPageName} ?
        </Text>{" "}
        It does not exist or has been banned, sorry :(
      </Text>
      <Link href="/">
        <Button mt={6}>GO BACK HOME</Button>
      </Link>
    </Flex>
  );
};
export default NotFound;
