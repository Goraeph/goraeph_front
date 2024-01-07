import styled from '@emotion/styled';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { MdNotificationsNone } from '@react-icons/all-files/md/MdNotificationsNone';
import Image from 'next/image';
import { useState } from 'react';

import { Users } from '@/data/data';
import useLoginModal from '@/hooks/useLoginModal';
import { colors } from '@/styles/emotion/color';

import SpaceName from '../note/header/SpaceName';
const SideRightBar = () => {
  const [active, setActive] = useState(false);

  const { onOpen } = useLoginModal();
  return (
    <Contain>
      <User>
        {active ? (
          <>
            <MdNotificationsNone size={25} />
            <Image
              src={Users[0].profileImage}
              alt="이미지"
              width={40}
              height={40}
            />
          </>
        ) : (
          <>
            <button
              onClick={() => {
                onOpen();
              }}
            >
              로그인
            </button>
            <button
              onClick={() => {
                onOpen();
              }}
            >
              회원가입
            </button>
          </>
        )}
      </User>

      <SubscribeSearch>
        <input type="text" placeholder="SubscribeSearch" required />
        <FaSearch color="#ffffff" />
      </SubscribeSearch>

      <Contents>
        <ContentsTitle>Subscribed Space</ContentsTitle>
        <Section>
          {Users.map((item, index: number) => (
            <div key={index}>
              <Image
                src={item.profileImage}
                alt="이미지"
                width={40}
                height={40}
              />
              <SpaceName id={''} />
              {item.isActive && <span></span>}
            </div>
          ))}
        </Section>
      </Contents>
    </Contain>
  );
};

export default SideRightBar;
const Contain = styled.div`
  grid-column: span 1;
  width: 235px;
  min-width: 2rem;
  padding: 20px;
  background: ${colors.white};
`;
const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    border-radius: 50%;
  }
  button {
    background: none;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:nth-child(1) {
    border: none;
  }
`;
const SubscribeSearch = styled.div`
  position: relative;
  margin-top: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.gray_150};
  input {
    padding: 5px;
    width: 100%;
    border: none;
    font-size: 1em;
    background-color: ${colors.gray_150};
    color: ${colors.white};
  }
  input::-webkit-input-placeholder {
    color: ${colors.white};
  }

  input:focus {
    outline: none;
  }
`;
const Contents = styled.div`
  margin-top: 50px;
`;
const ContentsTitle = styled.span`
  font-size: 1.25rem;
  color: ${colors.gray_350};
  margin-top: 30px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 10px;
  div {
    position: relative;
    padding: 10px 0;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 14px;
  }
  div img {
    border-radius: 50%;
  }
  div span {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${colors.green};
    border-radius: 50%;
    left: 30px;
    bottom: 10px;
  }
`;
