import { Button, ButtonProps } from "@chakra-ui/react";

interface button {
  children?: React.ReactNode;
}

interface buttonProps extends ButtonProps {
  /**  */
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  colorScheme?: "black" | "gray" | "pink";
  variant?: "solid" | "outline" | "ghost" | "link";
  /**  w = width */
  w?: "auto" | "100%";
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const button = ({ children, ...props }: buttonProps) => {
  return <Button {...props}>{children}</Button>;
};
