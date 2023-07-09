import styled from 'styled-components';

import { useThemeContext } from '../hooks/useTheme';

type SocialProps = {
  url: string;
  tooltipContent?: string;
  tooltipId?: string;
  children: React.ReactNode;
};

const StyledSocial = styled.a`
  &:hover {
    color: ${({ theme }) => theme.text.title};
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;

const Social = ({ url, tooltipContent, tooltipId, children }: SocialProps) => {
  const { systemTheme } = useThemeContext();
  return (
    <StyledSocial
      theme={systemTheme}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='rounded-full p-3'
      data-tooltip-content={tooltipContent}
      data-tooltip-id={tooltipId}
    >
      {children}
    </StyledSocial>
  );
};

export default Social;
