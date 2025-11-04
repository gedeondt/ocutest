import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Target, 
  Calendar, 
  Users, 
  TrendingUp,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

// Oportunidades priorizadas (mismo cálculo que en MapaCobertura)
const coberturaData = [
  { 
    tema: "Cancelar suscripciones", 
    demanda: 95, 
    oferta: 20, 
    gap: 75,
    urgencia: "crítica",
    volumen_busquedas: 2400,
    contenido_existente: "Desactualizado",
    oportunidad: "Crear guía actualizada paso a paso",
    actionKey: "cancelSubscriptions"
  },
  { 
    tema: "Reclamaciones bancarias", 
    demanda: 80, 
    oferta: 60, 
    gap: 20,
    urgencia: "media",
    volumen_busquedas: 1800,
    contenido_existente: "Parcial",
    oportunidad: "Actualizar con nueva normativa",
    actionKey: "bankClaims"
  },
  { 
    tema: "Devoluciones e-commerce", 
    demanda: 85, 
    oferta: 45, 
    gap: 40,
    urgencia: "alta",
    volumen_busquedas: 2100,
    contenido_existente: "Básico",
    oportunidad: "Ampliar con casos específicos",
    actionKey: "ecommerceReturns"
  },
  { 
    tema: "Seguros de vida", 
    demanda: 60, 
    oferta: 85, 
    gap: -25,
    urgencia: "baja",
    volumen_busquedas: 1200,
    contenido_existente: "Completo",
    oportunidad: "Mantener actualizado",
    actionKey: "lifeInsurance"
  },
  { 
    tema: "Hipotecas variables", 
    demanda: 70, 
    oferta: 40, 
    gap: 30,
    urgencia: "alta",
    volumen_busquedas: 1500,
    contenido_existente: "Insuficiente",
    oportunidad: "Ampliar cobertura de hipotecas variables",
    actionKey: "variableMortgages"
  },
  { 
    tema: "Estafas telefónicas", 
    demanda: 90, 
    oferta: 30, 
    gap: 60,
    urgencia: "crítica",
    volumen_busquedas: 3200,
    contenido_existente: "Insuficiente",
    oportunidad: "Crear centro de alertas",
    actionKey: "phoneScams"
  },
  { 
    tema: "Productos defectuosos", 
    demanda: 75, 
    oferta: 40, 
    gap: 35,
    urgencia: "alta",
    volumen_busquedas: 1900,
    contenido_existente: "Genérico",
    oportunidad: "Guías por sectores",
    actionKey: "defectiveProducts"
  },
  { 
    tema: "Derechos consumidor", 
    demanda: 85, 
    oferta: 90, 
    gap: -5,
    urgencia: "baja",
    volumen_busquedas: 2800,
    contenido_existente: "Excelente",
    oportunidad: "Promover más",
    actionKey: "consumerRights"
  }
];

const oportunidadesPriorizadas = coberturaData
  .filter(item => item.gap > 0)
  .sort((a, b) => {
    const scoreA = a.gap * (a.volumen_busquedas / 1000);
    const scoreB = b.gap * (b.volumen_busquedas / 1000);
    return scoreB - scoreA;
  })
  .slice(0, 5);

interface ActionPlan {
  steps: string[];
  timeline: string;
  resources: string[];
  kpis: string[];
  impact: string;
}

const getActionPlan = (actionKey: string, t: (key: string) => string): ActionPlan => {
  const plans: { [key: string]: ActionPlan } = {
    cancelSubscriptions: {
      steps: [
        t('actionSteps.cancelSubscriptions.1'),
        t('actionSteps.cancelSubscriptions.2'),
        t('actionSteps.cancelSubscriptions.3'),
        t('actionSteps.cancelSubscriptions.4'),
        t('actionSteps.cancelSubscriptions.5')
      ],
      timeline: t('timeline.medium'),
      resources: [
        t('resources.contentTeam'),
        t('resources.socialMedia'),
        t('resources.development'),
        t('resources.seo')
      ],
      kpis: [
        t('kpis.organicTraffic'),
        t('kpis.socialEngagement'),
        t('kpis.timeOnPage'),
        t('kpis.conversionRate')
      ],
      impact: '+180%'
    },
    phoneScams: {
      steps: [
        t('actionSteps.phoneScams.1'),
        t('actionSteps.phoneScams.2'),
        t('actionSteps.phoneScams.3'),
        t('actionSteps.phoneScams.4'),
        t('actionSteps.phoneScams.5')
      ],
      timeline: t('timeline.short'),
      resources: [
        t('resources.contentTeam'),
        t('resources.socialMedia'),
        t('resources.development'),
        t('resources.legal')
      ],
      kpis: [
        t('kpis.organicTraffic'),
        t('kpis.socialEngagement'),
        t('kpis.shares'),
        t('kpis.backlinks')
      ],
      impact: '+192%'
    },
    ecommerceReturns: {
      steps: [
        t('actionSteps.ecommerceReturns.1'),
        t('actionSteps.ecommerceReturns.2'),
        t('actionSteps.ecommerceReturns.3'),
        t('actionSteps.ecommerceReturns.4'),
        t('actionSteps.ecommerceReturns.5')
      ],
      timeline: t('timeline.medium'),
      resources: [
        t('resources.contentTeam'),
        t('resources.legal'),
        t('resources.development'),
        t('resources.design')
      ],
      kpis: [
        t('kpis.organicTraffic'),
        t('kpis.timeOnPage'),
        t('kpis.conversionRate'),
        t('kpis.bounceRate')
      ],
      impact: '+84%'
    },
    variableMortgages: {
      steps: [
        t('actionSteps.variableMortgages.1'),
        t('actionSteps.variableMortgages.2'),
        t('actionSteps.variableMortgages.3'),
        t('actionSteps.variableMortgages.4'),
        t('actionSteps.variableMortgages.5')
      ],
      timeline: t('timeline.long'),
      resources: [
        t('resources.contentTeam'),
        t('resources.development'),
        t('resources.legal'),
        t('resources.seo')
      ],
      kpis: [
        t('kpis.organicTraffic'),
        t('kpis.conversionRate'),
        t('kpis.timeOnPage'),
        t('kpis.backlinks')
      ],
      impact: '+45%'
    },
    defectiveProducts: {
      steps: [
        t('actionSteps.defectiveProducts.1'),
        t('actionSteps.defectiveProducts.2'),
        t('actionSteps.defectiveProducts.3'),
        t('actionSteps.defectiveProducts.4'),
        t('actionSteps.defectiveProducts.5')
      ],
      timeline: t('timeline.medium'),
      resources: [
        t('resources.contentTeam'),
        t('resources.socialMedia'),
        t('resources.development'),
        t('resources.legal')
      ],
      kpis: [
        t('kpis.organicTraffic'),
        t('kpis.socialEngagement'),
        t('kpis.shares'),
        t('kpis.timeOnPage')
      ],
      impact: '+66.5%'
    }
  };

  return plans[actionKey] || plans.cancelSubscriptions;
};

export const PlanAccion = () => {
  const { t } = useLanguage();
  const [selectedOpportunity, setSelectedOpportunity] = useState<typeof oportunidadesPriorizadas[0] | null>(null);

  const handleOpportunityClick = (opportunity: typeof oportunidadesPriorizadas[0]) => {
    setSelectedOpportunity(opportunity);
  };

  const actionPlan = selectedOpportunity ? getActionPlan(selectedOpportunity.actionKey, t) : null;

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de oportunidades */}
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>{t('chart.topOpportunities')}</CardTitle>
              <CardDescription>{t('actionPlan.selectOpportunity')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {oportunidadesPriorizadas.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleOpportunityClick(item)}
                  className={`w-full text-left border rounded-lg p-3 space-y-2 transition-all hover:shadow-md ${
                    selectedOpportunity?.tema === item.tema
                      ? 'border-[#016689] bg-[#f7fcff]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2 flex-1">
                      <Badge className={index < 3 ? "bg-[#016689] text-white hover:bg-[#016689] flex-shrink-0" : "bg-[#E4EAED] text-[#016689] hover:bg-[#E4EAED] flex-shrink-0"}>
                        #{index + 1}
                      </Badge>
                      <h4 className="text-[14px] leading-tight">{item.tema}</h4>
                    </div>
                    <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-400" />
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <span className="text-muted-foreground">{item.volumen_busquedas.toLocaleString()} búsquedas/mes</span>
                    <span className="text-[#CB050A]">{item.gap}%</span>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Plan de acción detallado */}
        <div className="lg:col-span-2">
          {selectedOpportunity && actionPlan ? (
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-[#016689]">
                      {t('actionPlan.for')}: {selectedOpportunity.tema}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {selectedOpportunity.oportunidad}
                    </CardDescription>
                  </div>
                  <Badge className="bg-[#016689] text-white hover:bg-[#016689] px-3 py-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {actionPlan.impact}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Timeline e Impacto */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#f7fcff] p-2.5 rounded-lg border border-[#E4EAED]">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-[#016689]" />
                      <h4 className="text-[14px]" style={{ color: '#016689' }}>{t('actionPlan.timeline')}</h4>
                    </div>
                    <p className="text-[18px]" style={{ color: '#303030' }}>{actionPlan.timeline}</p>
                  </div>
                  <div className="bg-[#f7fcff] p-2.5 rounded-lg border border-[#E4EAED]">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-[#016689]" />
                      <h4 className="text-[14px]" style={{ color: '#016689' }}>{t('actionPlan.impact')}</h4>
                    </div>
                    <p className="text-[18px]" style={{ color: '#303030' }}>
                      {selectedOpportunity.volumen_busquedas.toLocaleString()} búsquedas/mes
                    </p>
                  </div>
                </div>

                {/* Pasos a seguir */}
                <div>
                  <h4 className="text-[16px] mb-3" style={{ color: '#016689' }}>{t('actionPlan.steps')}</h4>
                  <div className="space-y-2">
                    {actionPlan.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#016689] text-white flex items-center justify-center text-[12px]">
                          {index + 1}
                        </div>
                        <p className="text-[14px] flex-1" style={{ color: '#303030' }}>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recursos necesarios */}
                <div>
                  <h4 className="text-[16px] mb-3" style={{ color: '#016689' }}>{t('actionPlan.resources')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {actionPlan.resources.map((resource, index) => (
                      <div key={index} className="flex items-center gap-2 bg-[#E4EAED] px-3 py-2 rounded-lg">
                        <Users className="w-3 h-3" style={{ color: '#016689' }} />
                        <span className="text-[12px]" style={{ color: '#016689' }}>{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* KPIs */}
                <div>
                  <h4 className="text-[16px] mb-3" style={{ color: '#016689' }}>{t('actionPlan.kpis')}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {actionPlan.kpis.map((kpi, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#4aa83a]" />
                        <span className="text-[12px]" style={{ color: '#303030' }}>{kpi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center py-12">
                <Target className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-muted-foreground">{t('actionPlan.selectOpportunity')}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
