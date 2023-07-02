import Modal from 'react-modal';
import { IoIosCloseCircle } from 'react-icons/io';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '90%',
    height: '90%',
    marginRight: '-50%',
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

const ModalComponent = ({ isOpen, onRequestClose, children }: ModalProps) => {
  return (
      <Modal isOpen={isOpen} style={customStyles} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true}
      onRequestClose={() => onRequestClose()}
      >
        <button
          className='flex justify-end w-full'
          onClick={() => onRequestClose()}
        >
          <IoIosCloseCircle className='text-4xl text-secondaryAccent' />
        </button>
        {children}
      </Modal>
  );
};

export default ModalComponent;
