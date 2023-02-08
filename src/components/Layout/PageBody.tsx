import { Flex } from "@chakra-ui/react";
import React, { ReactElement, ReactFragment } from "react";

type PageBodyProps = {
  children: Array<ReactElement>;
};

const PageBody: React.FC<PageBodyProps> = ({ children }) => {
  const [feed, sidebar] = children;

  {
    /*//TODO Extract maxWidth as a constant for both the navbar community info and here*/
  }

  return (
    <Flex justify="center" p="8px 0">
      {/*Parent of content */}
      <Flex justify="center" maxWidth="900px" width="90%">
        <Flex width={{ base: "100%", md: "75%" }} mr={{ base: 0, md: 8 }}>
          {feed}
        </Flex>
        <Flex flexGrow="1" display={{ base: "none", md: "flex" }}>
          {sidebar}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageBody;
