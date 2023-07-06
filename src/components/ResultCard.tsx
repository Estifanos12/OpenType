import { useThemeContext } from '../hooks/useTheme';

import Tooltip from './Tooltip';

type ResultCardProps = {
  tooltipId: string;
  tooltipContent: string;
  tooltipPlace: 'bottom' | 'top' | 'left' | 'right';
  title: string;
  results: string;
};

const ResultCard = ({
  title,
  tooltipId,
  tooltipContent,
  tooltipPlace,
  results,
}: ResultCardProps) => {
  const { systemTheme } = useThemeContext();
  return (
    <Tooltip tooltipId={tooltipId}>
      <div
        className='flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg p-5'
        data-tooltip-content={tooltipContent}
        data-tooltip-id={tooltipId}
        data-tooltip-place={tooltipPlace}
        style={{
          backgroundColor: systemTheme.background.secondary,
        }}
      >
        <h2 className='text-3xl'>{title}</h2>
        <p
          className='text-center text-3xl'
          style={{
            color: systemTheme.text.secondary,
          }}
        >
          {results}
        </p>
      </div>
    </Tooltip>
  );
};

export default ResultCard;
