type CharactersProps = {
  state?: boolean;
  character: string;
  className?: React.CSSProperties;
};

const Character = ({ state, character, className }: CharactersProps) => {
  return (
    <span
      className={`${
        state === undefined
          ? ''
          : state === true
          ? 'text-secondaryAccent'
          : state === false && character === ' '
          ? 'bg-red-600'
          : 'text-red-600'
      } ${className}`}
    >
      {character}
    </span>
  );
};

export default Character;
