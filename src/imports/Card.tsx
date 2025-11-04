function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-[305px]">
      <p className="font-['Lato:Medium',_sans-serif] leading-[26px] relative shrink-0 text-[#303030] text-[20px] text-nowrap whitespace-pre">Encuestas/Reclamaciones OCU</p>
      <p className="font-['Lato:Regular',_sans-serif] leading-[24px] min-w-full relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]">Nuestra propia data de dolor recurrente</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#303030] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Telecomunicaciones</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#4a4a4a] text-[12px] top-px w-[119px]">1247 casos este mes</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-[131.039px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-[131.039px]">
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
        <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">+15%</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[62px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(223,223,223,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[62px] items-center justify-between px-[13px] py-px relative w-full">
          <Container />
          <Badge />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#303030] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Banca/Finanzas</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#4a4a4a] text-[12px] top-px w-[114px]">987 casos este mes</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[113.039px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-[113.039px]">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#0b4c63] h-[22px] relative rounded-[2px] shrink-0 w-[50px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[50px]">
        <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">+8%</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[62px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(223,223,223,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[62px] items-center justify-between px-[13px] py-px relative w-full">
          <Container2 />
          <Badge1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#303030] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Seguros</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#4a4a4a] text-[12px] top-px w-[113px]">756 casos este mes</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[112.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-[112.672px]">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#e4eaed] h-[22px] relative rounded-[2px] shrink-0 w-[50px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[50px]">
        <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303030] text-[12px] text-nowrap whitespace-pre">-3%</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[62px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(223,223,223,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[62px] items-center justify-between px-[13px] py-px relative w-full">
          <Container4 />
          <Badge2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#303030] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">E-commerce</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#4a4a4a] text-[12px] top-px w-[120px]">1534 casos este mes</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[119.133px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-[119.133px]">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#0b4c63] h-[22px] relative rounded-[2px] shrink-0 w-[50px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[50px]">
        <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">+22%</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[62px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(223,223,223,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[62px] items-center justify-between px-[13px] py-px relative w-full">
          <Container6 />
          <Badge3 />
        </div>
      </div>
    </div>
  );
}

function FuentesDemanda() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[284px] items-start relative shrink-0 w-full" data-name="FuentesDemanda">
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[38px] items-start left-[28px] top-[25px] w-[570px]">
      <Frame />
      <FuentesDemanda />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)]" />
      <Frame1 />
    </div>
  );
}