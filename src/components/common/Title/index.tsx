import { Box, Image } from "@chakra-ui/react";
import CustomHeading from "../CustomHeading";

const index = (props: any) => {
  const { subTitle } = props;

  return (
    <Box textAlign="center" m=" 0 auto">
      <CustomHeading as="h1" lineHeight="1">
        {props.title}
      </CustomHeading>
      <Image
        src="/wavyline.svg"
        alt="wave line image"
        width="1.5rem"
        m="auto"
        p="0.8rem 0"
      />
      {subTitle && <CustomHeading as="h6">{props.subTitle}</CustomHeading>}
    </Box>
  );
};

export default index;
