import Hamburger from '@/assets/img/common/buttons/btn-hamburger.svg';
import { Box, ButtonProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface Props extends ButtonProps {
  hoverColor?: string;
}

export function HamburgerButton({ ...props }: Props) {
  return (
    <Box w={{ base: '24px', md: '32px' }}>
      <HoverHamburger {...props} />
    </Box>
  );
}

const HoverHamburger = styled(Hamburger)<{ width: string; hoverColor: string }>`
  width: 100%;
  
  &:hover {
    cursor: pointer;

    & path {
      fill: '#FF007C';
    }
  }
`;
