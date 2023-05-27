import {
  Box as ChakraBox,
  HeadingProps as ChakraHeadingProps,
  // Heading,
} from "@chakra-ui/react";

export interface HeadingProps extends ChakraHeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const CustomHeading = ({ as, children, ...props }: HeadingProps) => {
  return (
    <>
      <ChakraBox as={as} textStyle={as} {...props}>
        {children}
      </ChakraBox>
    </>
  );
};

export default CustomHeading;
