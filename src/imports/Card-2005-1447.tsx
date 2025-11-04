function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative text-[#f46506] text-center text-nowrap whitespace-pre">
        <p className="font-['Lato:Regular',_sans-serif] leading-[32px] relative shrink-0 text-[30px] tracking-[0.0703px]">2</p>
        <p className="font-['Lato:SemiBold',_sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[-0.1504px]">Alta prioridad</p>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-[rgba(244,101,6,0.1)] box-border content-stretch flex flex-col items-center justify-center relative rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] size-full" data-name="Card">
      <Frame />
    </div>
  );
}