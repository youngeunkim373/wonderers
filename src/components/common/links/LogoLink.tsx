import Logo from '@/assets/img/common/logo/logo.svg';
import { Link, LinkProps } from '@chakra-ui/react';

export function LogoLink({ ...props }: LinkProps) {
  return (
    <Link
      href={'/'}
      w={{ base: '128px', md: '150px' }}
      {...props}>
      <Logo />
    </Link>
  );
}
