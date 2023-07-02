import { MdAccountCircle } from 'react-icons/md';
import Tooltip from './Tooltip';

type HeaderProps = {
  restart: () => void;
};

const Header = ({ restart }: HeaderProps) => {
  return (
    <header className='py-8 flex justify-between items-center'>
      <div
        className='flex items-center gap-3 cursor-pointer'
        onClick={() => {
          restart();
        }}
      >
        <img src='/logo.svg' alt='EType' width={'50px'} height={'50px'} />
        <h1 className='font-mono text-3xl font-bold hover:underline'>EType.</h1>
      </div>
      <Tooltip tooltip='Profile'>
        <div>
          <MdAccountCircle className='text-5xl' />
        </div>
      </Tooltip>
    </header>
  );
};

export default Header;
