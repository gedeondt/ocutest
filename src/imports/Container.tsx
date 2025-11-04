function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#303030] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Banca/Finanzas</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#4a4a4a] text-[12px] top-px w-[114px]">987 casos este mes</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-[113.039px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-[113.039px]">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#0b4c63] h-[22px] relative rounded-[2px] shrink-0 w-[50px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[50px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">+8%</p>
      </div>
    </div>
  );
}

export default function Container1() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(223,223,223,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Container />
          <Badge />
        </div>
      </div>
    </div>
  );
}