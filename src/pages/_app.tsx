import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../system/chakraTheme';
import { Layout } from '@/layout/Layout';
import { AuthContextProvider } from '@/context/useAuthContext';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
