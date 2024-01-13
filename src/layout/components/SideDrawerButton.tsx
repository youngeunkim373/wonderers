import { CSSProperties } from 'react';
import { Heading } from '@/stories';
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
  Button,
} from '@chakra-ui/react';
import HamburgerImg from '@/assets/img/common/buttons/btn-hamburger.svg';
import { useAuthContext } from '@/context/useAuthContext';

const headerStyle = {
  width: '50%',
  fontSize: '14px',
  fontWeight: 400,
  textAlign: 'center' as const,
};

export function SideDrawerButton() {
  const { isLoggedIn, logOut } = useAuthContext();
  const { SiderCategory, sideDrawerDisclosure, handleOpenSideDrawer } = useLayoutContext();
  const { isOpen, onClose } = sideDrawerDisclosure;

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const confirmed = window.confirm('로그아웃 하시겠습니까?');

    if (confirmed) {
      logOut();
    }
  };

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
            <Flex justify={'flex-end'} align={'center'} p={'40px'}>
              <CloseButton fontSize={'24px'} onClick={onClose} />
            </Flex>
            <Flex justify={'center'} align={'center'} pb={'40px'}>
              {isLoggedIn ? (
                <DrawerHeaderLink href={'/profile'} style={headerStyle}>
                  마이페이지
                </DrawerHeaderLink>
              ) : (
                <DrawerHeaderLink href={'/join'} style={headerStyle}>
                  회원가입
                </DrawerHeaderLink>
              )}
              <Divider
                w={'1.2px'}
                h={'20px'}
                color={'black.third'}
                bg={'black.third'}
                orientation={'vertical'}
              />
              {isLoggedIn ? (
                <Button variant="link" style={headerStyle} onClick={handleLogout}>
                  로그아웃
                </Button>
              ) : (
                <DrawerHeaderLink href={'/login'} style={headerStyle}>
                  로그인
                </DrawerHeaderLink>
              )}
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
function logOut() {
  throw new Error('Function not implemented.');
}
