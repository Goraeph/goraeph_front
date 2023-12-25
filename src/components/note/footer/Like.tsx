import styled from '@emotion/styled';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';

import { Likes } from '@/data/data';

const Like = ({ id }: { id: string }) => {
  return (
    <Contain>
      <FaHeart color="#FF8989" />
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
