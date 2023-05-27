import { Button, Text, Box, Flex, Heading, Circle } from "@chakra-ui/react";
import CustomHeading from "@/components/common/CustomHeading";
import Title from "@/components/common/Title";

const guide = () => {
  return (
    <>
      <Box p="20">
        <Box as="h2" textStyle="h2">
          Box as h1
        </Box>
        <Heading as="h2" textStyle="h2">
          Heading as h1
        </Heading>
        <CustomHeading as="h2">CustomHeading as h1</CustomHeading>
      </Box>
      <Box p="20">
        {/* COLORS */}
        <Box mb="20">
          <CustomHeading as="h1" mb="5">
            COLORS
          </CustomHeading>
          <Flex align="center" justify="center">
            <Circle size="6rem" bg="black.main" color="white">
              black.main
              <br />
              #000000
            </Circle>
            <Circle size="6rem" bg="black.sub" color="white">
              black.sub
              <br />
              #909090
            </Circle>
            <Circle size="6rem" bg="black.third" color="black">
              black.third
              <br />
              #cccccc
            </Circle>

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
          <CustomHeading as="h1">FONTS</CustomHeading>
          {/* <Flex align="center" justify="center"> */}
          <CustomHeading as="h2" mt="5" mb="3">
            로고폰트: (영문) 카페24 단정해
          </CustomHeading>
          <Text fontFamily="djh" fontSize="3xl">
            Hellow, we are Wonderes. / fontFamily="djh"{" "}
          </Text>

          <CustomHeading as="h2" mt="5" mb="3">
            기본폰트: (국문) IBM Plex Sans
          </CustomHeading>
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
          <CustomHeading as="h1">TYPOGRAPHY</CustomHeading>
          <CustomHeading as="h2" color="black.sub" mt="5" mb="0.5">
            - body: font-size{" "}
            <Text as="span" color="pink.main">
              * 1rem이 되는 기준!
            </Text>{" "}
            -
          </CustomHeading>
          <Text>
            mobile(~768): 16px / tablet(768~1024): 18px / pc(1024~): 20px
          </Text>

          <CustomHeading as="h2" color="black.sub" mt="5" mb="0.5">
            - Contents -
          </CustomHeading>
          <CustomHeading as="h4" color="pink.sub">
            &lt;CustomHeading /&gt;
          </CustomHeading>
          <CustomHeading as="h1">
            h1 페이지 타이틀 / Medium, 1.5rem / type="h1"
          </CustomHeading>
          <CustomHeading as="h2">
            h2 콘텐츠 타이틀 / Medium, 1.3rem / type="h2"
          </CustomHeading>
          <CustomHeading as="h3">
            h3 콘텐츠 타이틀 / Medium, 1.2rem / type="h3"
          </CustomHeading>
          <CustomHeading as="h4">
            h4 콘텐츠 타이틀 / Medium, 1.1rem / type="h4"
          </CustomHeading>
          <CustomHeading as="h5">
            h5 콘텐츠 타이틀 / Regular, 1rem / type="h5"
          </CustomHeading>
          <CustomHeading as="h6">
            h6 콘텐츠 타이틀 / Regular, 0.9rem / type="h6"
          </CustomHeading>
          <CustomHeading as="h4" color="pink.sub" mt="1">
            &lt;Text /&gt;
          </CustomHeading>
          <Text>p 콘텐츠 텍스트 / Regular, 0.8rem / default</Text>
          <Text as="span" size="small">
            small 콘텐츠 텍스트 / Regular, 0.7rem / size="small"
          </Text>

          <CustomHeading as="h2" color="black.sub" mt="5" mb="0.5">
            - Page Title -
          </CustomHeading>
          <Flex align="flex-start" mt="5">
            <Title title="페이지 타이틀" subTitle="" />
            <Title title="페이지 타이틀" subTitle="서브 타이틀입니다." />
          </Flex>
        </Box>

        {/* BUTTON */}
        <Box mb="20">
          <CustomHeading as="h1">BUTTON</CustomHeading>

          <CustomHeading as="h2" color="black.sub" mt="5" mb="0.5">
            - Size -
          </CustomHeading>
          <Flex flexWrap="wrap" justify="flex-start" gap="5">
            <Button>lg(default)</Button>
            <Button colorScheme="gray">lg(default)</Button>
            <Button colorScheme="pink">lg(default)</Button>
          </Flex>
          <Flex mt="5" flexWrap="wrap" justify="flex-start" gap="5">
            <Button size="md">size="md"</Button>
            <Button size="md" colorScheme="gray">
              size="md"
            </Button>
            <Button size="md" colorScheme="pink">
              size="md"
            </Button>
          </Flex>
          <Flex mt="5" flexWrap="wrap" justify="flex-start" gap="5">
            <Button size="sm">size="sm"</Button>
            <Button size="sm" colorScheme="gray">
              size="sm"
            </Button>
            <Button size="sm" colorScheme="pink">
              size="sm"
            </Button>
          </Flex>
          <br />

          <CustomHeading as="h2" color="black.sub" mt="5" mb="0.5">
            - Color -
          </CustomHeading>
          <Flex flexWrap="wrap" justify="flex-start" gap="5">
            <Button>black(default)</Button>
            <Button colorScheme="gray">colorScheme="gray"</Button>
            <Button colorScheme="pink">colorScheme="pink"</Button>
          </Flex>

          <CustomHeading as="h2" color="black.sub" mt="5" mb="0.5">
            - Variant -
          </CustomHeading>
          <Flex flexWrap="wrap" justify="flex-start" gap="5">
            <Button>solid(default)</Button>
            <Button variant="outline">variant="outline"</Button>
            <Button variant="ghost">variant="ghost"</Button>
            <Button variant="link">variant="link"</Button>
          </Flex>
          <Flex mt="5" flexWrap="wrap" justify="flex-start" gap="5">
            <Button colorScheme="gray">solid(default)</Button>
            <Button colorScheme="gray" variant="outline">
              variant="outline"
            </Button>
            <Button colorScheme="gray" variant="ghost">
              variant="ghost"
            </Button>
            <Button colorScheme="gray" variant="link">
              variant="link"
            </Button>
          </Flex>
          <Flex mt="5" flexWrap="wrap" justify="flex-start" gap="5">
            <Button colorScheme="pink">solid(default)</Button>
            <Button colorScheme="pink" variant="outline">
              variant="outline"
            </Button>
            <Button colorScheme="pink" variant="ghost">
              variant="ghost"
            </Button>
            <Button colorScheme="pink" variant="link">
              variant="link"
            </Button>
          </Flex>
        </Box>

        {/* LABEL & INPUT */}
        <Box mb="20">
          <CustomHeading as="h1">LABEL & INPUT</CustomHeading>
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
