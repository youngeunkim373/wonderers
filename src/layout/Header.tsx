import { Box, Flex, Hide } from '@chakra-ui/react';
import { LogoLink } from '../components/common/links/LogoLink';
import { SideDrawerButton } from './components/SideDrawerButton';
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
      bg={'#fff'}
      px={{ base: 'layout.px.base', md: 'layout.px.md' }}
      boxShadow={'lg'}
    >
      <LogoLink
        mb={'6px'}
        width={'fit-content'}
        maxW={{ md: '150px', base: '120px' }}
        pr={{ md: 'min(10%, 120px)' }}
        margin={'0 auto'}
        boxSizing={'content-box'}
      />

      <Hide below={'md'}>
        <HeaderCategory />
      </Hide>

      <SideDrawerButton />
    </Flex>
  );
}
