import { FormControl, FormControlProps } from "@chakra-ui/react";
import { Label } from ".";

interface CustomFormControlProps extends FormControlProps {
  isRequired?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  label?: string;
  children?: React.ReactNode;
  helperText?: string;
  errorMessage?: string;
}

export const formControl = ({ children, ...props }: CustomFormControlProps) => {
  return (
    <FormControl {...props}>
      {props.label !== "" && <Label>{props.label}</Label>}
      {children}
    </FormControl>
  );
};
