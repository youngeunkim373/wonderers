import Image from 'next/image';
import { Link, LinkProps } from '@chakra-ui/react';

export function LogoLink({ ...props }: LinkProps) {
  return (
    <Link href={'/'} {...props}>
      <Image src={'/logo.svg'} alt={'wonderers-logo'} width={400} height={75} priority />
    </Link>
  );
}
