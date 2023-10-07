import { CSSProperties } from 'react';
import { Heading } from '@/stories';
import { LogoLink } from '@/components/common/links/LogoLink';
import { useLayoutContext } from '@/context/LayoutContext';
import {
  Box as Hambuger,
  CloseButton,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  LinkProps,
} from '@chakra-ui/react';
import HamburgerImg from '@/assets/img/common/buttons/btn-hamburger.svg';

const headerStyle = {
  width: '50%',
  fontSize: '14px',
  fontWeight: 400,
  textAlign: 'center' as const,
};

export function SideDrawerButton() {
  const { SiderCategory, sideDrawerDisclosure, handleOpenSideDrawer } = useLayoutContext();
  const { isOpen, onClose } = sideDrawerDisclosure;

  return (
    <>
      <Hambuger
        w={'33px'}
        cursor={'pointer'}
        position={{ base: 'absolute', md: 'static' }}
        right={{ base: '20px', md: '60px' }}
        onClick={handleOpenSideDrawer}
      >
        <HamburgerImg />
      </Hambuger>

      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay bg={'transparent'} p={0} />

        <DrawerContent boxShadow={'xl'} bg={'red'} zIndex={999}>
          <DrawerHeader bg={'gray.50'} p={0}>
            <Flex justify={'space-between'} align={'center'} p={'40px'}>
              <LogoLink />
              <CloseButton style={{ fontSize: '24px' }} onClick={onClose} />
            </Flex>
            <Flex justify={'center'} align={'center'} pb={'40px'}>
              <DrawerHeaderLink href={'/profile'} style={headerStyle}>
                마이페이지
              </DrawerHeaderLink>
              <Divider h={'20px'} bg={'black.third'} orientation={'vertical'} />
              <DrawerHeaderLink href={'/'} style={headerStyle}>
                로그아웃
              </DrawerHeaderLink>
            </Flex>
          </DrawerHeader>

          <DrawerBody bg={'gray.50'} p={0}>
            <SiderCategory />
            <Divider />
            <DrawerHeaderLink
              href={`/introduction`}
              h={'124px'}
              display={'flex'}
              alignItems={'center'}
              bg={'#fff'}
              px={'40px'}
              style={{ textDecoration: 'none' }}
            >
              <Heading as={'h5'}>프로젝트 소개</Heading>
            </DrawerHeaderLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

interface Props extends LinkProps {
  style?: CSSProperties;
}

const DrawerHeaderLink = ({ style, children, ...props }: Props) => (
  <Link style={{ ...style }} {...props}>
    {children}
  </Link>
);
