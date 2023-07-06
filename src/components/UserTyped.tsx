import { useMemo } from 'react';
import styled from 'styled-components';

import { useThemeContext } from '../hooks/useTheme';
import Character from './Character';

type UserTypedProps = {
  charTyped: string;
  check: (index: number) => boolean;
  word: string;
};

const StyledDiv = styled.div`
  &:last-child {
    &::after {
      background-color: ${(props) => props.theme.text.secondary};
    }
  }
`;

const UserTyped = ({ check, charTyped, word }: UserTypedProps) => {
  const characters = useMemo(() => {
    return charTyped.split('');
  }, [charTyped]);

  const { systemTheme } = useThemeContext();

  return (
    <StyledDiv
      className='character absolute left-0 top-0 z-10 break-all font-mono text-2xl'
      theme={systemTheme}
    >
      {characters.map((_, index) => {
        return (
          <Character character={word.charAt(index)} state={check(index)} />
        );
      })}
    </StyledDiv>
  );
};

export default UserTyped;
