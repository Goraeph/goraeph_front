import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { SerializedStyles } from '@emotion/react';

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
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent css={style}>{element}</ModalContent>
    </Modal>
  );
};
export default Modals;
