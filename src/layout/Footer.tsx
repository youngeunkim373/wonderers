import { Text } from '@/stories/Text';
import { Grid, GridItem, Show, useTheme } from '@chakra-ui/react';
import Logo from '@/assets/img/common/logo/white-logo.svg';
import WavyLine from '@/assets/img/common/etc/line-wavy.svg';

export function Footer() {
  const { sizes } = useTheme();

  return (
    <Grid
      w={'100%'}
      h={{ base: 'layout.footerHeight.base', md: 'layout.footerHeight.md' }}
      bg={'black.main'}
      color={'white'}
      px={{ base: 'layout.px.base', md: 'layout.px.md' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems={'center'}
      templateColumns={{ base: 'auto', md: 'repeat(3, auto)' }}
      textAlign={'center'}
      pt={'18px'}
      pb={'15px'}
      boxSizing={'border-box'}
      transform={`translateY(${sizes.layout.headerHeight})`}
    >
      <GridItem id={'copyright'} order={{ base: 3, md: 1 }} pr={{ base: 0, md: '200px' }}>
        <Text color={'white'} fontSize={'12px'}>
          Copyright ©
          <Text
            as={'span'}
            fontFamily={'djh'}
            color={'white'}
            fontSize={{ base: '10px', md: '12px' }}
            fontWeight={500}
          >
            Wonderers
          </Text>
          All rights reserved.
        </Text>
      </GridItem>

      <GridItem id={'ask'} order={{ base: 1, md: 2 }}>
        <Text
          color={'white'}
          fontFamily={'ibm-M'}
          fontSize={{ base: '12px', md: '14px' }}
          fontWeight={500}
        >
          문의하기
        </Text>
        <Show below={'md'}>
          <WavyLine style={{ filter: 'invert(100%)', margin: '15px auto' }} />
        </Show>
      </GridItem>

      <GridItem id={'footer-logo'} order={{ base: 2, md: 3 }} mx={'auto'} pb={'6px'}>
        <Logo height={'15px'} viewBox="0 0 150 21" />
      </GridItem>
    </Grid>
  );
}
