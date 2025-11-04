import { FuentesDemanda } from "./components/FuentesDemanda";
import { FuentesOferta } from "./components/FuentesOferta";
import { MapaCobertura } from "./components/MapaCobertura";
import { PlanAccion } from "./components/PlanAccion";
import { LanguageSelector } from "./components/LanguageSelector";
import { DateSelector } from "./components/DateSelector";
import { Separator } from "./components/ui/separator";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Logo from "./imports/Logo";

function DashboardContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6">
          {/* Logos, selector de fecha y selector de idioma */}
          <div className="flex justify-between items-start mb-8">
            <div className="h-[42.686px]">
              <Logo />
            </div>
            
            <div className="flex items-center gap-4">
              <DateSelector />
              <LanguageSelector />
            </div>
          </div>
          
          {/* Título y subtítulo del dashboard */}
          <div className="mb-8">
            <h1 className="text-[#016689] text-[36px] font-bold mb-2">{t('dashboard.title')}</h1>
            <p className="text-muted-foreground text-[16px] font-normal">
              {t('dashboard.subtitle')}
            </p>
          </div>
          
          {/* Título de sección */}
          <div>
            <h2 className="text-[#016689] text-2xl mb-1">{t('demand.title')}</h2>
            <p className="text-muted-foreground text-[16px] font-normal">
              {t('demand.subtitle')}
            </p>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-8 pt-4 pb-8 space-y-12">
        <FuentesDemanda />
        <Separator className="my-12" />
        
        {/* Título de sección Oferta */}
        <div className="mb-6">
          <h2 className="text-[#016689] text-2xl mb-1">{t('supply.title')}</h2>
          <p className="text-muted-foreground text-[16px] font-normal">
            {t('supply.subtitle')}
          </p>
        </div>
        <FuentesOferta />
        
        <Separator className="my-12" />
        
        {/* Título de sección Mapa de Cobertura */}
        <div className="mb-6">
          <h2 className="text-[#016689] text-2xl mb-1">{t('coverage.title')}</h2>
          <p className="text-muted-foreground text-[16px] font-normal">
            {t('coverage.subtitle')}
          </p>
        </div>
        <MapaCobertura />
        
        <Separator className="my-12" />
        
        {/* Título de sección Plan de Acción */}
        <div className="mb-6">
          <h2 className="text-[#016689] text-2xl mb-1">{t('actionPlan.title')}</h2>
          <p className="text-muted-foreground text-[16px] font-normal">
            {t('actionPlan.subtitle')}
          </p>
        </div>
        <PlanAccion />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <DashboardContent />
    </LanguageProvider>
  );
}