import { CommunityData } from '@/atoms/communityAtom';
import { Box, Flex, Image, Title} from '@chakra-ui/react';
import React from 'react';

type HeaderProps = {
    commData: CommunityData
};

const Header:React.FC<HeaderProps> = ({commData}) => {
    console.log(commData)

    return (
      <Flex direction="column" width="100%" height="140px">
        <Box height="50%" bg="orange.400" />
        <Flex justify="center" height="50%" bg="white">
          <Flex width="95%">
            {/* //TODO Extract image styling */}
            <Image
              src={commData.imgURL}
              fallbackSrc="/images/pidgey.png"
              alt="community logo"
              height="100%"
              position="relative"
              top="-50%"
              bg="white"
              padding="2"
              borderRadius="20%"
              shadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            ></Image>
          </Flex>
        </Flex>
      </Flex>
    );
}
export default Header;