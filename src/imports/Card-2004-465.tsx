function CardTitle() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <p className="absolute font-['Lato:Medium',_sans-serif] leading-[26px] left-0 not-italic text-[#303030] text-[20px] text-nowrap top-0 whitespace-pre">Búsquedas internas sin respuesta</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <CardTitle />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[298.242px]">
      <Container />
      <p className="font-['Lato:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full">Demanda explícita que confía en nosotros</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[225.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[225.25px]">
        <p className="absolute font-['Lato:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#303030] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">cancelar suscripción movistar fibra</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[22px] relative rounded-[2px] shrink-0 w-[40.992px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[40.992px]">
        <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[dimgrey] text-nowrap whitespace-pre">234</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Badge />
    </div>
  );
}

function HorizontalRule() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Horizontal Rule">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(223,223,223,0.5)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[55px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <p className="font-['Lato:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] text-nowrap whitespace-pre">Última búsqueda hace 2h</p>
      <HorizontalRule />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[209.945px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[209.945px]">
        <p className="absolute font-['Lato:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#303030] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">reclamar seguro coche total loss</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[22px] relative rounded-[2px] shrink-0 w-[39.469px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[39.469px]">
        <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[dimgrey] text-nowrap whitespace-pre">189</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Badge1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a4a4a] text-[12px] top-px w-[143px]">Última búsqueda hace 1h</p>
    </div>
  );
}

function HorizontalRule1() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Horizontal Rule">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(223,223,223,0.5)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[55px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Paragraph2 />
      <HorizontalRule1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[229.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[229.938px]">
        <p className="absolute font-['Lato:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#303030] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">devolución amazon producto usado</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="h-[22px] relative rounded-[2px] shrink-0 w-[38.563px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[38.563px]">
        <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[dimgrey] text-nowrap whitespace-pre">167</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Badge2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a4a4a] text-[12px] top-px w-[145px]">Última búsqueda hace 3h</p>
    </div>
  );
}

function HorizontalRule2() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Horizontal Rule">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(223,223,223,0.5)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[55px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Paragraph4 />
      <HorizontalRule2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[262.609px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[262.609px]">
        <p className="absolute font-['Lato:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#303030] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">cambiar tarifa telefónica sin penalización</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="h-[22px] relative rounded-[2px] shrink-0 w-[39.063px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[39.063px]">
        <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[dimgrey] text-nowrap whitespace-pre">142</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Badge3 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a4a4a] text-[12px] top-px w-[145px]">Última búsqueda hace 4h</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[46px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Paragraph6 />
    </div>
  );
}

function FuentesDemanda() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[247px] items-start relative shrink-0 w-full" data-name="FuentesDemanda">
      <Container2 />
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[38px] h-[378px] items-start left-[28px] top-[25px] w-[570px]">
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