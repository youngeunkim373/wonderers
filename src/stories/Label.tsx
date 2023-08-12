import { FormLabel, FormLabelProps } from "@chakra-ui/react";

interface LabelProps extends FormLabelProps {
  children: React.ReactNode;
}
export const label = ({ children, ...props }: LabelProps) => {
  return <FormLabel {...props}>{children}</FormLabel>;
};
