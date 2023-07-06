import Modal from 'react-modal';
import { IoIosCloseCircle } from 'react-icons/io';

import { useThemeContext } from '../hooks/useTheme';

type ModalProps = {
  type: string;
  isOpen: boolean;
  onRequestClose: (str: string) => void;
  children: React.ReactNode;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '80%',
    maxWidth: '1024px',
    maxHeight: '90%',
    marginRight: '-50%',
    padding: 5,
    transform: 'translate(-50%, -50%)',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
};

Modal.setAppElement('#root');

const ModalComponent = ({
  type,
  isOpen,
  onRequestClose,
  children,
}: ModalProps) => {
  const { systemTheme } = useThemeContext();

  const styles = {
    content: {
      ...customStyles.content,
      backgroundColor: systemTheme.background.primary,
      color: systemTheme.text.title,
    },
    overlay: {
      ...customStyles.overlay,
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      style={styles}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => onRequestClose(type)}
      closeTimeoutMS={300}
    >
      <div className='relative flex w-full justify-end'>
        <button
          onClick={() => onRequestClose(type)}
          className='absolute right-1 top-1'
        >
          <IoIosCloseCircle
            className='text-4xl'
            style={{
              color: systemTheme.text.secondary,
            }}
          />
        </button>
      </div>
      <div style={{ color: systemTheme.text.title }}>{children}</div>
    </Modal>
  );
};

export default ModalComponent;
