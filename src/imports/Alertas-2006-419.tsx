function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative text-[#cb050a] text-center text-nowrap whitespace-pre">
        <p className="font-['Lato:Regular',_sans-serif] leading-[32px] relative shrink-0 text-[30px] tracking-[0.0703px]">3</p>
        <p className="font-['Lato:SemiBold',_sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[-0.1504px]">Gaps críticos</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[rgba(203,5,10,0.1)] box-border content-stretch flex flex-col h-[142px] items-center justify-center relative rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[308.25px]" data-name="Card">
      <Frame1 />
    </div>
  );
}

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

function Card1() {
  return (
    <div className="bg-[rgba(244,101,6,0.1)] box-border content-stretch flex flex-col h-[142px] items-center justify-center relative rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[308.25px]" data-name="Card">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] items-center justify-center not-italic relative text-[#4aa83a] text-center text-nowrap whitespace-pre">
        <p className="font-['Lato:Regular',_sans-serif] leading-[32px] relative shrink-0 text-[30px] tracking-[0.0703px]">3</p>
        <p className="font-['Lato:SemiBold',_sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[-0.1504px]">Bien cubiertos</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#eeffeb] box-border content-stretch flex flex-col h-[142px] items-center justify-center relative rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[308.25px]" data-name="Card">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] items-center justify-center not-italic relative text-[#016689] text-center text-nowrap whitespace-pre">
        <p className="font-['Lato:Regular',_sans-serif] leading-[32px] relative shrink-0 text-[30px] tracking-[0.0703px]">78%</p>
        <p className="font-['Lato:SemiBold',_sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[-0.1504px]">Precisión promedio</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#f7fcff] box-border content-stretch flex flex-col h-[142px] items-center justify-center relative rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[308.25px]" data-name="Card">
      <Frame3 />
    </div>
  );
}

export default function Alertas() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full" data-name="Alertas">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}