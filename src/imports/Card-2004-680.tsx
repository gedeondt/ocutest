function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['Lato:Medium',_sans-serif] leading-[26px] relative shrink-0 text-[#303030] text-[20px]">TikTok Creative Center</p>
      <p className="font-['Lato:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#4a4a4a] text-[16px]">Productos virales que generan dudas</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-[121px]">
      <div className="flex flex-col font-['Lato:Medium',_sans-serif] justify-center relative shrink-0 text-[16px] text-neutral-950 tracking-[-0.1504px] w-full">
        <p className="leading-[20px]">Stanley Cup 40oz</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center relative shrink-0 text-[#717182] text-[12px] w-full">
        <p className="leading-[16px]">Filtración de plomo</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center relative shrink-0 text-[#0b4c63] text-[12px] w-full">
        <p className="leading-[16px]">45.000 menciones</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#004259] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center left-[213px] overflow-clip px-[8px] py-[2px] rounded-[2px] top-[15px] w-[50px]" data-name="Badge">
      <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Alta</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white box-border content-stretch flex h-[101px] items-center justify-between p-[16px] relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[278px]" data-name="card">
      <Frame3 />
      <Badge />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-[121px]">
      <div className="flex flex-col font-['Lato:Medium',_sans-serif] justify-center relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.1504px]">
        <p className="leading-[20px] whitespace-pre">iPhone 15 overheating</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[#717182] text-[12px] w-[min-content]">
        <p className="leading-[16px]">Filtración de plomo</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[#0b4c63] text-[12px] w-[min-content]">
        <p className="leading-[16px]">45.000 menciones</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#004259] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center left-[213px] overflow-clip px-[8px] py-[2px] rounded-[2px] top-[15px] w-[50px]" data-name="Badge">
      <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Alta</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white box-border content-stretch flex h-[101px] items-center justify-between p-[16px] relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[278px]" data-name="card">
      <Frame4 />
      <Badge1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-[121px]">
      <div className="flex flex-col font-['Lato:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.1504px]">
        <p className="leading-[20px] whitespace-pre">Tesla Model Y recalls</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[#717182] text-[12px] w-[min-content]">
        <p className="leading-[16px]">Filtración de plomo</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[#0b4c63] text-[12px] w-[min-content]">
        <p className="leading-[16px]">18.000 menciones</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#016689] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center left-[213px] overflow-clip px-[8px] py-[2px] rounded-[2px] top-[15px] w-[50px]" data-name="Badge">
      <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Media</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white box-border content-stretch flex h-[101px] items-center justify-between p-[16px] relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[278px]" data-name="card">
      <Frame5 />
      <Badge2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-[121px]">
      <div className="flex flex-col font-['Lato:Medium',_sans-serif] justify-center relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.1504px]">
        <p className="leading-[20px] whitespace-pre">{`iPhone 15 `}</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[#717182] text-[12px] w-[min-content]">
        <p className="leading-[16px]">Filtración de plomo</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[#0b4c63] text-[12px] w-[min-content]">
        <p className="leading-[16px]">5.000 menciones</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#e4eaed] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center left-[213px] overflow-clip px-[8px] py-[2px] rounded-[2px] top-[15px] w-[50px]" data-name="Badge">
      <p className="font-['Lato:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#016689] text-[12px] text-nowrap whitespace-pre">Baja</p>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white box-border content-stretch flex h-[101px] items-center justify-between p-[16px] relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[278px]" data-name="card">
      <Frame6 />
      <Badge3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start justify-between relative shrink-0 w-full">
      <Card />
      <Card1 />
      {[...Array(3).keys()].map((_, i) => (
        <Card2 key={i} />
      ))}
      <Card3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[38px] items-start left-[28px] top-[25px] w-[570px]">
      <Frame />
      <Frame2 />
    </div>
  );
}

export default function Card4() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)]" />
      <Frame1 />
    </div>
  );
}