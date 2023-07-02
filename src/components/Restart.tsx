import { MdRestartAlt } from 'react-icons/md';
import Tooltip from './Tooltip';

type RestartProps = {
  restart: () => void;
};

const Restart = ({ restart }: RestartProps) => {
  return (
    <div className='mt-10'>
      <Tooltip tooltip='Restart Test'>
        <div className='flex justify-center items-center'>
          <button
            onClick={() => {
              restart();
            }}
            className='p-3 hover:bg-secondary hover:rotate-180 transition ease-out delay-200 rotate-0 rounded-full'
          >
            <MdRestartAlt className='text-5xl' />
          </button>
        </div>
      </Tooltip>
    </div>
  );
};

export default Restart;
