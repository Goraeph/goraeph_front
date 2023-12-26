import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HiMenu } from '@react-icons/all-files/hi/HiMenu';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
const Modals = ({
  element,
  close,
}: {
  element: React.ReactElement;
  close?: boolean;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Contain>
      <Button onClick={onOpen} css={ButtonCSS}>
        <HiMenu />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent css={ModalContentCss}>
          {element}
          {close && (
            <Button onClick={onClose} css={ButtonCSS}>
              <IoClose />
            </Button>
          )}
        </ModalContent>
      </Modal>
    </Contain>
  );
};
export default Modals;

const Contain = styled.div`
  position: fixed;
  bottom: 0;
  right: 250px;
  margin: 30px;
`;

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

const ButtonCSS = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 15px;
`;
