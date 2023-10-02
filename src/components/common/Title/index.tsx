import { Box, Image } from '@chakra-ui/react';
import { Heading } from '@/stories';

const index = (props: any) => {
  const { subTitle } = props;

  return (
    <Box textAlign="center" m=" 0 auto">
      <Heading as="h1" lineHeight="1">
        {props.title}
      </Heading>
      <Image src="/wavyline.svg" alt="wave line image" width="1.5rem" m="auto" p="0.8rem 0" />
      {subTitle && <Heading as="h6">{props.subTitle}</Heading>}
    </Box>
  );
};

export default index;
