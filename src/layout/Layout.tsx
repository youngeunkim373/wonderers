import { Header } from './Header';
import { Footer } from './Footer';
import { LinkProps, Box as Main, useTheme } from '@chakra-ui/react';
import { LayoutContextProvider } from '@/context/LayoutContext';
interface Props extends LinkProps {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { sizes } = useTheme();

  return (
    <LayoutContextProvider>
      <Header />
      <Main
        bg={'pink'}
        h={{ base: `calc(100vh - ${sizes.layout.footerHeight.base})` }}
        minH={{ md: `calc(100vh - ${sizes.layout.footerHeight.md})` }}
      >
        {children}
      </Main>
      <Footer />
    </LayoutContextProvider>
  );
}
