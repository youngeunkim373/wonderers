import { Flex, useDisclosure } from '@chakra-ui/react';

import { LogoLink } from '../components/common/links/LogoLink';
import { WebCatrgories } from './components/ContentCategories';
import { Hamburger } from './components/Hamburger';
import { SideDrawerNav } from './components/SideDrawerNav';

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w={'100%'}
      h={'80px'}
      align={'center'}
      justify={{ base: 'center', md: 'space-between' }}
      pos={'fixed'}
      zIndex={999999}
      bg={'#fff'}
      px={{ base: '20px', md: '60px' }}>
      <LogoLink mb={'6px'} />
      <WebCatrgories />
      <Hamburger
        w={'33px'}
        onOpen={onOpen}
      />

      <SideDrawerNav
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
}
