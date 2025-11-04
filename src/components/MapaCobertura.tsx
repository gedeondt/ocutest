import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useLanguage } from "../contexts/LanguageContext";

// Mapa de cobertura: Demanda vs Oferta
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
    fuentes: ["Google Trends", "Redes Sociales", "Foros"],
    num_hashtags: 156,
    crecimiento: 23.5,
    articulos_publicados: 3
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
    fuentes: ["Google Trends", "Foros"],
    num_hashtags: 89,
    crecimiento: 8.2,
    articulos_publicados: 7
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
    fuentes: ["Google Trends", "Redes Sociales", "Atención Cliente"],
    num_hashtags: 124,
    crecimiento: 18.7,
    articulos_publicados: 5
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
    fuentes: ["Google Trends"],
    num_hashtags: 45,
    crecimiento: 3.1,
    articulos_publicados: 12
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
    fuentes: ["Google Trends", "Foros", "Atención Cliente"],
    num_hashtags: 67,
    crecimiento: 12.4,
    articulos_publicados: 4
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
    fuentes: ["Google Trends", "Redes Sociales", "Foros", "Atención Cliente"],
    num_hashtags: 234,
    crecimiento: 45.8,
    articulos_publicados: 2
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
    fuentes: ["Google Trends", "Redes Sociales", "Atención Cliente"],
    num_hashtags: 98,
    crecimiento: 15.3,
    articulos_publicados: 6
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
    fuentes: ["Google Trends", "Redes Sociales"],
    num_hashtags: 178,
    crecimiento: 5.6,
    articulos_publicados: 15
  }
];

// Priorización de oportunidades
const oportunidadesPriorizadas = coberturaData
  .filter(item => item.gap > 0)
  .sort((a, b) => {
    // Priorizar por gap y volumen de búsquedas
    const scoreA = a.gap * (a.volumen_busquedas / 1000);
    const scoreB = b.gap * (b.volumen_busquedas / 1000);
    return scoreB - scoreA;
  })
  .slice(0, 5);

const getUrgenciaColor = (urgencia: string) => {
  switch (urgencia) {
    case 'crítica': return '#CB050A';
    case 'alta': return '#f97316';
    case 'media': return '#eab308';
    case 'baja': return '#22c55e';
    default: return '#6b7280';
  }
};

const getUrgenciaColorBadge = (urgencia: string) => {
  switch (urgencia) {
    case 'crítica': return 'bg-[#CB050A] text-white';
    case 'alta': return 'bg-[#F46506] text-white';
    case 'media': return 'bg-[#F9A825] text-white';
    case 'baja': return 'bg-[#4AA83A] text-white';
    default: return 'bg-[#6E6E6E] text-white';
  }
};

export const MapaCobertura = () => {
  const { t } = useLanguage();
  
  return (
    <section className="space-y-6">
      {/* Tabla de Puntuación de Temáticas */}
      <Card>
        <CardHeader>
          <CardTitle>
            {t('chart.demandVsSupply')}
          </CardTitle>
          <CardDescription>
            {t('description.matrixDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[180px]">Temática</TableHead>
                  <TableHead className="min-w-[150px]">Fuentes Demanda</TableHead>
                  <TableHead className="text-right px-1.5">Búsquedas/mes</TableHead>
                  <TableHead className="text-right px-1.5">Hashtags</TableHead>
                  <TableHead className="text-right px-1.5">Crecimiento</TableHead>
                  <TableHead className="text-right px-1.5">Artículos</TableHead>
                  <TableHead className="text-center px-1.5">Urgencia</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coberturaData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-[#000000] font-['Lato:Light',_sans-serif] font-[Lato] text-[12px]">
                      {item.tema}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {item.fuentes.map((fuente, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded whitespace-nowrap" 
                            style={{ backgroundColor: '#E4EAED', color: '#016689' }}
                          >
                            {fuente}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-['Lato:Regular',_sans-serif] px-1.5 text-[12px] font-[Lato]">
                      {item.volumen_busquedas.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-['Lato:Regular',_sans-serif] px-1.5 text-[12px] font-[Lato]">
                      {item.num_hashtags}
                    </TableCell>
                    <TableCell className="text-right font-['Lato:Regular',_sans-serif] px-1.5 text-[12px] font-[Lato]">
                      <span className={item.crecimiento > 0 ? 'text-[#4AA83A]' : ''}>
                        +{item.crecimiento}%
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-['Lato:Regular',_sans-serif] px-1.5 text-[12px]">
                      {item.articulos_publicados}
                    </TableCell>
                    <TableCell className="text-center px-1.5">
                      <Badge className={`${getUrgenciaColorBadge(item.urgencia)} hover:${getUrgenciaColorBadge(item.urgencia)} min-w-[70px] inline-flex justify-center`}>
                        {item.urgencia}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Oportunidades Priorizadas */}
      <Card>
        <CardHeader>
          <CardTitle>
            {t('chart.topOpportunities')}
          </CardTitle>
          <CardDescription>
            {t('description.opportunitiesDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {oportunidadesPriorizadas.map((item, index) => (
              <div key={index} className="border rounded-lg p-3 space-y-2">
                <div className="flex items-start gap-2">
                  <Badge className={index < 3 ? "bg-[#016689] text-white hover:bg-[#016689] flex-shrink-0" : "bg-[#E4EAED] text-[#016689] hover:bg-[#E4EAED] flex-shrink-0"}>
                    #{index + 1}
                  </Badge>
                  <h4 className="text-[14px] leading-tight">{item.tema}</h4>
                </div>
                <div className="space-y-1.5">
                  <Progress value={item.gap} className="h-1.5" />
                  <div className="flex justify-between text-[12px]">
                    <span className="text-muted-foreground">{item.volumen_busquedas.toLocaleString()} búsquedas/mes</span>
                    <span className="text-[#CB050A]">{item.gap}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};