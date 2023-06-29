import { MdRestartAlt } from 'react-icons/md';

type RestartProps = {
  restart: () => void;
  updateWords: () => void;
};

const Restart = ({ restart, updateWords }: RestartProps) => {
  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={() => {
          restart();
          updateWords();
        }}
        className='p-3 hover:bg-secondary rounded-full'
      >
        <MdRestartAlt className='text-5xl' />
      </button>
    </div>
  );
};

export default Restart;
