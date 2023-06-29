import { MdAccountCircle } from 'react-icons/md';

type HeaderProps = {
  reset: () => void;
  updateWords: () => void;
};

const Header = ({ reset, updateWords }: HeaderProps) => {
  return (
    <header className='py-8 flex justify-between items-center'>
      <div
        className='flex items-center gap-3 cursor-pointer'
        onClick={() => {
          reset();
          updateWords();
        }}
      >
        <img src='/logo.svg' alt='EType' width={'50px'} height={'50px'} />
        <h1 className='font-mono text-3xl font-bold'>EType.</h1>
      </div>
      <div>
        <MdAccountCircle className='text-5xl' />
      </div>
    </header>
  );
};

export default Header;
