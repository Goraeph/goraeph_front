import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
const Modals = ({
  element,
  isOpen,
  onClose,
  style,
}: {
  element: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
  style: SerializedStyles;
}) => {
  return (
    <Contain>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent css={style}>{element}</ModalContent>
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

const ButtonCSS = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 15px;
`;
