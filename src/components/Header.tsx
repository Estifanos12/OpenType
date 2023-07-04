import { BsQuestionCircle } from 'react-icons/bs';
import { BsKeyboardFill } from 'react-icons/bs';

import Tooltip from './Tooltip';

type HeaderProps = {
  restart: () => void;
  openAboutModal: (str: string) => void;
  closeAboutModal: (str: string) => void;
};

const Header = ({ restart, openAboutModal }: HeaderProps) => {
  return (
    <header className='flex items-center justify-between py-8'>
      <div className='flex cursor-pointer items-center gap-3'>
        <img src='/logo.svg' alt='EType' width={'50px'} height={'50px'} />
        <h1 className='font-mono text-3xl font-bold hover:underline'>
          OpenType.
        </h1>
        <Tooltip tooltipId='keyboard'>
          <div
            className='ml-4'
            onClick={() => {
              restart();
            }}
            data-tooltip-id='keyboard'
            data-tooltip-content='Restart'
          >
            <BsKeyboardFill className='text-3xl ' />
          </div>
        </Tooltip>
      </div>
      <Tooltip tooltipId='about'>
        <div
          data-tooltip-id='about'
          data-tooltip-content='About'
          className='cursor-pointer'
          onClick={() => openAboutModal('about')}
        >
          <BsQuestionCircle className='text-3xl' />
        </div>
      </Tooltip>
    </header>
  );
};

export default Header;
