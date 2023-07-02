import { useState, useCallback } from 'react';

export const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return { modalIsOpen, openModal, closeModal };
};
