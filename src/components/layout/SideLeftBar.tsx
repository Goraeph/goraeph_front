import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IoSettingsSharp } from '@react-icons/all-files/io5/IoSettingsSharp';
import { MdKeyboardArrowDown } from '@react-icons/all-files/md/MdKeyboardArrowDown';
import { useState } from 'react';

import { Tags } from '../../data/data';
import NoteTitle from './SideLeftBar/NoteTitle';

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
            <NoteTitle id={item.id} />
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
  min-width: 2rem;
  padding: 20px;
  background: #ffffff;
  h2 {
    color: #979797;
    font-size: 2rem;
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
    transition: 0.3s all;
    display: ${props.display ? 'flex' : 'none'};
  }

  div svg {
    transition: 0.3s all;
    transform: ${props.display ? 'rotateZ(-180deg)' : 'rotateZ(0deg)'};
  }
`;

const Section = styled.p`
  ${TagColorCss};
  padding: 10px;

  div {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    padding: 8px;
    margin-left: 10px;
    border-left: 2px solid #cccccc;
    justify-content: start;
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
