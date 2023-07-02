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
          : state === false
          ? 'text-red-500'
          : ' text-secondaryAccent'
      } ${className}`}
    >
      {character}
    </span>
  );
};

export default Character;
