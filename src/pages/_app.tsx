import '@/styles/globals.css';

import styled from '@emotion/styled';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import SideRightBar from '@/components/layout/SideRightBar';

const SideLeftBar = dynamic(
  () => import('@/components/layout/SideLeftBar').then(mod => mod.default),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <LayoutInner>
        <LayoutContainer>
          <SideLeftBar />

          <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>

          <SideRightBar />
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
  position: relative;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  height: 100vh;
`;
const ContentContainer = styled.div`
  grid-column: span 6;
  width: 100%;
  border: 1px solid red;
  min-width: 15rem;
`;
