import { Tooltip as ReactToolTip } from 'react-tooltip';

type TooltipProps = {
  tooltipId: string;
  delayShow?: number;
  delayHide?: number;
  textColor?: string;
  children: React.ReactNode;
};

const Tooltip = ({
  tooltipId,
  children,
  delayHide,
  delayShow,
}: TooltipProps) => {
  return (
    <>
      {children}
      <ReactToolTip
        id={tooltipId}
        className={`font-mono bg-secondary text-lg text-secondaryAccent font-semibold}`}
        delayHide={delayHide}
        delayShow={delayShow}
      />
    </>
  );
};

export default Tooltip;
