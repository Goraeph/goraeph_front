import { create } from 'zustand';

interface ModalType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useWriteModal = create<ModalType>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useWriteModal;
