type WordContainerProps = {
  word: string;
};

const WordContainer = ({ word }: WordContainerProps) => {
  return (
    <div className='py-10'>
      <p className='font-mono text-2xl tracking-wider leading-9'>{word}</p>
    </div>
  );
};

export default WordContainer;
