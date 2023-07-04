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

  return (
    <div className='character absolute left-0 top-0 z-10 break-all font-mono text-2xl'>
      {characters.map((_, index) => {
        return (
          <Character character={word.charAt(index)} state={check(index)} />
        );
      })}
    </div>
  );
};

export default UserTyped;
