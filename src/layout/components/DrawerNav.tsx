import CustomHeading from '@/components/common/CustomHeading';
import { LogoLink } from '@/components/common/links/LogoLink';
import {
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
import { CSSProperties } from 'react';
import { MobileCatrgories } from './ContentCategories';

const headerStyle = {
  width: '50%',
  fontSize: '14px',
  fontWeight: 400,
  textAlign: 'center' as const,
};

export function DrawerNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Drawer
      placement={'right'}
      onClose={onClose}
      isOpen={isOpen}>
      <DrawerOverlay
        bg={'transparent'}
        p={0}
      />

      <DrawerContent boxShadow={'xl'}>
        <DrawerHeader
          bg={'gray.50'}
          p={0}>
          <Flex
            justify={'space-between'}
            align={'center'}
            p={'40px'}>
            <LogoLink />
            <CloseButton
              style={{ fontSize: '24px' }}
              onClick={onClose}
            />
          </Flex>
          <Flex
            justify={'center'}
            align={'center'}
            pb={'40px'}>
            <DrawerHeaderLink
              href={'/profile'}
              style={headerStyle}>
              마이페이지
            </DrawerHeaderLink>
            <Divider
              h={'20px'}
              bg={'black.third'}
              orientation={'vertical'}
            />
            <DrawerHeaderLink
              href={'/'}
              style={headerStyle}>
              로그아웃
            </DrawerHeaderLink>
          </Flex>
        </DrawerHeader>

        <DrawerBody
          bg={'gray.50'}
          p={0}>
          <MobileCatrgories />
          <Divider />
          <DrawerHeaderLink
            href={`/introduction`}
            h={'124px'}
            display={'flex'}
            alignItems={'center'}
            bg={'#fff'}
            px={'40px'}
            style={{ textDecoration: 'none' }}>
            <CustomHeading as={'h5'}>프로젝트 소개</CustomHeading>
          </DrawerHeaderLink>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

interface Props extends LinkProps {
  style?: CSSProperties;
}

const DrawerHeaderLink = ({ style, children, ...props }: Props) => (
  <Link
    style={{ ...style }}
    {...props}>
    {children}
  </Link>
);
