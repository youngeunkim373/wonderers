import { Button, Text, Box, Flex, Heading } from "@chakra-ui/react";
import CustomHeading from "@/components/common/CustomHeading";

const guide = () => {
  return (
    <>
      <Box p="20">
        {/* COLORS */}
        <Box mb="20">
          <CustomHeading type="h1" mb="5">
            COLORS
          </CustomHeading>
          <Flex align="center" justify="center">
            <Flex
              align="center"
              justify="center"
              w="6rem"
              h="6rem"
              borderRadius="full"
              bg="black.main"
            >
              <Text color="white" textAlign="center">
                black.main
                <br />
                #000000
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="center"
              w="6rem"
              h="6rem"
              borderRadius="full"
              bg="black.sub"
            >
              <Text color="white" textAlign="center">
                black.sub
                <br />
                #909090
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="center"
              w="6rem"
              h="6rem"
              borderRadius="full"
              bg="black.third"
            >
              <Text color="black" textAlign="center">
                black.third
                <br />
                #cccccc
              </Text>
            </Flex>

            <Flex
              align="center"
              justify="center"
              w="6rem"
              h="6rem"
              ml="20px"
              borderRadius="full"
              bg="pink.main"
            >
              <Text color="white" textAlign="center">
                pink.main
                <br />
                #FF007C
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="center"
              w="6rem"
              h="6rem"
              borderRadius="full"
              bg="pink.sub"
            >
              <Text color="white" textAlign="center">
                pink.sub
                <br />
                #FF99CB
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="center"
              w="6rem"
              h="6rem"
              borderRadius="full"
              bg="pink.third"
            >
              <Text color="black" textAlign="center">
                pink.third
                <br />
                #FFCDE5
              </Text>
            </Flex>
          </Flex>
        </Box>

        {/* FONTS */}
        <Box mb="20">
          <Heading as="h1">FONTS</Heading>
          {/* <Flex align="center" justify="center"> */}
          <Heading as="h2" mt="5" mb="3">
            로고폰트: (영문) 카페24 단정해
          </Heading>
          <Text fontFamily="djh" fontSize="3xl">
            Hellow, we are Wonderes. / fontFamily="djh"{" "}
          </Text>

          <Heading as="h2" mt="5" mb="3">
            기본폰트: (국문) IBM Plex Sans
          </Heading>
          <Text fontFamily="ibm-EL">
            안녕하세요, 원더러스입니다. / ExtraLight / fontFamily="ibm-EL"
          </Text>
          <Text fontFamily="ibm-L">
            안녕하세요, 원더러스입니다. / Light / fontFamily="ibm-L"
          </Text>
          <Text fontFamily="ibm-R">
            안녕하세요, 원더러스입니다. / Regular / fontFamily="ibm-R"
          </Text>
          <Text fontFamily="ibm-T">
            안녕하세요, 원더러스입니다. / Text / fontFamily="ibm-T"
          </Text>
          <Text fontFamily="ibm-M">
            안녕하세요, 원더러스입니다. / Medium / fontFamily="ibm-M"
          </Text>
          <Text fontFamily="ibm-SB">
            안녕하세요, 원더러스입니다. / SemiBold / ontFamily="ibm-SB"
          </Text>
          <Text fontFamily="ibm-B">
            안녕하세요, 원더러스입니다. / Bold / fontFamily="ibm-B"
          </Text>
          {/* </Flex> */}
        </Box>

        {/* TYPOGRAPHY */}
        <Box mb="20">
          <Heading as="h1">TYPOGRAPHY</Heading>
          <Heading as="h2" mt="5" mb="3">
            body: font-size{" "}
            <Text as="span" color="pink.main">
              * 1rem이 되는 기준!
            </Text>
          </Heading>
          <Text mb="5">
            mobile(~768): 16px / tablet(768~1024): 18px / pc(1024~): 20px
          </Text>

          <CustomHeading type="h1">
            h1 페이지 타이틀 / Medium, 1.4rem / type="h1"
          </CustomHeading>
          <Heading as="h1">
            h1 페이지 타이틀 / Medium, 1.4rem / type="h1"
          </Heading>
          <CustomHeading type="h2">
            h2 콘텐츠 타이틀 / Medium, 1.3rem / type="h2"
          </CustomHeading>
          <Heading as="h2" size="h2">
            h2 페이지 타이틀 / Medium, 1.3rem / type="h2"
          </Heading>
          <CustomHeading type="h3">
            h3 콘텐츠 타이틀 / Medium, 1.2rem / type="h3"
          </CustomHeading>
          <Heading as="h3">
            h3 페이지 타이틀 / Medium, 1.2rem / type="h3"
          </Heading>
          <Heading as="h4">
            h4 콘텐츠 타이틀 / Medium, 1.1rem / type="h4"
          </Heading>
          <Heading as="h5">h5 콘텐츠 타이틀 / Medium, 1rem / type="h5"</Heading>
          <Heading as="h6">
            h6 콘텐츠 타이틀 / Medium, 0.9rem / type="h6"
          </Heading>
          <Text>p 콘텐츠 텍스트 / Regular, 0.8rem / default</Text>
          <Text as="span" size="small">
            small 콘텐츠 텍스트 / Regular, 0.7rem / size="small"
          </Text>
        </Box>

        {/* BUTTON */}
        <Box mb="20">
          <Heading as="h1">BUTTON</Heading>
        </Box>

        {/* LABEL & INPUT */}
        <Box mb="20">
          <Heading as="h1">LABEL & INPUT</Heading>
        </Box>

        <Button mt="20" colorScheme="pink">
          Button Test
        </Button>
        {/* <Button mt="20">Button Test</Button> */}
        <Box bg="pink.main">Box Test</Box>
        <Text color="pink.main">Text test</Text>
      </Box>
    </>
  );
};

export default guide;
