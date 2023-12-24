import styled from '@emotion/styled';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { MdNotificationsNone } from '@react-icons/all-files/md/MdNotificationsNone';
import Image from 'next/image';

import { Users } from '@/data/data';
const SideRightBar = () => {
  return (
    <Contain>
      <User>
        <MdNotificationsNone size={25} />
        <Image
          src={Users[0].profileImage}
          alt="이미지"
          width={40}
          height={40}
        />
      </User>

      <SubscribeSearch>
        <input type="text" />
        <span>SubscribeSearch</span>
        <FaSearch />
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
              Some Space
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
  padding: 20px;
  min-width: 2rem;
  background: #ffffff;
`;
const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    border-radius: 50%;
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
  border: 2px solid #979797;
  input {
    padding: 5px;
    width: 100%;
    border: none;
    font-size: 1em;
  }
  span {
    position: absolute;
    left: 0;
    margin-left: 15px;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    pointer-events: none;
    transition: 0.3s all;
    color: #979797;
  }
  input:focus {
    outline: none;
  }
  input:focus ~ span {
    transform: translateX(-5px) translateY(-25px);
    background-color: #ffffff;
    padding: 0 5px;
  }
`;
const Contents = styled.div`
  margin-top: 50px;
`;
const ContentsTitle = styled.span`
  font-size: 1.25rem;
  color: #979797;
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
    background-color: #53fd04;
    border-radius: 50%;
    left: 30px;
    bottom: 10px;
  }
`;
