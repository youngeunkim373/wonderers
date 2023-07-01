import { Text as ChakraText } from "@chakra-ui/react";

interface Text {
  children?: React.ReactNode;
}

interface TextProps {
  fontFamily?:
    | "ibm-EL"
    | "ibm-L"
    | "ibm-R"
    | "ibm-T"
    | "ibm-M"
    | "ibm-SB"
    | "ibm-B"
    | "djh";
  as?: "p" | "span";
  size?: "p" | "small";
  children?: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Text = ({ children, ...props }: TextProps) => {
  return <ChakraText {...props}>{children}</ChakraText>;
};
