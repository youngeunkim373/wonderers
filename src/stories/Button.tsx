import { Button, ButtonProps } from '@chakra-ui/react';

interface button {
  children?: React.ReactNode;
}

interface CustomButtonProps extends ButtonProps {
  /**  */
  size?: 'sm' | 'md' | 'lg';
  colorScheme?: 'black' | 'gray' | 'pink';
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  /**  w = width */
  w?: 'auto' | '100%';
}

/** Primary UI component for user interaction */
export const button = ({ children, ...props }: CustomButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
