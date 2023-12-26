import styled from '@emotion/styled';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import { TiPencil } from '@react-icons/all-files/ti/TiPencil';

import Modals from '../Modals';

const WriteModal = () => {
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
      <Button>
        <TiPencil />
      </Button>
    </Contain>
  );
  return <Modals element={write} close={true} />;
};

export default WriteModal;
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
