import styled from '@emotion/styled';
import Image from 'next/image';

import { Users } from '@/data/data';

import SpaceName from './header/SpaceName';

const Header = ({ title, date }: { title: string; date: string }) => {
  return (
    <Content>
      <Image src={Users[0].profileImage} alt="이미지" width={80} height={80} />
      <Section>
        <span>{title}</span>
        <span>
          by <text>{Users[0].nickname[0]}</text> from <SpaceName id={''} />
        </span>

        <span>{date}</span>
      </Section>
    </Content>
  );
};

export default Header;

const Content = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 20px;

  span:nth-child(1) {
    font-size: 1.5rem;
  }
  span:nth-child(2) {
    color: #d9d9d9;
  }
  span text {
    font-weight: bold;
    color: #000000;
  }
`;
