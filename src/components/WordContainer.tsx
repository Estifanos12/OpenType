type WordContainerProps = {
  word: string;
  focused: boolean;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

const WordContainer = ({ word, focused, setFocused }: WordContainerProps) => {
  return (
    <div className='relative '>
      <div
        className='border-2 border-[#6DEAFF] rounded-md my-5 p-5 blur-md focus:blur-none focus:outline-focus'
        tabIndex={0}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <div className='max-h-[45vh] overflow-y-scroll px-2'>
          <p className='font-mono text-2xl tracking-wider leading-9'>{word}</p>
        </div>
      </div>

      <div
        className={` absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
          focused ? 'hidden' : 'block'
        }}`}
      >
        <span
          className={`font-bold font-mono text-2xl ${
            focused ? 'hidden' : 'block'
          }`}
        >
          Focus to start typing
        </span>
      </div>
    </div>
  );
};

export default WordContainer;
