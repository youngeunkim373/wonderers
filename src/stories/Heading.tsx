import { Box } from "@chakra-ui/react";

interface Box {
  children?: React.ReactNode;
}

interface HeadingProps {
  /**  */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**  */
  children?: React.ReactNode;
  lineHeight?: string;
}

/** Primary UI component for user interaction */
export const heading = ({ as, children, ...props }: HeadingProps) => {
  return (
    <Box as={as} textStyle={as} {...props}>
      {children}
    </Box>
  );
};
