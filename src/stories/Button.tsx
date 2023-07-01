import { Button as ChakraButton } from "@chakra-ui/react";

interface Button {
  children?: React.ReactNode;
}

interface ButtonProps {
  /**  */
  children?: React.ReactNode;
  /**  */
  size?: "sm" | "md" | "lg";
  /**  */
  colorScheme?: "black" | "gray" | "pink";
  /**  */
  variant?: "solid" | "outline" | "ghost" | "link";
  /**  */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({ children, ...props }: ButtonProps) => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};
