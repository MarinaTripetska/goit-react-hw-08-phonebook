import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow, Button } from './Modal.styled';
export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
        {children}
        <Button type="button" children={'x'} onClick={() => onClose()} />
      </ModalWindow>
    </Overlay>,
    document.getElementById('modal-portal')
  );
};
