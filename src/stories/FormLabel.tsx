import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
} from "@chakra-ui/react";

interface FormLabel {
  children?: React.ReactNode;
}

interface FormLabelProps extends ChakraFormLabelProps {
  /**  */
  type: string;
  name: React.ReactNode;
  htmlFor?: string;
}

/** Primary UI component for user interaction */
export const FormLabel = ({ name, ...props }: FormLabelProps) => {
  return <ChakraFormLabel {...props}>{name}</ChakraFormLabel>;
};
