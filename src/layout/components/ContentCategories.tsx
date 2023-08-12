import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Button, Flex, Link } from '@chakra-ui/react';
import CustomHeading from '../../components/common/CustomHeading';

import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const contentCatrgories = [
  {
    key: 'diary',
    label: '다이어리',
    children: [
      { key: 'planner', label: 'Planner' },
      { key: 'normal', label: '일반' },
    ],
  },
  {
    key: 'sticker',
    label: '스티커',
  },
  {
    key: 'notice',
    label: '공지사항',
  },
];

export function WebCatrgories() {
  return (
    <Flex
      hideBelow={'md'}
      grow={1}
      gap={'min(10%, 120px)'}
      pl={'min(10%, 120px)'}
      style={{ width: '100%' }}>
      {contentCatrgories.map((category) => (
        <Button
          key={category.key}
          variant={'unstyled'}>
          <CustomHeading as={'h5'}>{category.label}</CustomHeading>
        </Button>
      ))}
    </Flex>
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
      style={{ width: '100%' }}>
      {contentCatrgories.map((category) => (
        <Accordion
          key={category.key}
          allowToggle>
          <AccordionItem {...customAccordion.container}>
            {({ isExpanded }) => (
              <>
                <AccordionButton {...customAccordion.button}>
                  <CustomHeading as={'h5'}>{category.label}</CustomHeading>
                  {category.children &&
                    (isExpanded ? <MinusIcon color={'pink.main'} /> : <AddIcon color={'pink.main'} />)}
                </AccordionButton>

                {category.children && (
                  <AccordionPanel>
                    {category.children?.map((detail) => (
                      <Link
                        key={detail.key}
                        href={`/${category.key}/${detail.key}`}>
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
