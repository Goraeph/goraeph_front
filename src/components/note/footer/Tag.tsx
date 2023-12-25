import styled from '@emotion/styled';
import { HiHashtag } from '@react-icons/all-files/hi/HiHashtag';

import { Tags } from '@/data/data';
const Tag = ({ id }: { id: string }) => {
  return (
    <Contain>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">{Tags[0].name}</a>
      </div>
      <div>
        <HiHashtag />
        <a href="#">
          {Tags[0].name}
          {Tags[0].name}
          {Tags[0].name}
          {Tags[0].name}
          {Tags[0].name}
          {Tags[0].name}
          {Tags[0].name}
          {Tags[0].name}
          {Tags[0].name}
          {Tags[0].name}
          {Tags[0].name}
        </a>
      </div>
    </Contain>
  );
};

export default Tag;

const Contain = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  min-height: 0.875rem;
  div {
    background: #d9d9d9;
    color: white;
    padding: 3px 13px;
    border-radius: 10px;
    height: 2rem;
    display: flex;
    align-items: center;
    a {
      color: white;
    }
  }
`;
