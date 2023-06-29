import { MdAccountCircle } from 'react-icons/md';

const Header = () => {
  return (
    <header className='py-8 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <img src='/logo.svg' alt='EType' width={'50px'} height={'50px'} />
        <h1 className='font-mono text-2xl'>EType.</h1>
      </div>
      <div>
        <MdAccountCircle className='text-5xl' />
      </div>
    </header>
  );
};

export default Header;
