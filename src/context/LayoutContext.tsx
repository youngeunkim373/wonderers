import { PropsWithChildren, createContext, useContext, useState } from 'react';
import Link from 'next/link';
import { Heading } from '@/stories';
import { TopDrawerNav } from '@/layout/components/TopDrawerNav';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LayoutContext = createContext<ReturnType<typeof useLayout>>(null);

export type ContentCategoryKey = keyof typeof categories;
export type ContentCategoryValue = (typeof categories)[ContentCategoryKey];

// INFO: 페이지 추가는 여기에서!
const categories = {
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

function useLayout() {
  /* ---------- Top drawer ---------- */
  const topDrawerDisclosure = useDisclosure();
  const [currentCategoryKey, setCurrentCategoryKey] = useState<ContentCategoryKey | null>(null);

  const handleOpenTopDrawer = (key: ContentCategoryKey) => {
    if (sideDrawerDisclosure.isOpen) sideDrawerDisclosure.onClose();

    if (categories[key].children.length > 0) topDrawerDisclosure.onOpen();
    else topDrawerDisclosure.onClose();

    setCurrentCategoryKey(key);
  };

  const handleCloseTopDrawer = () => {
    setCurrentCategoryKey(null);
    topDrawerDisclosure.onClose();
  };

  const HeaderCategory = () => {
    return (
      <>
        <Flex hideBelow={'md'} grow={1} gap={'min(10%, 120px)'} pl={'min(10%, 120px)'} w={'100%'}>
          {Object.entries(categories).map(([key, value]) => (
            <Button
              key={key}
              color={'pink.main'}
              variant={'unstyled'}
              onClick={() => handleOpenTopDrawer(key as ContentCategoryKey)}
            >
              <Heading as={'h5'} color={key === currentCategoryKey ? 'pink.main' : 'black'}>
                {value.label}
              </Heading>
            </Button>
          ))}
        </Flex>

        {currentCategoryKey && (
          <TopDrawerNav
            isOpen={topDrawerDisclosure.isOpen}
            onClose={handleCloseTopDrawer}
            currentCategory={currentCategoryKey}
            subMenuList={categories[currentCategoryKey].children}
          />
        )}
      </>
    );
  };

  /* ---------- Side drawer ---------- */
  const sideDrawerDisclosure = useDisclosure();

  const handleOpenSideDrawer = () => {
    if (topDrawerDisclosure.isOpen) topDrawerDisclosure.onClose();
    sideDrawerDisclosure.onOpen();
  };

  const SiderCategory = () => {
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
        {Object.entries(categories).map(([key, value]) => (
          <Accordion key={key} allowToggle>
            <AccordionItem {...customAccordion.container}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton {...customAccordion.button}>
                    <Heading as={'h5'}>{value.label}</Heading>
                    {value.children.length > 0 &&
                      (isExpanded ? (
                        <MinusIcon color={'pink.main'} />
                      ) : (
                        <AddIcon color={'pink.main'} />
                      ))}
                  </AccordionButton>

                  {value.children.length > 0 && (
                    <AccordionPanel>
                      {value.children?.map((detail) => (
                        <Link key={detail.key} href={`/${key}/${detail.key}`}>
                          <Heading as={'h5'}>{detail.label}</Heading>
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
  };

  return {
    topDrawerDisclosure,
    sideDrawerDisclosure,
    HeaderCategory,
    SiderCategory,
    handleOpenSideDrawer,
  };
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export function LayoutContextProvider({ children }: PropsWithChildren) {
  const state = useLayout();

  return <LayoutContext.Provider value={state}>{children}</LayoutContext.Provider>;
}
