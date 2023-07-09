import styled from 'styled-components';
import { BsGithub, BsTelegram, BsWhatsapp, BsCodeSlash } from 'react-icons/bs';

import { useThemeContext } from '../hooks/useTheme';

import Tooltip from './Tooltip';
import Social from './Social';

const StyledLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.text.title};
  }
`;

const Footer = () => {
  const { systemTheme } = useThemeContext();
  return (
    <footer className='mb-3 mt-auto'>
      <div className=' flex items-center justify-between '>
        <div className='flex items-center justify-center '>
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
              url='https://wa.link/e3397e'
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
          <BsCodeSlash className='text-xl font-bold' />
          <Tooltip tooltipId='source-code'>
            <StyledLink
              theme={systemTheme}
              href='http://github.com/Estifanos12/OpenType'
              target='_blank'
              rel='noopener noreferrer'
              className='font-mono text-xl hover:underline'
              data-tooltip-content='Give me a star 😊'
              data-tooltip-id='source-code'
            >
              Source Code ⭐
            </StyledLink>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
