import { Flex, Hide } from '@chakra-ui/react';
import { LogoLink } from '../components/common/links/LogoLink';
import { SideDrawerNavButton } from './components/SideDrawerNavButton';
import { useLayoutContext } from '@/context/LayoutContext';

export function Header() {
  const { HeaderCategory } = useLayoutContext();

  return (
    <Flex
      w={'100%'}
      h={'layout.headerHeight'}
      align={'center'}
      justify={{ base: 'center', md: 'space-between' }}
      pos={'fixed'}
      zIndex={999999}
      bg={'#fff'}
      px={{ base: 'layout.px.base', md: 'layout.px.md' }}
      boxShadow={'lg'}
    >
      <LogoLink mb={'6px'} />

      <Hide below={'md'}>
        <HeaderCategory />
      </Hide>

      <SideDrawerNavButton />
    </Flex>
  );
}
