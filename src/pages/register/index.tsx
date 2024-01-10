import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { colors } from '@/styles/emotion/color';

const Register = () => {
  const [oauth, setOauth] = useState(true);

  return (
    <RegisterProvider>
      <h1>회원가입</h1>
      <RegisterInput type="text" value={'service@goraeph.com'} disabled />
      {oauth && (
        <>
          <RegisterInput type="text" placeholder="비밀번호" />
          <RegisterInput type="text" placeholder="비밀번호 재확인" />
        </>
      )}
      <RegisterInput type="text" placeholder="아이디" datatype="@id" />
      <RegisterTextArea
        placeholder="(선택) 한 줄로 소개말을 작성해보세요!"
        rows={1}
      ></RegisterTextArea>
      <RegisterCheck>
        <input type="checkbox" />
        <span>
          <a href="#">이용약관</a>과 <a href="#">개인정보취급</a>에 동의합니다.
        </span>
      </RegisterCheck>
      <RegisterPost>가입 완료</RegisterPost>
    </RegisterProvider>
  );
};

export default Register;

const RegisterProvider = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 1.75rem;
    font-weight: bold;
  }
`;
const InputCss = css`
  border: 1px solid ${colors.black_100};
  ::-webkit-input-placeholder {
    color: ${colors.gray_100};
  }
  &[datatype='@id'] {
    margin-top: 60px;
  }
`;
const InputSizeCss = css`
  width: 390px;
  padding: 20px;
  border-radius: 10px;
`;
const RegisterInput = styled.input`
  ${InputCss}
  ${InputSizeCss}
`;
const RegisterTextArea = styled.textarea`
  ${InputCss}
  ${InputSizeCss}
`;
const RegisterCheck = styled.div`
  ${InputSizeCss}
  padding: 20px 0;
  text-align: left;
  input[type='checkbox'] {
    margin-right: 10px;
  }
  span a {
    text-decoration: underline;
  }
`;
const RegisterPost = styled.div`
  ${InputSizeCss}
  text-align: center;
  background-color: #d9d9d9;
`;
