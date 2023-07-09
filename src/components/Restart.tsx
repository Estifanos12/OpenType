import styled from 'styled-components';
import { MdRestartAlt } from 'react-icons/md';

import { useThemeContext } from '../hooks/useTheme';

import Tooltip from './Tooltip';

type RestartProps = {
  restart: () => void;
};

const StyledButton = styled.button`
  &:hover {
    color: ${({ theme }) => theme.text.title};
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;

const Restart = ({ restart }: RestartProps) => {
  const { systemTheme } = useThemeContext();
  return (
    <div className='mt-10'>
      <Tooltip tooltipId='Restart' delayHide={200}>
        <div className='flex items-center justify-center'>
          <StyledButton
            theme={systemTheme}
            onClick={() => {
              restart();
            }}
            className={`rotate-0 rounded-full p-3 transition delay-200 ease-out hover:rotate-180 `}
            data-tooltip-id='Restart'
            data-tooltip-content='Restart Test'
            data-tooltip-place='bottom'
          >
            <MdRestartAlt className='text-2xl lg:text-3xl ' />
          </StyledButton>
        </div>
      </Tooltip>
    </div>
  );
};

export default Restart;
