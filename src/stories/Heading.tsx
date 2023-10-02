import { Box, HeadingProps as ChakraHeadingProps } from '@chakra-ui/react';

interface Box {
  children?: React.ReactNode;
}

interface HeadingProps extends ChakraHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
  lineHeight?: string;
}

export const heading = ({ as, children, ...props }: HeadingProps) => {
  return (
    <Box as={as} textStyle={as} {...props}>
      {children}
    </Box>
  );
};
