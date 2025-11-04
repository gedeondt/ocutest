import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { 
  Eye, 
  FileText, 
  Search, 
  Newspaper,
  ExternalLink,
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

// Unified Prescribers content (FACUA + Media)
const prescriptoresContent = [
  {
    tipo: "facua",
    fuente: "FACUA",
    titulo: "Cómo cancelar servicios de telecomunicaciones",
    fecha: "hace 2 días",
    engagement: { views: 15420, shares: 234 },
    tema: "Telecomunicaciones",
    gap_ocu: "Nuestro contenido desactualizado",
    relevancia: "alta"
  },
  {
    tipo: "medio",
    fuente: "Cinco Días",
    titulo: "Nueva ley de servicios digitales: qué cambia para el consumidor",
    fecha: "hace 1 día",
    tema: "Regulación",
    cobertura_ocu: "parcial",
    gap_ocu: "Crear análisis detallado para consumidores",
    relevancia: "alta"
  },
  {
    tipo: "facua",
    fuente: "FACUA",
    titulo: "Reclamaciones bancarias: nueva normativa 2024",
    fecha: "hace 1 día",
    engagement: { views: 8967, shares: 156 },
    tema: "Finanzas",
    gap_ocu: "No tenemos contenido similar",
    relevancia: "alta"
  },
  {
    tipo: "medio",
    fuente: "El Economista",
    titulo: "Comparativa de hipotecas variables vs fijas en 2024",
    fecha: "hace 3 días",
    tema: "Finanzas",
    cobertura_ocu: "no",
    gap_ocu: "OCU debería tener comparativa propia",
    relevancia: "media"
  },
  {
    tipo: "facua",
    fuente: "FACUA",
    titulo: "Black Friday: Cómo detectar ofertas falsas",
    fecha: "hace 3 días",
    engagement: { views: 23451, shares: 445 },
    tema: "E-commerce",
    gap_ocu: "Tenemos contenido pero menos detallado",
    relevancia: "media"
  },
  {
    tipo: "medio",
    fuente: "Expansión",
    titulo: "Los seguros de vida más rentables del mercado",
    fecha: "hace 5 días",
    tema: "Seguros",
    cobertura_ocu: "sí",
    gap_ocu: "Nuestro contenido está actualizado",
    relevancia: "alta"
  },
  {
    tipo: "facua",
    fuente: "FACUA",
    titulo: "Guía completa sobre garantías de productos electrónicos",
    fecha: "hace 4 días",
    engagement: { views: 12783, shares: 198 },
    tema: "Garantías",
    gap_ocu: "Actualizar nuestra guía de garantías",
    relevancia: "alta"
  }
];

// OCU Content needing review
const contenidoOCURevisar = [
  {
    titulo: "Guía para cambiar de operadora móvil",
    fechaPublicacion: "2022-03-15",
    mesesDesactualizado: 22,
    trafico: { views: 45678, position: 3 },
    prioridad: "alta",
    razon: "Nuevas regulaciones sobre portabilidad"
  },
  {
    titulo: "Cómo reclamar al banco por comisiones",
    fechaPublicacion: "2023-01-20",
    mesesDesactualizado: 12,
    trafico: { views: 23456, position: 7 },
    prioridad: "media",
    razon: "Nueva normativa europea"
  },
  {
    titulo: "Derechos en compras online",
    fechaPublicacion: "2023-06-10",
    mesesDesactualizado: 7,
    trafico: { views: 67890, position: 2 },
    prioridad: "baja",
    razon: "Actualizaciones menores necesarias"
  }
];

// SERPs Analysis
const serpsAnalysis = [
  {
    keyword: "cancelar suscripción movistar",
    volumen: "1.2K/mes",
    posicionOCU: "No aparece",
    competencia: [
      { dominio: "movistar.es", posicion: 1, tipo: "Oficial" },
      { dominio: "comparaiso.es", posicion: 2, tipo: "Comparador" },
      { dominio: "facua.org", posicion: 3, tipo: "Asociación" }
    ],
    tipoRespuesta: "Pasos oficiales + quejas de usuarios",
    oportunidad: "OCU podría ofrecer guía independiente"
  },
  {
    keyword: "reclamar seguro coche",
    volumen: "890/mes",
    posicionOCU: "Posición 8",
    competencia: [
      { dominio: "mapfre.es", posicion: 1, tipo: "Aseguradora" },
      { dominio: "kelisto.es", posicion: 2, tipo: "Comparador" },
      { dominio: "facua.org", posicion: 3, tipo: "Asociación" }
    ],
    tipoRespuesta: "Información general + formularios",
    oportunidad: "Mejorar contenido existente con casos prácticos"
  }
];

// Temas cubiertos con detalle
const temasCubiertos = [
  { 
    tema: 'Telecomunicaciones', 
    articulos: 45, 
    ultimaActualizacion: '2 días', 
    cobertura: 'alta',
    topicos: ['Portabilidad móvil', 'Tarifas fibra', 'Reclamaciones operadoras', '5G']
  },
  { 
    tema: 'Finanzas', 
    articulos: 38, 
    ultimaActualizacion: '1 día', 
    cobertura: 'alta',
    topicos: ['Hipotecas variables', 'Comisiones bancarias', 'Inversiones', 'Criptomonedas']
  },
  { 
    tema: 'E-commerce', 
    articulos: 32, 
    ultimaActualizacion: '3 días', 
    cobertura: 'media',
    topicos: ['Devoluciones', 'Black Friday', 'Marketplaces', 'Derechos consumidor']
  },
  { 
    tema: 'Seguros', 
    articulos: 29, 
    ultimaActualizacion: '5 días', 
    cobertura: 'alta',
    topicos: ['Seguros hogar', 'Seguros vida', 'Seguros coche', 'Reclamaciones']
  },
  { 
    tema: 'Garantías', 
    articulos: 24, 
    ultimaActualizacion: '4 días', 
    cobertura: 'media',
    topicos: ['Electrónica', 'Electrodomésticos', 'Garantía extendida', 'Devoluciones']
  },
  { 
    tema: 'Regulación', 
    articulos: 21, 
    ultimaActualizacion: '1 día', 
    cobertura: 'alta',
    topicos: ['Normativa UE', 'Leyes consumidor', 'Protección datos', 'Servicios digitales']
  },
  { 
    tema: 'Derechos del Consumidor', 
    articulos: 41, 
    ultimaActualizacion: '2 días', 
    cobertura: 'alta',
    topicos: ['Reclamaciones', 'Arbitraje', 'Quejas', 'Compensaciones']
  },
  { 
    tema: 'Electrodomésticos', 
    articulos: 27, 
    ultimaActualizacion: '6 días', 
    cobertura: 'media',
    topicos: ['Comparativas', 'Eficiencia energética', 'Reparaciones', 'OCU Compra Maestra']
  },
  { 
    tema: 'Hipotecas', 
    articulos: 19, 
    ultimaActualizacion: '3 días', 
    cobertura: 'alta',
    topicos: ['Tipos interés', 'Comparador', 'Subrogación', 'Euríbor']
  },
  { 
    tema: 'Automoción', 
    articulos: 23, 
    ultimaActualizacion: '7 días', 
    cobertura: 'media',
    topicos: ['Coches eléctricos', 'Seguros coche', 'ITV', 'Mantenimiento']
  }
];

const OfferCard = ({ 
  icon: Icon, 
  title, 
  description, 
  status,
  children 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  status: 'optimizado' | 'necesita_revision' | 'gap_critico';
  children: React.ReactNode;
}) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader className="pb-3">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

export const FuentesOferta = () => {
  const { t } = useLanguage();
  const [isTopicsExpanded, setIsTopicsExpanded] = useState(false);
  
  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Prescriptores Unificados - FACUA + Medios */}
        <OfferCard
          icon={Eye}
          title="Prescriptores y Medios Especializados"
          description="Contenidos de competencia, referentes y medios especializados: Artículos, comparativas y análisis del mercado"
          status="necesita_revision"
        >
          <div className="space-y-2">
            {prescriptoresContent.map((item, index) => (
              <div key={index} className="border rounded-lg p-5 space-y-4 min-h-[140px]">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#E4EAED', color: '#016689' }}>
                          {item.fuente}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#F0F0F0', color: '#6E6E6E' }}>
                          {item.tema}
                        </span>
                      </div>
                      <span className="text-[12px]" style={{ color: '#6E6E6E' }}>{item.fecha}</span>
                    </div>
                    <h4 className="text-[14px] mb-1" style={{ color: '#303030' }}>{item.titulo}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </OfferCard>

        {/* Columna derecha con Contenido OCU y SERPs apilados */}
        <div className="flex flex-col gap-6">
          {/* Contenido OCU para revisar */}
          <OfferCard
            icon={Clock}
            title={t('supply.ocuContent')}
            description={t('descriptions.ocuContent')}
            status="gap_critico"
          >
            <div className="space-y-2">
              {contenidoOCURevisar.map((item, index) => (
                <div key={index} className="border rounded-lg p-5 space-y-4 min-h-[140px]">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-[14px] mb-1" style={{ color: '#303030' }}>{item.titulo}</h4>
                      <div className="flex items-center gap-2 text-[12px]" style={{ color: '#6E6E6E' }}>
                        <Clock className="w-3 h-3" />
                        <span>{item.fechaPublicacion}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[12px]" style={{ color: '#6E6E6E' }}>
                    <span>Posición #{item.trafico.position} • {item.trafico.views.toLocaleString()} views</span>
                  </div>
                  <p className="text-[12px] p-2 rounded" style={{ backgroundColor: '#E4EAED', color: '#016689' }}>
                    {item.razon}
                  </p>
                </div>
              ))}
            </div>
          </OfferCard>

          {/* SERPs Analysis */}
          <OfferCard
            icon={Search}
            title={t('supply.serps')}
            description={t('descriptions.serps')}
            status="gap_critico"
          >
            <div className="space-y-2">
              {serpsAnalysis.map((item, index) => (
                <div key={index} className="border rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[14px]" style={{ color: '#303030' }}>{item.keyword}</h4>
                    <Badge variant="outline" className="text-xs">{item.volumen}</Badge>
                  </div>
                  <div className="text-[12px] space-y-0.5" style={{ color: '#6E6E6E' }}>
                    <p><strong style={{ color: 'inherit', filter: 'brightness(0.2)' }}>Posición OCU:</strong> 
                      <span className={item.posicionOCU === "No aparece" ? "text-[#CB050A]" : "text-[#4AA83A]"}>
                        {" " + item.posicionOCU}
                      </span>
                    </p>
                    <div className="space-y-0.5 px-4 py-2">
                      {item.competencia.slice(0, 3).map((comp, i) => (
                        <p key={i} className="text-[#6E6E6E] text-[14px]">#{comp.posicion} {comp.dominio} ({comp.tipo})</p>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 rounded text-[12px]" style={{ backgroundColor: '#E4EAED', color: '#6E6E6E' }}>
                    <strong>Oportunidad:</strong> {item.oportunidad}
                  </div>
                </div>
              ))}
            </div>
          </OfferCard>
        </div>
      </div>

      {/* Temas cubiertos - Card expandible */}
      <div 
        onClick={() => setIsTopicsExpanded(!isTopicsExpanded)}
        className={`bg-[#f7fcff] box-border content-stretch flex flex-col ${isTopicsExpanded ? 'h-auto pb-4' : 'h-[142px]'} rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] cursor-pointer`}
      >
        <div className="h-[142px] flex items-center justify-center">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-center justify-center not-italic text-[#016689] text-center text-nowrap whitespace-pre">
            <div className="flex items-center gap-2">
              <p className="font-['Lato:Regular',_sans-serif] leading-[32px] shrink-0 text-[30px] tracking-[0.0703px] font-[Lato]">{temasCubiertos.length}</p>
              {isTopicsExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            <p className="font-['Lato:SemiBold',_sans-serif] leading-[20px] shrink-0 text-[16px] tracking-[-0.1504px] font-[Lato]">{t('supply.coveredTopics')}</p>
          </div>
        </div>
        
        {isTopicsExpanded && (
          <div className="px-4 w-full">
            <div className="border-t border-[#016689]/20 mb-3"></div>
            <div className="grid grid-cols-2 gap-2">
              {temasCubiertos.map((tema, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-left">
                  <p className="font-['Lato:Regular',_sans-serif] text-[14px] text-[#016689] font-[Lato]">
                    {tema.tema}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
