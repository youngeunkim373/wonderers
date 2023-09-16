import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import CustomHeading from '../../components/common/CustomHeading';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { TopDrawerNav } from './TopDrawerNav';
import { useState } from 'react';

const contentCatrgories = {
  diary: {
    label: '다이어리',
    children: [
      { key: 'planner', label: 'Planner' },
      { key: 'normal', label: '일반' },
    ],
  },
  sticker: {
    label: '스티커',
    children: [],
  },
  notice: {
    label: '공지사항',
    children: [],
  },
} as const;

export type ContentCategoryKey = keyof typeof contentCatrgories;
export type ContentCategoryValue = (typeof contentCatrgories)[ContentCategoryKey];

export function WebCatrgories() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentCategory, setCurrentCategory] = useState<ContentCategoryKey | null>(null);

  const handleOpenSubMenu = (key: ContentCategoryKey) => {
    setCurrentCategory(key);
    onOpen();
  };

  return (
    <>
      <Flex
        hideBelow={'md'}
        grow={1}
        gap={'min(10%, 120px)'}
        pl={'min(10%, 120px)'}
        style={{ width: '100%' }}
      >
        {Object.entries(contentCatrgories).map(([key, value]) => (
          <Button
            key={key}
            variant={'unstyled'}
            onClick={() => handleOpenSubMenu(key as ContentCategoryKey)}
          >
            <CustomHeading as={'h5'}>{value.label}</CustomHeading>
          </Button>
        ))}
      </Flex>

      {currentCategory && (
        <TopDrawerNav
          isOpen={isOpen}
          onClose={onClose}
          currentCategory={currentCategory}
          subMenuList={contentCatrgories[currentCategory].children}
        />
      )}
    </>
  );
}

const customAccordion = {
  container: {
    border: 'none',
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    border: 'none',
    padding: 0,
  },
  panel: {
    border: 'none',
  },
};

export function MobileCatrgories() {
  return (
    <Flex
      hideFrom={'md'}
      grow={1}
      direction={'column'}
      gap={'15px'}
      bg={'#fff'}
      p={'40px'}
      style={{ width: '100%' }}
    >
      {Object.entries(contentCatrgories).map(([key, value]) => (
        <Accordion key={key} allowToggle>
          <AccordionItem {...customAccordion.container}>
            {({ isExpanded }) => (
              <>
                <AccordionButton {...customAccordion.button}>
                  <CustomHeading as={'h5'}>{value.label}</CustomHeading>
                  {value.children &&
                    (isExpanded ? (
                      <MinusIcon color={'pink.main'} />
                    ) : (
                      <AddIcon color={'pink.main'} />
                    ))}
                </AccordionButton>

                {value.children && (
                  <AccordionPanel>
                    {value.children?.map((detail) => (
                      <Link key={detail.key} href={`/${key}/${detail.key}`}>
                        <CustomHeading as={'h5'}>{detail.label}</CustomHeading>
                      </Link>
                    ))}
                  </AccordionPanel>
                )}
              </>
            )}
          </AccordionItem>
        </Accordion>
      ))}
    </Flex>
  );
}
