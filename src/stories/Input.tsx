import { Input, BoxProps, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
}

export const input = ({ ...props }: CustomInputProps) => {
  return <Input {...props} />;
};
