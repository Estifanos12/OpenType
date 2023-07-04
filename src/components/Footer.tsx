import { BsGithub, BsTelegram, BsWhatsapp, BsCodeSlash } from 'react-icons/bs';

import Tooltip from './Tooltip';
import Social from './Social';

const Footer = () => {
  return (
    <footer className='mt-auto mb-3'>
      <div className=' flex justify-between items-center '>
        <div className='flex justify-center items-center '>
          <Tooltip tooltipId='Github'>
            <Social
              url='http://github.com/Estifanos12'
              tooltipContent='Github'
              tooltipId='Github'
            >
              <BsGithub className='text-2xl' />
            </Social>
          </Tooltip>
          <Tooltip tooltipId='whatsapp'>
            <Social
              url='https://wa.me/251961646618'
              tooltipContent='WhatsApp'
              tooltipId='whatsapp'
            >
              <BsWhatsapp className='text-2xl' />
            </Social>
          </Tooltip>

          <Tooltip tooltipId='telegram'>
            <Social
              url='http://t.me/estif1727'
              tooltipContent='Telegram'
              tooltipId='telegram'
            >
              <BsTelegram className='text-2xl ' />
            </Social>
          </Tooltip>
        </div>

        <div className='flex items-center gap-2'>
          <BsCodeSlash className='text-2xl font-bold' />
          <Tooltip tooltipId='source-code' delayHide={200}>
            <a
              href='http://github.com/Estifanos12/Typing_Speed_Game'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline text-xl font-mono'
              data-tooltip-content='Give me a star 😊'
              data-tooltip-id='source-code'
            >
              Source Code ⭐
            </a>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
