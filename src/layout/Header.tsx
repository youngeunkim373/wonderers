import { Flex, useDisclosure } from '@chakra-ui/react';

import { LogoLink } from '../components/common/links/LogoLink';
import { WebCatrgories } from './components/ContentCategories';
import { DrawerNav } from './components/DrawerNav';
import { Hamburger } from './components/Hamburger';

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      h={'80px'}
      align={'center'}
      justify={{ base: 'center', md: 'space-between' }}
      px={{ base: '20px', md: '60px' }}>
      <LogoLink mb={'6px'} />
      <WebCatrgories />
      <Hamburger
        w={'33px'}
        onOpen={onOpen}
      />

      <DrawerNav
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
}