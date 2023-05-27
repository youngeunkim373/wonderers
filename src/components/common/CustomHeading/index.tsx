import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

export interface HeadingProps extends ChakraHeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const CustomHeading = ({ type, children, ...props }: HeadingProps) => {
  return (
    <ChakraHeading as={type} textStyle={type} {...props}>
      {children}
    </ChakraHeading>
  );
};

export default CustomHeading;
