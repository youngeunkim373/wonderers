import { Header } from './Header';
import { Footer } from './Footer';
import { LinkProps, Box as Main, useTheme } from '@chakra-ui/react';
import { LayoutContextProvider } from '@/context/LayoutContext';
import styled from '@emotion/styled';
interface Props extends LinkProps {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { sizes } = useTheme();

  return (
    <LayoutContextProvider>
      <Header />
      <Main
        w={'100%'}
        px={{ base: 'layout.px.base', md: 'layout.px.md' }}
        minH={{
          md: `calc(100vh - ${sizes.layout.footerHeight.md} - ${sizes.layout.headerHeight})`,
          base: `calc(100vh - ${sizes.layout.footerHeight.base} - ${sizes.layout.headerHeight})`,
        }}
        transform={`translateY(${sizes.layout.headerHeight})`}
      >
        {children}
      </Main>
      <Footer />
    </LayoutContextProvider>
  );
}
