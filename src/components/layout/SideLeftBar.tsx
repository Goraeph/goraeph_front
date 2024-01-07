import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IoSettingsSharp } from '@react-icons/all-files/io5/IoSettingsSharp';
import { MdKeyboardArrowDown } from '@react-icons/all-files/md/MdKeyboardArrowDown';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { colors } from '@/styles/emotion/color';
import { scrollbar } from '@/styles/emotion/scrollbar';

import { SuggestedSpaces, Tags } from '../../data/data';
import NoteTitle from './SideLeftBar/NoteTitle';

const SideLeftBar = () => {
  const [toggle, setToggle] = useState([0]);
  const router = useRouter();

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
      <h2
        onClick={() => {
          router.push('/');
        }}
      >
        🐋 Goraeph
      </h2>
      <Contents>
        <ContentsTitle>Top Tags</ContentsTitle>
        {Tags.map((item, index: number) => (
          <TopTag
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
          </TopTag>
        ))}

        <ContentsTitle>Suggested Space</ContentsTitle>
        {SuggestedSpaces.map((item, index: number) => (
          <SuggestedSpace key={index}>
            <Image
              src={item.profileImage}
              alt="이미지"
              width={40}
              height={40}
            ></Image>
            <div>
              <div>{item.name}</div>
              <div>{item.subscribe} subscriber</div>
            </div>
          </SuggestedSpace>
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
  grid-column: span 1;
  width: 235px;
  min-width: 2rem;
  padding: 20px 0 0 15px;
  background: ${colors.white};
  h2 {
    color: ${colors.gray_350};
    font-size: 2rem;
    cursor: pointer;
  }
  overflow: hidden;
`;

const ContentsTitle = styled.span`
  font-size: 1.25rem;
  color: ${colors.gray_350};
  display: block;
  margin-top: 50px;
`;

const Contents = styled.div`
  position: relative;
  overflow-y: scroll;
  height: 85vh;
  ${scrollbar}
`;

const TagColorCss = (props: { color?: string; display: boolean }) => css`
  color: ${props.color ? props.color : 'black'};

  span {
    transition: 0.3s all;
    display: ${props.display ? 'flex' : 'none'};
  }

  div svg {
    transition: 0.3s all;
    transform: ${props.display ? 'rotateZ(-180deg)' : 'rotateZ(0deg)'};
  }
`;

const TopTag = styled.p`
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
    border-left: 2px solid ${colors.gray_350};
    justify-content: start;
    align-items: center;
  }
`;

const SuggestedSpace = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 15px;

  img {
    border-radius: 50%;
  }
  div {
    margin-left: 8px;
  }
  div div:nth-child(1) {
    font-size: 1.25rem;
  }
`;

const Setting = styled.div`
  margin-top: 10px;
  gap: 5px;
  color: ${colors.gray_350};
  display: flex;
  align-items: center;
`;
