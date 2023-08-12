import { Box, ButtonProps } from '@chakra-ui/react';
import HamburgerImg from '@/assets/img/common/buttons/btn-hamburger.svg';

interface Props extends ButtonProps {
  w: string;
  onOpen: () => void;
}

export function Hamburger({ w, onOpen }: Props) {
  return (
    <Box
      w={w}
      cursor={'pointer'}
      position={{ base: 'absolute', md: 'static' }}
      right={{ base: '20px', md: '60px' }}
      onClick={onOpen}>
      <HamburgerImg />
    </Box>
  );
}
