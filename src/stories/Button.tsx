import { Button } from "@chakra-ui/react";

interface Button {
  children?: React.ReactNode;
}

interface ButtonProps {
  children?: React.ReactNode;
  /** Use the size prop to change the size of the button. */
  size?: "sm" | "md" | "lg";
  /** What background color to use */
  colorScheme?: "black" | "gray" | "pink";
  /** What background color to use */
  variant: "solid" | "outline" | "ghost" | "link";
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const ChakraButton = ({
  children,
  // size = "md",
  // colorScheme = "black",
  // variant = "solid",
  ...props
}: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
