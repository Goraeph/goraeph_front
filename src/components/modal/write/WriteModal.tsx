import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { TiPencil } from '@react-icons/all-files/ti/TiPencil';
import { useRouter } from 'next/router';

import useWriteModal from '@/hooks/useWriteModal';

import Modals from '../Modals';

const WriteModal = () => {
  const { isOpen, onClose } = useWriteModal();
  const router = useRouter();
  const write = (
    <Contain>
      <div>
        <Button>
          <IoIosArrowUp />
        </Button>
        <Button>
          <IoIosArrowDown />
        </Button>
      </div>
      <Button
        onClick={() => {
          router.push('/write');
        }}
      >
        <TiPencil />
      </Button>
      <Button onClick={onClose}>
        <IoClose />
      </Button>
    </Contain>
  );
  return (
    <Modals
      element={write}
      isOpen={isOpen}
      onClose={onClose}
      style={ModalContentCss}
    />
  );
};

export default WriteModal;

const ModalContentCss = css`
  position: absolute;
  width: auto;
  bottom: 0;
  right: 250px;
  margin: 30px;
  background: none;
  border: none;
  box-shadow: none;
`;

const Contain = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  div div {
    border-radius: 0;
  }
  div div:nth-child(1) {
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
  }
  div div:nth-child(2) {
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;
const Button = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;
