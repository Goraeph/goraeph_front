import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FaApple } from '@react-icons/all-files/fa/FaApple';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { useEffect, useState } from 'react';

import useLoginModal from '@/hooks/useLoginModal';
import { colors } from '@/styles/emotion/color';

import Modals from '../Modals';

const LoginModal = () => {
  const { isOpen, onClose } = useLoginModal();
  const [register, setRegister] = useState(true);
  const [authentication, setAuthentication] = useState(true);

  useEffect(() => {
    if (!register) setRegister(true);
  }, [isOpen]);

  const LoginForm = (
    <Contain>
      {register ? <h1>로그인</h1> : <h1>회원가입</h1>}
      <Section>
        <SnsLogin color={'white'}>
          <FcGoogle size={20} />
          구글 로그인
        </SnsLogin>
        <SnsLogin color={'black'}>
          <FaApple size={20} />
          애플 로그인
        </SnsLogin>
      </Section>

      <Board></Board>

      <Section>
        <Input>
          <input
            type="text"
            required
            placeholder={
              register ? '아이디' : authentication ? '이메일' : '인증번호'
            }
          />
        </Input>
        {register && (
          <Input>
            <input type="text" required placeholder="비밀번호" />
          </Input>
        )}
        <Login
          onClick={() => {
            if (authentication) {
              setAuthentication(false);
            } else {
              setAuthentication(true);
            }
          }}
        >
          {register ? '로그인' : authentication ? '이메일 보내기' : '인증 확인'}
        </Login>

        <Register>
          계정이 {register ? '없으신가요?' : '있으신가요?'}
          <span
            onClick={() => {
              if (register) {
                setRegister(false);
              } else {
                setRegister(true);
              }
            }}
          >
            {register ? '회원가입' : '로그인'}
          </span>
        </Register>
      </Section>
    </Contain>
  );

  return (
    <Modals
      element={LoginForm}
      isOpen={isOpen}
      onClose={onClose}
      style={ModalContentCss}
    />
  );
};

export default LoginModal;
const ModalContentCss = css`
  margin: auto;
`;
const Contain = styled.div`
  color: ${colors.black};
  padding: 30px 50px;
  text-align: center;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Section = styled.div`
  margin: 30px 0;
  position: relative;
  div {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 10px 0;
    border-radius: 10px;
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 100%;
  }
  input:focus {
    outline: none;
  }
  input:focus ~ span,
  input:valid ~ span {
    transform: translateX(10px) translateY(-20px);
    padding: 0 5px;
    font-size: 0.75rem;
    background-color: ${colors.white};
  }
`;
const Input = styled.div`
  border: 1px solid #ababab;
`;
const SnsLoginColor = (props: { color: string }) => css`
  background-color: ${props.color === 'black' ? 'black' : 'white'};
  color: ${props.color === 'black' ? 'white' : 'black'};
`;
const SnsLogin = styled.div`
  ${SnsLoginColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Login = styled.div`
  background-color: ${colors.gray_150};
  font-weight: bold;
`;

const Board = styled.div`
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
`;
const Register = styled.span`
  border: none;
  background: none;
  font-size: 0.75rem;
  color: ${colors.gray_300};
  span {
    color: ${colors.black};
    font-weight: bold;
    cursor: pointer;
  }
`;
