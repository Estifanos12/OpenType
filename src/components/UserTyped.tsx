import { useMemo } from 'react';
import Character from './Character';

type UserTypedProps = {
  charTyped: string;
  check: (index: number) => boolean;
  word: string;
};

const UserTyped = ({ check, charTyped, word }: UserTypedProps) => {
  const characters = useMemo(() => {
    return charTyped.split('');
  }, [charTyped]);

  console.log(word);
  return (
    <div className='absolute left-0 top-0 font-mono text-2xl z-10 character break-all'>
      {characters.map((_, index) => {
        return (
          <Character character={word.charAt(index)} state={check(index)} />
        );
      })}
    </div>
  );
};

export default UserTyped;
