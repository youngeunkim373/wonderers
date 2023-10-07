import { Select as ChakraSelect } from "@chakra-ui/react";

interface Select {
  children: React.ReactNode;
}

interface SelectProps {
  children?: React.ReactNode;
  placeholder?: string;
}

/** Primary UI component for user interaction */
export const Select = ({ children, ...props }: SelectProps) => {
  return <ChakraSelect {...props}>{children}</ChakraSelect>;
};
