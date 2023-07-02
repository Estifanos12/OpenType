import { useMemo } from 'react';
import Character from './Character';

type WordContainerProps = {
  word: string;
};

const WordContainer = ({ word }: WordContainerProps) => {
  const characters = useMemo(() => {
    return word.split('');
  }, [word]);

  return (
    <div className='relative left-0 top-0 opacity-80 font-mono text-2xl break-all'>
      {characters.map((character) => {
        return <Character character={character} />;
      })}
    </div>
  );
};

export default WordContainer;
