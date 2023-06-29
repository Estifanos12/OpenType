type WordContainerProps = {
  word: string;
};

const WordContainer = ({ word }: WordContainerProps) => {
  return (
    <div className='py-10'>
      <p className='font-mono text-xl opacity-70'>{word}</p>
    </div>
  );
};

export default WordContainer;
