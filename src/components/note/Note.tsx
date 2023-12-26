import styled from '@emotion/styled';
import Image from 'next/image';

import { NoteProps } from '@/data/data';

import Footer from './Footer';
import Header from './Header';

const Note = ({ note }: { note: NoteProps }) => {
  return (
    <Contain>
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
  background: white;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  padding: 30px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px hsla(0, 0%, 0%, 0.22);
  }
`;
const Content = styled.div`
  margin-top: 20px;
  img {
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
