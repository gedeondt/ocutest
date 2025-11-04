import { useLanguage } from "../contexts/LanguageContext";

interface StatCardProps {
  value: string;
  label: string;
  bgColor: string;
  textColor: string;
}

function StatCard({ value, label, bgColor, textColor }: StatCardProps) {
  return (
    <div 
      className={`${bgColor} box-border content-stretch flex flex-col h-[142px] items-center justify-center relative rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[308.25px]`}
    >
      <div className="relative shrink-0">
        <div className={`bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative ${textColor} text-center text-nowrap whitespace-pre`}>
          <p className="leading-[32px] relative shrink-0 text-[30px] tracking-[0.0703px]">
            {value}
          </p>
          <p className="leading-[20px] relative shrink-0 text-[16px] tracking-[-0.1504px]">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Alertas() {
  const { t } = useLanguage();
  
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full" data-name="Alertas">
      <StatCard 
        value="3" 
        label={t('stats.criticalGaps')}
        bgColor="bg-[#fff2ed]"
        textColor="text-[#f46506]"
      />
      <StatCard 
        value="2" 
        label={t('urgency.high') + ' ' + t('coverage.priority').toLowerCase()}
        bgColor="bg-[#daf1f9]"
        textColor="text-[#0b4c63]"
      />
      <StatCard 
        value="3" 
        label={t('stats.wellCovered')}
        bgColor="bg-[#eeffeb]"
        textColor="text-[#4aa83a]"
      />
      <StatCard 
        value="78%" 
        label={t('stats.averageAccuracy')}
        bgColor="bg-[#f7fcff]"
        textColor="text-[#016689]"
      />
    </div>
  );
}