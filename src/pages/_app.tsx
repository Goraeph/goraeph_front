import '@/styles/globals.css';

import styled from '@emotion/styled';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const SideLeftBar = dynamic(
  () => import('@/components/SideLeftBar').then(mod => mod.default),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <LayoutInner>
        <LayoutContainer>
          <SideLeftBar />
          <Component {...pageProps} />
        </LayoutContainer>
      </LayoutInner>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  height: 100vh;
  color: black;
  background-color: #d9d9d9;
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
  display: flex;
  height: 100%;
`;
