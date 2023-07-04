import Modal from 'react-modal';
import { IoIosCloseCircle } from 'react-icons/io';

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
    backgroundColor: '#003950',
    color: '#fff',
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
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
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
          <IoIosCloseCircle className='text-4xl text-secondaryAccent' />
        </button>
      </div>
      {children}
    </Modal>
  );
};

export default ModalComponent;
