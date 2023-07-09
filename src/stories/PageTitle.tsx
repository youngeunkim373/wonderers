import { Box, Image } from "@chakra-ui/react";
import { Heading } from "./Heading";

interface Box {
  children?: React.ReactNode;
}

interface PageTitleProps {
  /**  */
  lineHeight?: "1" | string;
  title: string;
  /** 서브 타이틀이 없을 경우 비워둔다. */
  subtitle?: string;
}

/** Primary UI component for user interaction */
export const PageTitle = ({ ...props }: PageTitleProps) => {
  const { subtitle } = props;

  return (
    <Box textAlign="center" m="0 auto">
      <Heading as="h1" lineHeight="1">
        {props.title}
      </Heading>
      <Image
        src="/wavyline.svg"
        alt="wave line image"
        width="1.5rem"
        m="auto"
        p="1rem 0 0.8rem"
      />
      {subtitle && <Heading as="h6">{props.subtitle}</Heading>}
    </Box>
  );
};
