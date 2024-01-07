import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { NoteProps } from '@/data/data';
import { colors } from '@/styles/emotion/color';
import { shadow } from '@/styles/emotion/shodow';

import Footer from './Footer';
import Header from './Header';

const Note = ({ note }: { note: NoteProps }) => {
  const router = useRouter();
  return (
    <Contain
      onClick={() => {
        router.push('/detail/1');
      }}
    >
      <Header title={note.title} date={note.createdBy} />

      <Content>
        {note.preview_image && (
          <ContentImage>
            <Image src={note.preview_image} alt="이미지" fill />
          </ContentImage>
        )}
        <div>{note.contents}</div>
      </Content>

      <Footer id={''} />
    </Contain>
  );
};

export default Note;

const Contain = styled.div`
  background: ${colors.white};
  cursor: pointer;
  margin: auto;
  margin-top: 20px;
  max-width: 910px;
  border-radius: 20px;
  padding: 30px;
  ${shadow}
`;
const Content = styled.div`
  margin-top: 20px;
  img {
    width: 850px;
    height: auto !important;
    position: relative !important;
  }
`;
const ContentImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
  height: 300px;
  overflow: hidden;
`;
