import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { SerializedStyles } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useLoginModal from '@/hooks/useLoginModal';
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
  const router = useRouter();
  const { onOpen } = useLoginModal();

  useEffect(() => {
    // 새로 고침 하면 특정 모달 다시 페인팅
    if (window.location.pathname === '/login') {
      router.replace('/', '/login', { shallow: true });
      onOpen();
    } else if (window.location.pathname === '/register') {
      router.replace('/', '/register', { shallow: true });
      onOpen();
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        router.replace('', undefined, { shallow: true });
      }}
    >
      <ModalOverlay />
      <ModalContent css={style}>{element}</ModalContent>
    </Modal>
  );
};
export default Modals;
