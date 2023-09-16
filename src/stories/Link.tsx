import { Link, LinkProps } from '@chakra-ui/react';

interface Link extends LinkProps {
  children: React.ReactNode;
  colorScheme?: string;
}
export const link = ({ children, ...props }: LinkProps) => {
  const colorMode =
    props.colorScheme === 'black'
      ? { color: 'black.main', _hover: { color: 'pink.main' } }
      : props.colorScheme === 'pink'
      ? { color: 'pink.main', _hover: { color: 'pink.dark' } }
      : props.colorScheme === 'gray'
      ? { color: 'black.sub', _hover: { color: 'gray.800' } }
      : {};

  return (
    <Link
      _hover={{ textDecoration: 'none' }}
      fontSize={props.fontSize || 'md'}
      {...colorMode}
      {...props}
    >
      {children}
    </Link>
  );
};
