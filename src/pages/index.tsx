import styled from '@emotion/styled';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { HiMenu } from '@react-icons/all-files/hi/HiMenu';
import Image from 'next/image';

import Note from '@/components/note/Note';
import { MainSpaces, Notes } from '@/data/data';
import useLoginModal from '@/hooks/useWriteModal';
import { colors } from '@/styles/emotion/color';
import { shadow } from '@/styles/emotion/shodow';

import BannerImage from '../../public/image/default_banner.png';

export default function Home() {
  const { onOpen } = useLoginModal();
  return (
    <Contain>
      <Banner>
        <Image src={BannerImage} alt="이미지" width={910} height={225}></Image>
      </Banner>
      <Header>
        <MainSpace>
          <div>
            <Image
              src={MainSpaces.profileImage}
              alt="이미지"
              width={37}
              height={37}
            ></Image>
            <span>{MainSpaces.name}</span>
            <span>@{MainSpaces.id}</span>
          </div>
          <div>
            <span>{MainSpaces.subscribe}k Subscriber</span>
            <span>{MainSpaces.total}</span>
          </div>
        </MainSpace>
        <Menu>
          <div>
            <span>Most Liked</span>
            <span>Most Recent</span>
          </div>
          <div>
            <span>
              <FaSearch />
              Search
            </span>
          </div>
        </Menu>
      </Header>
      {Notes.map((item, index: number) => (
        <Note key={index} note={item} />
      ))}

      <Button
        onClick={() => {
          onOpen();
        }}
      >
        <HiMenu />
      </Button>
    </Contain>
  );
}

const Contain = styled.div`
  /* padding: 28px; */
`;

const Banner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 28px;
`;

const Header = styled.div`
  position: sticky;
  top: -1px;
  width: 100%;
  background-color: ${colors.background_global};
  z-index: 10;
  padding: 20px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainSpace = styled.div`
  background-color: ${colors.white};
  color: ${colors.gray_50};
  border-radius: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  padding: 10px;
  max-width: 910px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  div img {
    border-radius: 50%;
  }
`;
const Menu = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 910px;
  span {
    border-radius: 10px;
    background-color: ${colors.gray_150};
    padding: 5px 40px;
    color: ${colors.white};
    font-size: 1.25rem;
    gap: 10px;
  }
  div:nth-child(1) span {
    margin-right: 30px;
  }
  div:nth-child(2) span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
`;
const Button = styled.div`
  position: absolute;
  bottom: 0;
  right: 250px;
  margin: 30px;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  ${shadow}
`;
