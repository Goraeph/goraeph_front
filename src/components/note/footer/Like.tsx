import styled from '@emotion/styled';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';

import { Likes } from '@/data/data';
import { colors } from '@/styles/emotion/color';

const Like = ({ id }: { id: string }) => {
  return (
    <Contain>
      <FaHeart color={colors.pink} />
      &ensp;{Likes.length}&nbsp;likes
    </Contain>
  );
};

export default Like;

const Contain = styled.span`
  display: flex;
  align-items: center;
  svg {
    font-size: 1.25rem;
  }
`;
