import '@/styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import SideRightBar from '@/components/layout/SideRightBar';
import LoginModal from '@/components/modal/login/LoginModal';
import WriteModal from '@/components/modal/write/WriteModal';
import { colors } from '@/styles/emotion/color';
import { scrollbar } from '@/styles/emotion/scrollbar';

const SideLeftBar = dynamic(
  () => import('@/components/layout/SideLeftBar').then(mod => mod.default),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <LayoutInner>
          <LayoutContainer>
            <SideLeftBar />

            <ContentContainer>
              <Component {...pageProps} />
              <WriteModal />
              <LoginModal />
            </ContentContainer>

            <SideRightBar />
          </LayoutContainer>
        </LayoutInner>
      </MainLayout>
    </ChakraProvider>
  );
}

const MainLayout = styled.div`
  height: 100vh;
  color: black;
  background-color: ${colors.background_global};
  font-family: IBMPlexSans;
  @font-face {
    font-family: IBMPlexSans;
    src: url('/font/IBMPlexSans-Bold.ttf');
  }
`;
const LayoutInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
const LayoutContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  height: 100vh;
`;
const ContentContainer = styled.div`
  grid-column: span 6;
  width: 100%;
  min-width: 15rem;
  overflow-y: auto;

  ${scrollbar}
`;
