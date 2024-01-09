import styled from '@emotion/styled';
import Image from 'next/image';

import { Users } from '@/data/data';

const User = () => {
  return (
    <UserProvider>
      <Image
        src={Users[0].profileImage}
        alt="프로필 이미지"
        width={46}
        height={46}
      ></Image>
      <span>{Users[0].nickname}</span>
    </UserProvider>
  );
};

export default User;

const UserProvider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  img {
    border-radius: 50%;
  }
`;
