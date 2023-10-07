import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Link } from '@chakra-ui/react';
import { ContentCategoryKey, ContentCategoryValue } from '@/context/LayoutContext';
import { Heading } from '@/stories';
import WavyLineImg from '@/assets/img/common/etc/line-wavy.svg';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentCategory: ContentCategoryKey;
  subMenuList: ContentCategoryValue['children'];
}

export function TopDrawerNav({ isOpen, onClose, currentCategory, subMenuList }: Props) {
  return (
    <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay bg={'transparent'} p={0} />
      <DrawerContent
        pos={'fixed'}
        top={'80px !important'}
        boxShadow={'xl'}
        display={{ base: 'none', md: 'block' }}
        pt={'40px'}
        pb={'48px'}
      >
        <DrawerBody textAlign={'center'} p={0}>
          <Flex justify={'center'} align={'center'} gap={'min(10%, 120px)'}>
            {subMenuList.map((subMenu) => (
              <Link
                style={{ textDecoration: 'none' }}
                key={subMenu.key}
                href={`/${currentCategory}/${subMenu.key}`}
              >
                <Heading as={'h6'} fontWeight={600} pb={'12px'}>
                  {subMenu.label}
                </Heading>
                <WavyLineImg />
              </Link>
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
