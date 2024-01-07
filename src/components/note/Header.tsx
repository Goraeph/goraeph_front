import styled from '@emotion/styled';
import Image from 'next/image';

import { Users } from '@/data/data';
import { colors } from '@/styles/emotion/color';

import SpaceName from './header/SpaceName';

const Header = ({ title, date }: { title: string; date: string }) => {
  return (
    <Content>
      <Image src={Users[0].profileImage} alt="이미지" width={90} height={90} />
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
    font-size: 1.8rem;
  }
  span:nth-child(2) {
    color: ${colors.gray_150};
    font-size: 1.125rem;
  }
  span text {
    font-weight: bold;
    color: ${colors.black};
  }
`;
