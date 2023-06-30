type TooltipProps = {
  tooltip: string;
  children: React.ReactNode;
};

const Tooltip = ({ tooltip, children }: TooltipProps) => {
  return (
    <div className='group relative flex flex-col cursor-pointer'>
      {children}
      <div className='absolute opacity-0 top-[100%] left-[-50%] border-2 border-[#6DEAFF] p-3 rounded-lg text-center bg-tootip group-hover:animate-[appear_1s_ease_forwards]'>
        <span className='font-mono text-md'>{tooltip}</span>
      </div>
    </div>
  );
};

export default Tooltip;
