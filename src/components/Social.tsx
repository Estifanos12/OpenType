type SocialProps = {
  url: string;
  tooltipContent?: string;
  tooltipId?: string;
  children: React.ReactNode;
};

const Social = ({ url, tooltipContent, tooltipId, children }: SocialProps) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='socialHover p-3'
      data-tooltip-content={tooltipContent}
      data-tooltip-id={tooltipId}
    >
      {children}
    </a>
  );
};

export default Social;
