import { MdRestartAlt } from 'react-icons/md';
import Tooltip from './Tooltip';

type RestartProps = {
  restart: () => void;
};

const Restart = ({ restart }: RestartProps) => {
  return (
    <div className='mt-10'>
      <Tooltip tooltipId='Restart' delayHide={200}>
        <div className='flex justify-center items-center'>
          <button
            onClick={() => {
              restart();
            }}
            className='p-3 hover:bg-secondary hover:rotate-180 transition ease-out delay-200 rotate-0 rounded-full'
            data-tooltip-id='Restart'
            data-tooltip-content='Restart Test'
            data-tooltip-place='bottom'
          >
            <MdRestartAlt className='text-5xl' />
          </button>
        </div>
      </Tooltip>
    </div>
  );
};

export default Restart;
