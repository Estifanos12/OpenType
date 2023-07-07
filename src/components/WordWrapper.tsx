import { MdCenterFocusStrong } from 'react-icons/md';

type WordWrapperProps = {
  children: React.ReactNode;
  focused: boolean;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

const WordWrapper = ({ children, focused, setFocused }: WordWrapperProps) => {
  return (
    <>
      <div
        className={`${
          focused ? 'opacity-0' : 'opacity-100'
        } flex items-center justify-center gap-3 transition-all duration-500 `}
      >
        <MdCenterFocusStrong className='text-center text-2xl' />
        <span className={`text-center font-mono text-lg `}>
          Focus to start typing
        </span>
      </div>
      <div
        className={`relative mt-5 focus:border-0 focus:border-none focus:outline-none ${
          focused ? 'blur-none' : 'cursor-pointer blur-md'
        } `}
        tabIndex={0}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {children}
      </div>
    </>
  );
};

export default WordWrapper;
