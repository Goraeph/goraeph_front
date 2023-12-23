import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IoSettingsSharp } from '@react-icons/all-files/io5/IoSettingsSharp';
import { MdKeyboardArrowDown } from '@react-icons/all-files/md/MdKeyboardArrowDown';
import { useState } from 'react';

import { Note, Tags } from '../data/data';

const SideLeftBar = () => {
  const [toggle, setToggle] = useState([0]);

  const handleNoteItem = (id: number) => {
    if (toggle.some(ids => ids === id)) {
      const newToggle = [...toggle].filter(item => item !== id);
      setToggle(newToggle);
    } else {
      const newToggle = [...toggle, id];
      setToggle(newToggle);
    }
  };

  return (
    <Contain>
      <h2>🐋 Goraeph</h2>
      <Contents>
        <ContentsTitle>Top Tags</ContentsTitle>
        {Tags.map((item, index: number) => (
          <Section
            color={item.color}
            key={index}
            display={toggle.some(id => id === item.id)}
          >
            <div
              onClick={() => {
                handleNoteItem(item.id);
              }}
            >
              {item.name} <MdKeyboardArrowDown color="#A6A6A6" />
            </div>
            {Note.map((note, index: number) => {
              if (item.id === note.id) {
                return <span key={index}>#{note.title}</span>;
              }
            })}
          </Section>
        ))}
      </Contents>

      <Setting>
        <IoSettingsSharp />
        setting
      </Setting>
    </Contain>
  );
};

export default SideLeftBar;

const Contain = styled.div`
  width: 250px;
  height: 100vh;
  padding: 20px;
  background: #ffffff;

  h2 {
    color: #979797;
  }
`;
const ContentsTitle = styled.span`
  font-size: 1.25rem;
  color: #979797;
`;

const Contents = styled.div`
  margin-top: 50px;
`;

const TagColorCss = (props: { color?: string; display: boolean }) => css`
  color: ${props.color};
  span {
    display: ${props.display ? 'inline' : 'none'};
  }
`;

const Section = styled.p`
  ${TagColorCss};
  padding: 10px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Setting = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 20px;
  gap: 5px;
  color: #979797;
  display: flex;
  align-items: center;
`;
