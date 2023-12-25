import styled from '@emotion/styled';

import Comment from './footer/Comment';
import Like from './footer/Like';
import Tag from './footer/Tag';

const Footer = ({ id }: { id: string }) => {
  return (
    <Contain>
      <Tag id={''} />
      <Like_Comment>
        <Like id={''} />
        <Comment id={''} />
      </Like_Comment>
    </Contain>
  );
};
export default Footer;

const Contain = styled.div`
  font-weight: 500;
`;
const Like_Comment = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 0.875rem;
  height: 2rem;
  margin-top: 20px;
`;
