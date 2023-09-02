import WavyLineImg from '@/assets/img/common/etc/line-wavy.svg';
import CustomHeading from '@/components/common/CustomHeading';
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Link } from '@chakra-ui/react';
import { ContentCategoryKey, ContentCategoryValue } from './ContentCategories';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentCategory: ContentCategoryKey;
  subMenuList: ContentCategoryValue['children'];
}

export function TopDrawerNav({ isOpen, onClose, currentCategory, subMenuList }: Props) {
  return (
    <Drawer
      placement={'top'}
      onClose={onClose}
      isOpen={isOpen}>
      <DrawerOverlay
        bg={'transparent'}
        p={0}
      />
      <DrawerContent
        h={'120px'}
        pos={'fixed'}
        top={'80px !important'}
        boxShadow={'xl'}>
        <DrawerBody textAlign={'center'}>
          <Flex
            justify={'center'}
            align={'center'}
            gap={'min(10%, 120px)'}>
            {subMenuList.map((subMenu) => (
              <Link
                style={{ textDecoration: 'none' }}
                key={subMenu.key}
                href={`/${currentCategory}/${subMenu.key}`}>
                <CustomHeading
                  as={'h6'}
                  fontWeight={600}
                  pb={'12px'}>
                  {subMenu.label}
                </CustomHeading>
                <WavyLineImg />
              </Link>
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
