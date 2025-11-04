import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { 
  TrendingUp, 
  MessageCircle, 
  FileText, 
  Search, 
  Star, 
  Radio, 
  Play, 
  ShoppingCart,
  AlertTriangle,
  ShoppingBag,
  BarChart3,
  Newspaper,
  Database,
  ArrowDown,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { trendsService } from "../services/trendsService";
import { tematicasService } from "../services/tematicasService";

// Google Trends Data - Using camelCase keys matching backend
const getTrendsData = () => [
  { fecha: '01/01', cancelSubscription: 100, claimInsurance: 65, productReturn: 80 },
  { fecha: '02/01', cancelSubscription: 120, claimInsurance: 75, productReturn: 85 },
  { fecha: '03/01', cancelSubscription: 85, claimInsurance: 70, productReturn: 90 },
  { fecha: '04/01', cancelSubscription: 150, claimInsurance: 85, productReturn: 95 },
  { fecha: '05/01', cancelSubscription: 180, claimInsurance: 95, productReturn: 110 },
  { fecha: '06/01', cancelSubscription: 165, claimInsurance: 88, productReturn: 105 },
  { fecha: '07/01', cancelSubscription: 200, claimInsurance: 105, productReturn: 120 }
];

// Redes Sociales - Meta
const getMetaData = (t: (key: string) => string) => [
  { hashtag: t('hashtags.consumerRights'), menciones: 3456, crecimiento: "+180%" },
  { hashtag: t('hashtags.bankClaim'), menciones: 1923, crecimiento: "+225%" },
  { hashtag: t('hashtags.tarifaMovil'), menciones: 2789, crecimiento: "+198%" },
  { hashtag: t('hashtags.devolucionCompra'), menciones: 2145, crecimiento: "+167%" }
];

// Redes Sociales - TikTok
const getTikTokData = (t: (key: string) => string) => [
  { hashtag: t('hashtags.scamAlert'), menciones: 5672, crecimiento: "+156%" },
  { hashtag: t('hashtags.phoneScam'), menciones: 2847, crecimiento: "+340%" },
  { hashtag: t('hashtags.contratoAbusivo'), menciones: 3912, crecimiento: "+243%" },
  { hashtag: t('hashtags.segurosBaratos'), menciones: 4356, crecimiento: "+189%" }
];

// Redes Sociales - X (dividido en categorías)
const getXData = (t: (key: string) => string) => ({
  hashtags: [
    { termino: t('hashtags.facturaLuz'), menciones: 4521, crecimiento: "+290%" },
    { termino: t('hashtags.vueltaEspana'), menciones: 3187, crecimiento: "+215%" }
  ],
  keywords: [
    { termino: t('keywords.x.precioLuz'), menciones: 2934, crecimiento: "+187%" },
    { termino: t('keywords.x.cancelarSuscripcion'), menciones: 2456, crecimiento: "+165%" }
  ],
  properNouns: [
    { termino: t('properNouns.ocu'), menciones: 1876, crecimiento: "+142%" },
    { termino: t('properNouns.rayoVallecano'), menciones: 1654, crecimiento: "+128%" },
    { termino: t('properNouns.iphone16'), menciones: 3421, crecimiento: "+256%" },
    { termino: t('properNouns.blackFriday'), menciones: 2987, crecimiento: "+312%" }
  ]
});

// OCU Internal Data
const getReclamacionesOCU = (t: (key: string) => string) => [
  { categoria: t('categories.telecommunications'), casos: 1247, tendencia: "up", cambio: "+15%" },
  { categoria: t('categories.bankingFinance'), casos: 987, tendencia: "up", cambio: "+8%" },
  { categoria: t('categories.insurance'), casos: 756, tendencia: "down", cambio: "-3%" },
  { categoria: t('categories.ecommerce'), casos: 1534, tendencia: "up", cambio: "+22%" }
];

// Búsquedas sin respuesta
const getBusquedasSinRespuesta = (t: (key: string) => string) => [
  { termino: t('searches.cancelMovistarFiber'), busquedas: 234, ultima: "2h" },
  { termino: t('searches.claimCarInsurance'), busquedas: 189, ultima: "1h" },
  { termino: t('searches.amazonUsedReturn'), busquedas: 167, ultima: "3h" },
  { termino: t('searches.changePhonePlan'), busquedas: 142, ultima: "4h" }
];

// Reviews sentiment
const sentimentoReviews = [
  { marca: "Movistar", sentiment: 2.1, reviews: 1247, trend: "down" },
  { marca: "Vodafone", sentiment: 2.8, reviews: 987, trend: "up" },
  { marca: "Amazon", sentiment: 4.2, reviews: 15634, trend: "stable" },
  { marca: "El Corte Inglés", sentiment: 3.7, reviews: 2341, trend: "up" }
];

// TikTok Viral Products
const getViralProducts = (t: (key: string) => string) => [
  { producto: t('products.stanleyCup'), menciones: 45000, problema: t('problems.leadLeak'), urgencia: "alta" },
  { producto: t('products.iphone15'), menciones: 23000, problema: t('problems.overheating'), urgencia: "alta" },
  { producto: t('products.teslaModelY'), menciones: 18000, problema: t('problems.softwareFault'), urgencia: "media" }
];

// Amazon Best Sellers
const getAmazonBestSellers = (t: (key: string) => string) => [
  { producto: t('products.roomba'), categoria: t('categories.home'), ranking: 1, comparativas_necesarias: "Sí" },
  { producto: t('products.airFryer'), categoria: t('categories.kitchen'), ranking: 2, comparativas_necesarias: "Sí" },
  { producto: t('products.emmaMattress'), categoria: t('categories.rest'), ranking: 3, comparativas_necesarias: "Sí" }
];

// Google Shopping Products
const googleShoppingProducts = [
  {
    nombre: "Lancôme Coffret Cuidado de la piel",
    precio: "178,60 €",
    precioAnterior: "188 €",
    vendedor: "Lancome es",
    rating: 5,
    numReviews: 21,
    fuente: "De Google",
    imagen: "https://images.unsplash.com/photo-1618478122572-6f943315c08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGNvc21ldGljcyUyMHByb2R1Y3R8ZW58MXx8fHwxNzYxNTYwMzU1fDA&ixlib=rb-4.1.0&q=80&w=400",
    tematica: "beauty"
  },
  {
    nombre: "Lancôme LANCOME Advanced Génifique",
    precio: "21,14 €",
    precioAnterior: null,
    vendedor: "Shein",
    ofertaEnvio: "+3,90 € de gast...",
    rating: 4.5,
    numReviews: "6k+",
    fuente: "De Google",
    imagen: "https://images.unsplash.com/photo-1699293679015-14bb8c66b34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzZXJ1bSUyMGJvdHRsZXxlbnwxfHx8fDE3NjE1NTk4NzZ8MA&ixlib=rb-4.1.0&q=80&w=400",
    tematica: "beauty"
  },
  {
    nombre: "Crema coreana arruga profunda",
    precio: "7,96 €",
    precioAnterior: null,
    vendedor: "Temu",
    ofertaEnvio: "Sin coste",
    rating: 0,
    numReviews: null,
    fuente: "De Shoparize",
    imagen: "https://images.unsplash.com/photo-1667242003558-e42942d2b911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBqYXJ8ZW58MXx8fHwxNzYxNTEyNjU5fDA&ixlib=rb-4.1.0&q=80&w=400",
    tematica: "beauty"
  },
  {
    nombre: "Paula's Choice Clinical Ceramide",
    precio: "71,00 €",
    precioAnterior: null,
    vendedor: "Paula's Choice",
    ofertaEnvio: "Sin coste",
    rating: 4.5,
    numReviews: "9k+",
    fuente: "De DEPT®",
    imagen: "https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTU2MDM4M3ww&ixlib=rb-4.1.0&q=80&w=400",
    tematica: "beauty"
  },
  {
    nombre: "iPhone 15 Pro Max 256GB",
    precio: "1.219,00 €",
    precioAnterior: "1.349,00 €",
    vendedor: "Apple Store",
    rating: 4.5,
    numReviews: "12k+",
    fuente: "De Google",
    imagen: "https://images.unsplash.com/photo-1678652197835-e2b1d9a5d6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBwcm8lMjBtYXh8ZW58MXx8fHwxNzYxNTYwNTExfDA&ixlib=rb-4.1.0&q=80&w=400",
    tematica: "technology"
  },
  {
    nombre: "Samsung Galaxy S24 Ultra",
    precio: "1.089,00 €",
    precioAnterior: null,
    vendedor: "Samsung",
    ofertaEnvio: "Sin coste",
    rating: 4.8,
    numReviews: "8.5k+",
    fuente: "De Google",
    imagen: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwZ2FsYXh5fGVufDF8fHx8MTc2MTU2MDU0MXww&ixlib=rb-4.1.0&q=80&w=400",
    tematica: "technology"
  },
  {
    nombre: "Robot Aspirador Roomba Combo j9+",
    precio: "899,00 €",
    precioAnterior: "999,00 €",
    vendedor: "iRobot",
    rating: 4.6,
    numReviews: "5.2k+",
    fuente: "De Google",
    imagen: "https://images.unsplash.com/photo-1558317374-067fb5f30001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHZhY3V1bXxlbnwxfHx8fDE3NjE1NjA1NzB8MA&ixlib=rb-4.1.0&q=80&w=400",
    tematica: "home"
  },
  {
    nombre: "Colchón Emma Original 150x200",
    precio: "539,00 €",
    precioAnterior: "799,00 €",
    vendedor: "Emma Sleep",
    ofertaEnvio: "Sin coste",
    rating: 4.7,
    numReviews: "15k+",
    fuente: "De Google",
    imagen: "https://images.unsplash.com/photo-1615799998603-7c6270a45196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzYxNTYwNjA1fDA&ixlib=rb-4.1.0&q=80&w=400",
    tematica: "home"
  }
];

// Temáticas Data
const getTematicasData = (t: (key: string) => string) => [
  { tema: t('themes.airlines'), busquedas: 245000, crecimiento: '+156%', color: '#016689' },
  { tema: t('themes.insurance'), busquedas: 189000, crecimiento: '+142%', color: '#016689' },
  { tema: t('themes.home'), busquedas: 167000, crecimiento: '+128%', color: '#016689' },
  { tema: t('themes.telecommunications'), busquedas: 298000, crecimiento: '+185%', color: '#016689' },
  { tema: t('themes.banking'), busquedas: 276000, crecimiento: '+173%', color: '#016689' },
  { tema: t('themes.energy'), busquedas: 134000, crecimiento: '+98%', color: '#016689' },
];

// Google Search Console Keywords
const getSearchConsoleKeywords = (t: (key: string) => string) => [
  { keyword: 'OCU', clics: 101878, impresiones: 186378 },
  { keyword: 'ocu inversiones', clics: 19198, impresiones: 24851 },
  { keyword: 'mutualidad', clics: 5544, impresiones: 25026 },
  { keyword: 'ocu reclamaciones', clics: 4294, impresiones: 8187 },
  { keyword: 'comparador productos', clics: 3876, impresiones: 15243 },
];

// Media News Articles
const getMediaArticles = (t: (key: string) => string) => [
  { titulo: t('news.article1'), medio: t('media.elPais'), fecha: '25 Oct 2025', categoria: t('categories.bankingFinance') },
  { titulo: t('news.article2'), medio: t('media.abc'), fecha: '24 Oct 2025', categoria: t('categories.telecommunications') },
  { titulo: t('news.article3'), medio: t('media.expansion'), fecha: '23 Oct 2025', categoria: t('categories.ecommerce') },
  { titulo: t('news.article4'), medio: t('media.cincodias'), fecha: '22 Oct 2025', categoria: t('categories.telecommunications') },
  { titulo: t('news.article5'), medio: t('media.elMundo'), fecha: '21 Oct 2025', categoria: t('categories.bankingFinance') },
];

// Internal Source - OCU International Content
const getInternalSource = (t: (key: string) => string) => [
  { titulo: t('internal.article1'), pais: t('internal.country.belgium'), fecha: '20 Oct 2025', sesiones: 15240, tasa: '4.2%' },
  { titulo: t('internal.article2'), pais: t('internal.country.portugal'), fecha: '18 Oct 2025', sesiones: 12890, tasa: '3.8%' },
  { titulo: t('internal.article3'), pais: t('internal.country.italy'), fecha: '15 Oct 2025', sesiones: 18650, tasa: '5.1%' },
  { titulo: t('internal.article4'), pais: t('internal.country.france'), fecha: '12 Oct 2025', sesiones: 21430, tasa: '4.7%' },
];

const DemandCard = ({ 
  icon: Icon, 
  title, 
  description, 
  urgency,
  badge,
  children 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  urgency: 'alta' | 'media' | 'baja';
  badge?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {badge && <div className="ml-4">{badge}</div>}
      </div>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

export const FuentesDemanda = () => {
  const { t, language } = useLanguage();
  const [isHighPriorityExpanded, setIsHighPriorityExpanded] = useState(false);
  const [isEmergingTrendsExpanded, setIsEmergingTrendsExpanded] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string>('beauty');
  
  // API data states
  const [trendsData, setTrendsData] = useState<any[]>(getTrendsData());
  const [keywordPlannerData, setKeywordPlannerData] = useState<any[]>(getTrendsData());
  const [tematicasData, setTematicasData] = useState<any[]>(getTematicasData(t));
  const [isLoading, setIsLoading] = useState(true);
  
  // Load data from API
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [googleTrendsData, keywordData, tematicasDataFromApi] = await Promise.all([
          trendsService.getGoogleTrends(language),
          trendsService.getKeywordPlanner(language),
          tematicasService.getTematicas(language)
        ]);
        
        if (googleTrendsData.length > 0) setTrendsData(googleTrendsData);
        if (keywordData.length > 0) setKeywordPlannerData(keywordData);
        if (tematicasDataFromApi.length > 0) setTematicasData(tematicasDataFromApi);
      } catch (error) {
        console.error('Error loading data from API:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [language]);
  
  // Get other translated data (not yet connected to API)
  const metaData = getMetaData(t);
  const tiktokData = getTikTokData(t);
  const xData = getXData(t);
  const reclamacionesOCU = getReclamacionesOCU(t);
  const busquedasSinRespuesta = getBusquedasSinRespuesta(t);
  const viralProducts = getViralProducts(t);
  const amazonBestSellers = getAmazonBestSellers(t);
  const searchConsoleKeywords = getSearchConsoleKeywords(t);
  const mediaArticles = getMediaArticles(t);
  const internalSource = getInternalSource(t);
  
  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Google Trends */}
        <DemandCard
          icon={TrendingUp}
          title={t('demand.googleTrends')}
          description={t('descriptions.googleTrends')}
          urgency="alta"
          badge={<Badge className="bg-[#016689] text-white hover:bg-[#016689]">{t('badges.peak')}</Badge>}
        >
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Area type="monotone" dataKey="cancelSubscription" stackId="1" stroke="#016689" fill="#016689" fillOpacity={0.6} name={t('trends.cancelSubscription')} />
                <Area type="monotone" dataKey="claimInsurance" stackId="1" stroke="#0B4C63" fill="#0B4C63" fillOpacity={0.6} name={t('trends.claimInsurance')} />
                <Area type="monotone" dataKey="productReturn" stackId="1" stroke="#AEE2FB" fill="#AEE2FB" fillOpacity={0.6} name={t('trends.productReturn')} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </DemandCard>

        {/* Keyword Planner */}
        <DemandCard
          icon={TrendingUp}
          title={t('demand.keywordPlanner')}
          description={t('descriptions.keywordPlanner')}
          urgency="alta"
          badge={<Badge className="bg-[#016689] text-white hover:bg-[#016689]">{t('badges.peak')}</Badge>}
        >
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={keywordPlannerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Area type="monotone" dataKey="cancelSubscription" name={t('trends.cancelSubscription')} stackId="1" stroke="#016689" fill="#016689" fillOpacity={0.6} />
                <Area type="monotone" dataKey="claimInsurance" name={t('trends.claimInsurance')} stackId="1" stroke="#0B4C63" fill="#0B4C63" fillOpacity={0.6} />
                <Area type="monotone" dataKey="productReturn" name={t('trends.productReturn')} stackId="1" stroke="#AEE2FB" fill="#AEE2FB" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </DemandCard>
      </div>

      {/* Temáticas en crecimiento - Full width */}
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle>{t('themes.title')}</CardTitle>
              <CardDescription>{t('themes.description')}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tematicasData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm" style={{ color: '#303030' }}>{item.tema}</h4>
                  <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: item.color, color: 'white' }}>
                    {item.crecimiento}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <p style={{ color: item.color, fontSize: '22px' }}>{(item.busquedas / 1000).toFixed(0)}k</p>
                    <p style={{ color: '#6E6E6E', fontSize: '10px' }}>{t('themes.searches')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all" 
                        style={{ 
                          width: `${(parseInt(item.crecimiento) / 185 * 100)}%`,
                          backgroundColor: item.color 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Meta */}
        <DemandCard
          icon={MessageCircle}
          title={t('social.meta')}
          description={t('descriptions.socialMedia')}
          urgency="alta"
        >
          <div className="space-y-2">
            {metaData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  {/* Primera línea: hashtag y badge de crecimiento */}
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-sm" style={{ color: '#303030' }}>{item.hashtag}</h4>
                    <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#0b4c63', color: 'white' }}>
                      {item.crecimiento}
                    </span>
                  </div>
                  
                  {/* Segunda línea: menciones */}
                  <p className="text-xs" style={{ color: '#6E6E6E' }}>
                    {item.menciones.toLocaleString()} {t('labels.mentions')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </DemandCard>

        {/* TikTok */}
        <DemandCard
          icon={MessageCircle}
          title={t('social.tiktok')}
          description={t('descriptions.socialMedia')}
          urgency="media"
        >
          <div className="space-y-2">
            {tiktokData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  {/* Primera línea: hashtag y badge de crecimiento */}
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-sm" style={{ color: '#303030' }}>{item.hashtag}</h4>
                    <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#016689', color: 'white' }}>
                      {item.crecimiento}
                    </span>
                  </div>
                  
                  {/* Segunda línea: menciones */}
                  <p className="text-xs" style={{ color: '#6E6E6E' }}>
                    {item.menciones.toLocaleString()} {t('labels.mentions')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </DemandCard>

        {/* X (Twitter) con categorías */}
        <DemandCard
          icon={MessageCircle}
          title={t('social.x')}
          description={t('descriptions.socialMedia')}
          urgency="alta"
        >
          <div className="space-y-4">
            {/* Hashtags */}
            <div>
              <h5 className="text-xs mb-2" style={{ color: '#6E6E6E' }}>{t('social.categories.hashtags')}</h5>
              <div className="grid grid-cols-2 gap-2">
                {xData.hashtags.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-2 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm truncate" style={{ color: '#303030' }}>{item.termino}</h4>
                        <span className="text-xs px-2 py-0.5 rounded whitespace-nowrap" style={{ backgroundColor: '#0b4c63', color: 'white' }}>
                          {item.crecimiento}
                        </span>
                      </div>
                      <p className="text-xs" style={{ color: '#6E6E6E' }}>
                        {item.menciones.toLocaleString()} {t('labels.mentions')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div>
              <h5 className="text-xs mb-2" style={{ color: '#6E6E6E' }}>{t('social.categories.keywords')}</h5>
              <div className="grid grid-cols-2 gap-2">
                {xData.keywords.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-2 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm truncate" style={{ color: '#303030' }}>{item.termino}</h4>
                        <span className="text-xs px-2 py-0.5 rounded whitespace-nowrap" style={{ backgroundColor: '#0b4c63', color: 'white' }}>
                          {item.crecimiento}
                        </span>
                      </div>
                      <p className="text-xs" style={{ color: '#6E6E6E' }}>
                        {item.menciones.toLocaleString()} {t('labels.mentions')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nombres propios / eventos */}
            <div>
              <h5 className="text-xs mb-2" style={{ color: '#6E6E6E' }}>{t('social.categories.properNouns')}</h5>
              <div className="grid grid-cols-2 gap-2">
                {xData.properNouns.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-2 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm truncate" style={{ color: '#303030' }}>{item.termino}</h4>
                        <span className="text-xs px-2 py-0.5 rounded whitespace-nowrap" style={{ backgroundColor: '#0b4c63', color: 'white' }}>
                          {item.crecimiento}
                        </span>
                      </div>
                      <p className="text-xs" style={{ color: '#6E6E6E' }}>
                        {item.menciones.toLocaleString()} {t('labels.mentions')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DemandCard>

        {/* Histórico OCU */}
        <DemandCard
          icon={FileText}
          title={t('demand.surveys')}
          description={t('descriptions.surveys')}
          urgency="media"
        >
          <div className="space-y-2">
            {reclamacionesOCU.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-[14px] leading-[20px] tracking-[-0.1504px] text-[#303030]">{item.categoria}</p>
                    <p className="text-[12px] leading-[16px] text-[#6E6E6E]">{item.casos} {t('labels.thisMonth')}</p>
                  </div>
                  <div className={`${item.tendencia === 'up' ? 'bg-[#0b4c63]' : 'bg-[#e4eaed]'} h-[22px] rounded-[2px] px-[8px] py-[2px] flex items-center justify-center min-w-[50px]`}>
                    <p className={`text-[12px] leading-[16px] ${item.tendencia === 'up' ? 'text-white' : 'text-[#303030]'}`}>
                      {item.cambio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DemandCard>

        {/* Búsquedas sin respuesta */}
        <DemandCard
          icon={Search}
          title={t('demand.internalSearches')}
          description={t('descriptions.internalSearches')}
          urgency="alta"
        >
          <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
            {busquedasSinRespuesta.map((item, index) => (
              <div key={index} className={`content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full ${index === busquedasSinRespuesta.length - 1 ? 'h-[46px]' : 'h-[55px]'}`}>
                <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full">
                  <div className="h-[20px] relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative">
                      <p className="leading-[20px] not-italic text-[#303030] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">{item.termino}</p>
                    </div>
                  </div>
                  <div className="h-[22px] relative rounded-[2px] shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
                      <p className="leading-[16px] not-italic relative shrink-0 text-[12px] text-[dimgrey] text-nowrap whitespace-pre">{item.busquedas}</p>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                </div>
                <div className="h-[16px] relative shrink-0 w-full">
                  <p className="leading-[16px] not-italic text-[#6E6E6E] text-[12px]">{t('labels.lastSearch')} {item.ultima}</p>
                </div>
                {index < busquedasSinRespuesta.length - 1 && (
                  <div className="h-px relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(223,223,223,0.5)] border-solid inset-0 pointer-events-none" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </DemandCard>

        {/* Reviews Sentiment */}
        <DemandCard
          icon={Star}
          title={t('demand.reviews')}
          description={t('descriptions.reviews')}
          urgency="media"
        >
          <div className="space-y-2">
            {sentimentoReviews.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h4 className="text-sm" style={{ color: '#303030' }}>{item.marca}</h4>
                    <p className="text-xs" style={{ color: '#6E6E6E' }}>
                      {item.reviews.toLocaleString()} {t('labels.reviews')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm" style={{ color: '#303030' }}>{item.sentiment}/5</p>
                    <div className={`w-2 h-2 rounded-full ${
                      item.trend === 'up' ? 'bg-[#0b4c63]' :
                      item.trend === 'down' ? 'bg-[#CB050A]' : 'bg-[#6E6E6E]'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DemandCard>
        {/* TikTok Creative Center */}
        <DemandCard
          icon={Play}
          title={t('demand.tiktok')}
          description={t('descriptions.tiktok')}
          urgency="alta"
        >
          <div className="content-start flex flex-wrap gap-2 items-start justify-between relative shrink-0 w-full">
            {viralProducts.map((item, index) => (
              <div key={index} className="bg-white box-border content-stretch flex h-[101px] items-center justify-between p-[16px] relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 flex-1">
                  <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-[#303030] tracking-[-0.1504px] w-full">
                    <p className="leading-[20px]">{item.producto}</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-[#6E6E6E] text-[12px] w-full">
                    <p className="leading-[16px]">{item.problema}</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-[#0b4c63] text-[12px] w-full">
                    <p className="leading-[16px]">{item.menciones.toLocaleString()} menciones</p>
                  </div>
                </div>
                <div className={`${item.urgencia === 'alta' ? 'bg-[#004259]' : item.urgencia === 'media' ? 'bg-[#016689]' : 'bg-[#e4eaed]'} box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] rounded-[2px] min-w-[50px] ml-[8px]`}>
                  <p className={`leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre ${item.urgencia === 'baja' ? 'text-[#016689]' : 'text-white'}`}>
                    {item.urgencia === 'alta' ? 'Alta' : item.urgencia === 'media' ? 'Media' : 'Baja'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </DemandCard>

        {/* Amazon Best Sellers */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>{t('demand.amazon')}</CardTitle>
              <div className="bg-[#f46506] h-[22px] rounded-[2px]">
                <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
                  <p className="leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Comparativa necesaria</p>
                </div>
              </div>
            </div>
            <CardDescription>Productos de consumo masivo que necesitan análisis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {amazonBestSellers.map((item, index) => (
                <div key={index} className="bg-white h-[101px] relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex h-[101px] items-center justify-between p-[16px] relative w-full">
                      <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
                        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] text-nowrap">
                          <p className="leading-[normal] whitespace-pre">#{item.ranking}</p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0">
                          <div className="flex flex-col justify-center relative shrink-0 text-[#303030] w-full">
                            <p className="leading-[normal] text-[14px]">{item.producto}</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 text-[#6E6E6E] w-full">
                            <p className="leading-[normal] text-[12px]">{item.categoria}</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                        <div className={`[grid-area:1_/_1] ${item.ranking === 3 ? 'bg-[#016689]' : 'bg-[#e4eaed]'} h-[13.586px] ml-[35.821px] mt-[39.656px] rounded-[4px] w-[12.537px]`} />
                        <div className={`[grid-area:1_/_1] ${item.ranking === 2 ? 'bg-[#016689]' : 'bg-[#e4eaed]'} h-[31.578px] ml-[17.911px] mt-[21.664px] rounded-[4px] w-[12.537px]`} />
                        <div className={`[grid-area:1_/_1] ${item.ranking === 1 ? 'bg-[#016689]' : 'bg-[#e4eaed]'} h-[53.242px] ml-0 mt-0 rounded-[4px] w-[12.537px]`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Google Shopping */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle>{t('demand.googleShopping')}</CardTitle>
                <CardDescription>{t('descriptions.googleShopping')}</CardDescription>
              </div>
              <div className="w-48">
                <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('themes.all')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('themes.all')}</SelectItem>
                    <SelectItem value="beauty">{t('themes.beauty')}</SelectItem>
                    <SelectItem value="technology">{t('themes.technology')}</SelectItem>
                    <SelectItem value="home">{t('themes.home')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {googleShoppingProducts
                .filter(producto => selectedTheme === 'all' || producto.tematica === selectedTheme)
                .map((producto, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 relative">
                  <ImageWithFallback 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 space-y-1">
                  <h4 className="text-xs line-clamp-2 min-h-[2rem]" style={{ color: '#303030' }}>{producto.nombre}</h4>
                  <div className="flex items-baseline gap-1">
                    <p className="text-sm" style={{ color: '#303030' }}>{producto.precio}</p>
                    {producto.precioAnterior && (
                      <p className="text-[10px] line-through text-gray-400">{producto.precioAnterior}</p>
                    )}
                  </div>
                  <p className="text-[10px] text-gray-600">{producto.vendedor}</p>
                  {producto.ofertaEnvio && (
                    <p className="text-[10px] text-gray-500">{producto.ofertaEnvio}</p>
                  )}
                  {producto.rating > 0 && (
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-2.5 h-2.5"
                            fill={i < Math.floor(producto.rating) ? '#FFA500' : 'none'}
                            stroke={i < Math.floor(producto.rating) ? '#FFA500' : '#D1D5DB'}
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-500">({producto.numReviews})</span>
                    </div>
                  )}
                    <p className="text-[10px]" style={{ color: '#016689' }}>{producto.fuente}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Google Search Console */}
        <DemandCard
          icon={BarChart3}
          title={t('demand.searchConsole')}
          description={t('descriptions.searchConsole')}
          urgency="alta"
        >
          <div className="bg-white overflow-hidden">
            {/* Header de la tabla */}
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-3 border-b border-gray-200">
              <div className="text-xs text-gray-500">Consultas principales</div>
              <div className="text-xs text-gray-500 flex items-center gap-1 justify-end w-24">
                <ArrowDown className="w-3 h-3" />
                Clics
              </div>
              <div className="text-xs text-gray-500 text-right w-24">Impresiones</div>
            </div>
            
            {/* Filas de datos */}
            {searchConsoleKeywords.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="text-sm" style={{ color: '#303030' }}>{item.keyword}</div>
                <div className="text-sm text-right w-24" style={{ color: '#F46506' }}>
                  {item.clics.toLocaleString('es-ES')}
                </div>
                <div className="text-sm text-right w-24" style={{ color: '#016689' }}>
                  {item.impresiones.toLocaleString('es-ES')}
                </div>
              </div>
            ))}
          </div>
        </DemandCard>

        {/* Medios y Periódicos */}
        <DemandCard
          icon={Newspaper}
          title={t('demand.mediaNews')}
          description={t('descriptions.mediaNews')}
          urgency="media"
        >
          <div className="space-y-2">
            {mediaArticles.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  {/* Primera línea: etiquetas y fecha */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#E4EAED', color: '#016689' }}>
                        {item.medio}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#F0F0F0', color: '#6E6E6E' }}>
                        {item.categoria}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 shrink-0">{item.fecha}</span>
                  </div>
                  
                  {/* Segunda línea: título */}
                  <h4 className="text-sm" style={{ color: '#303030' }}>{item.titulo}</h4>
                </div>
              </div>
            ))}
          </div>
        </DemandCard>

        {/* Fuente Interna */}
        <DemandCard
          icon={Database}
          title={t('demand.internalSource')}
          description={t('descriptions.internalSource')}
          urgency="baja"
        >
          <div className="space-y-2">
            {internalSource.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  {/* Primera línea: país y fecha */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#E4EAED', color: '#0B4C63' }}>
                      {item.pais}
                    </span>
                    <span className="text-xs text-gray-500 shrink-0">{item.fecha}</span>
                  </div>
                  
                  {/* Segunda línea: título */}
                  <h4 className="text-sm" style={{ color: '#303030' }}>{item.titulo}</h4>
                  
                  {/* Tercera línea: sesiones e interacción como subtítulo */}
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-gray-500">
                      Sesiones: <span style={{ color: '#303030' }}>{item.sesiones.toLocaleString()}</span>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">
                      Interacción: <span style={{ color: '#016689' }}>{item.tasa}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DemandCard>
      </div>

      <div className="content-stretch grid grid-cols-1 md:grid-cols-2 gap-[16px] items-start">
          {/* Card 1 - Alertas alta prioridad */}
          <div 
            onClick={() => setIsHighPriorityExpanded(!isHighPriorityExpanded)}
            className={`bg-[rgba(203,5,10,0.1)] box-border content-stretch flex flex-col ${isHighPriorityExpanded ? 'h-auto pb-4' : 'h-[142px]'} rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] cursor-pointer`}
          >
            <div className="h-[142px] flex items-center justify-center">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-center justify-center not-italic text-[#cb050a] text-center text-nowrap whitespace-pre">
                <div className="flex items-center gap-2">
                  <p className="font-['Lato:Regular',_sans-serif] leading-[32px] shrink-0 text-[30px] tracking-[0.0703px] font-[Lato]">14</p>
                  {isHighPriorityExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
                <p className="font-['Lato:SemiBold',_sans-serif] leading-[20px] shrink-0 text-[16px] tracking-[-0.1504px] font-[Lato]">{t('stats.highPriorityAlerts')}</p>
              </div>
            </div>
            
            {isHighPriorityExpanded && (
              <div className="px-4 w-full space-y-2">
                <div className="border-t border-[#cb050a]/20 mb-3"></div>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="bg-white/50 rounded-lg p-3 text-left">
                    <p className="font-['Lato:Regular',_sans-serif] text-[14px] text-[#cb050a] font-[Lato]">
                      {t(`topics.highPriority.${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card 2 - Tendencias emergentes */}
          <div 
            onClick={() => setIsEmergingTrendsExpanded(!isEmergingTrendsExpanded)}
            className={`bg-[rgba(244,101,6,0.1)] box-border content-stretch flex flex-col ${isEmergingTrendsExpanded ? 'h-auto pb-4' : 'h-[142px]'} rounded-[14px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] cursor-pointer`}
          >
            <div className="h-[142px] flex items-center justify-center">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-center justify-center not-italic text-[#f46506] text-center text-nowrap whitespace-pre">
                <div className="flex items-center gap-2">
                  <p className="font-['Lato:Regular',_sans-serif] leading-[32px] shrink-0 text-[30px] tracking-[0.0703px] font-[Lato]">8</p>
                  {isEmergingTrendsExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
                <p className="font-['Lato:SemiBold',_sans-serif] leading-[20px] shrink-0 text-[16px] tracking-[-0.1504px] font-[Lato]">{t('stats.emergingTrends')}</p>
              </div>
            </div>
            
            {isEmergingTrendsExpanded && (
              <div className="px-4 w-full space-y-2">
                <div className="border-t border-[#f46506]/20 mb-3"></div>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="bg-white/50 rounded-lg p-3 text-left">
                    <p className="font-['Lato:Regular',_sans-serif] text-[14px] text-[#f46506] font-[Lato]">
                      {t(`topics.emergingTrends.${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

      </div>
    </section>
  );
};