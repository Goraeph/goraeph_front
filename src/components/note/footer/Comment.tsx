import styled from '@emotion/styled';

import { Comments } from '@/data/data';

const Comment = ({ id }: { id: string }) => {
  return <Contain>&nbsp;•&nbsp;{Comments.length}&nbsp;Comments</Contain>;
};

export default Comment;
const Contain = styled.span``;
