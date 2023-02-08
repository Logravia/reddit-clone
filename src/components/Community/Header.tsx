import { CommunityData } from "@/atoms/communityAtom";
import { Box, Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";

type HeaderProps = {
  commData: CommunityData;
};

const Header: React.FC<HeaderProps> = ({ commData }) => {
  console.log(commData);

  return (
    <Flex direction="column" width="100%" height="140px">
      <Box height="50%" bg="orange.400" />
      <Flex justify="center" height="50%" bg="white">
        <Flex width="95%" maxWidth="900">
          {/* //TODO Extract image styling */}
          <Image
            src={commData.imgURL}
            fallbackSrc="/images/pidgey.png"
            alt="community logo"
            height="100%"
            position="relative"
            top="-25%"
            bg="white"
            padding="2"
            borderRadius="20%"
            shadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            mr="5"
          ></Image>
          <Flex>
            <Flex flexDir="column">
              <Heading as="h3" size="lg" lineHeight="0.6">
                {commData.name}
              </Heading>
              <Text color="gray.500" fontSize="14">
                r/{commData.name}
              </Text>
            </Flex>
            <Button>Join</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
