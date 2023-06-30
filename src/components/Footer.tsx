import {
  BsGithub,
  BsTelegram,
  BsTwitter,
  BsWhatsapp,
  BsCodeSlash,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='mt-10 pb-5 flex justify-between items-center'>
      <div className='flex justify-center items-center '>
        <a
          href='http://github.com/Estifanos12'
          target='_blank'
          rel='noopener noreferrer'
          className='socialHover p-3'
        >
          <BsGithub className='text-2xl' />
        </a>
        <a
          href='https://wa.me/251961646618'
          target='_blank'
          rel='noopener noreferrer'
          className='socialHover p-3'
        >
          <BsWhatsapp className='text-2xl' />
        </a>
        <a
          href='http://t.me/estif1727'
          target='_blank'
          rel='noopener noreferrer'
          className='socialHover p-3'
        >
          <BsTelegram className='text-2xl ' />
        </a>
        <a
          href='http://twitter.com/estif1727'
          target='_blank'
          rel='noopener noreferrer'
          className='socialHover p-3'
        >
          <BsTwitter className='text-2xl' />
        </a>
      </div>

      <div className='flex items-center gap-2'>
        <BsCodeSlash className='text-2xl font-bold' />
        <a
          href='http://github.com/Estifanos12/Typing_Speed_Game'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline text-xl font-mono'
        >
          Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
