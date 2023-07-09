import { FormControl as ChakraFormControl } from "@chakra-ui/react";

interface FormControl {
  children?: React.ReactNode;
}

interface FormControlProps {
  /**  */
  children?: React.ReactNode;
  isRequired?: boolean;
  isInvalid?: React.ReactNode;
  // isError?: boolean;
}

/** Primary UI component for user interaction */
export const FormControl = ({ ...props }: FormControlProps) => {
  return (
    <ChakraFormControl
      // isInvalid={props.isError}
      isRequired={props.isRequired ? true : false}
    >
      {props.children}
    </ChakraFormControl>
  );
};
