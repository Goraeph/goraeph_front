import styled from '@emotion/styled';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';

import WriteModal from '@/components/modal/write/WriteModal';
import Note from '@/components/note/Note';
import { Notes } from '@/data/data';
export default function Home() {
  return (
    <Contain>
      <Header>
        <span>Let’s Trip</span>
        <FaSearch />
      </Header>
      {Notes.map((item, index: number) => (
        <Note key={index} note={item} />
      ))}

      <WriteModal />
    </Contain>
  );
}

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 20px 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  color: #b6b6b6;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px hsla(0, 0%, 0%, 0.22);
  }
  cursor: pointer;
  svg {
    font-size: 24px;
  }
`;
