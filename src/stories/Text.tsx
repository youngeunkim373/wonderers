import { Text as ChakraText, TextProps } from '@chakra-ui/react';

interface Text {
  children?: React.ReactNode;
}

interface CustomTextProps extends TextProps {
  fontFamily?: 'ibm-EL' | 'ibm-L' | 'ibm-R' | 'ibm-T' | 'ibm-M' | 'ibm-SB' | 'ibm-B' | 'djh';
  as?: 'p' | 'span';
  size?: 'p' | 'small' | string;
  children?: React.ReactNode;
  color?:
    | 'black.main'
    | 'black.sub'
    | 'black.third'
    | 'pink.main'
    | 'pink.sub'
    | 'pink.third'
    | 'white'
    | string;
}

/** Primary UI component for user interaction */
export const Text = ({ children, ...props }: CustomTextProps) => {
  return <ChakraText {...props}>{children}</ChakraText>;
};
