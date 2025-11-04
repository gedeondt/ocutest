import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Header
  'dashboard.title': {
    es: 'Dashboard OCU - Análisis de Contenido',
    en: 'OCU Dashboard - Content Analysis'
  },
  'dashboard.subtitle': {
    es: 'Mapeo integral de demanda vs oferta para identificar oportunidades de contenido',
    en: 'Comprehensive demand vs supply mapping to identify content opportunities'
  },
  
  // Language selector
  'language.spanish': {
    es: 'Español',
    en: 'Spanish'
  },
  'language.english': {
    es: 'Inglés',
    en: 'English'
  },
  
  // Fuentes Demanda
  'demand.title': {
    es: 'Fuentes de Demanda',
    en: 'Demand Sources'
  },
  'demand.subtitle': {
    es: 'Análisis integral de qué información buscan los consumidores',
    en: 'Comprehensive analysis of what information consumers are looking for'
  },
  'demand.googleTrends': {
    es: 'Google Trends',
    en: 'Google Trends'
  },
  'demand.keywordPlanner': {
    es: 'Keyword Planner',
    en: 'Keyword Planner'
  },
  'demand.socialMedia': {
    es: 'Redes Sociales',
    en: 'Social Media'
  },
  'demand.surveys': {
    es: 'Encuestas/Reclamaciones OCU',
    en: 'OCU Surveys/Claims'
  },
  'demand.internalSearches': {
    es: 'Búsquedas internas sin respuesta',
    en: 'Unanswered internal searches'
  },
  'demand.reviews': {
    es: 'Google Reviews/Trustpilot',
    en: 'Google Reviews/Trustpilot'
  },
  'demand.brandwatch': {
    es: 'Brandwatch',
    en: 'Brandwatch'
  },
  'demand.tiktok': {
    es: 'TikTok Creative Center',
    en: 'TikTok Creative Center'
  },
  'demand.amazon': {
    es: 'Amazon Best Sellers',
    en: 'Amazon Best Sellers'
  },
  'demand.googleShopping': {
    es: 'Google Shopping',
    en: 'Google Shopping'
  },
  'demand.searchConsole': {
    es: 'Google Search Console',
    en: 'Google Search Console'
  },
  'demand.mediaNews': {
    es: 'Contenido de periódicos y medios especializados',
    en: 'Newspaper and specialized media content'
  },
  'demand.internalSource': {
    es: 'Fuente interna',
    en: 'Internal Source'
  },
  
  // Fuentes Oferta
  'supply.title': {
    es: 'Fuentes de Oferta',
    en: 'Supply Sources'
  },
  'supply.subtitle': {
    es: 'Análisis de qué contenido ya existe en el mercado',
    en: 'Analysis of what content already exists in the market'
  },
  'supply.prescribers': {
    es: 'Prescriptores (FACUA)',
    en: 'Prescribers (FACUA)'
  },
  'supply.ocuContent': {
    es: 'Contenido OCU para revisar',
    en: 'OCU Content to review'
  },
  'supply.serps': {
    es: 'SERPs',
    en: 'SERPs'
  },
  'supply.media': {
    es: 'Medios especializados',
    en: 'Specialized media'
  },
  
  // Mapa Cobertura
  'coverage.title': {
    es: 'Mapa de Cobertura',
    en: 'Coverage Map'
  },
  'coverage.subtitle': {
    es: 'Comparación demanda vs oferta para identificar brechas y oportunidades',
    en: 'Demand vs supply comparison to identify gaps and opportunities'
  },
  'coverage.demand': {
    es: 'Demanda',
    en: 'Demand'
  },
  'coverage.supply': {
    es: 'Oferta',
    en: 'Supply'
  },
  'coverage.gap': {
    es: 'Brecha',
    en: 'Gap'
  },
  'coverage.priority': {
    es: 'Prioridad',
    en: 'Priority'
  },
  'coverage.high': {
    es: 'Alta',
    en: 'High'
  },
  'coverage.medium': {
    es: 'Media',
    en: 'Medium'
  },
  'coverage.low': {
    es: 'Baja',
    en: 'Low'
  },
  
  // Métricas generales
  'metrics.engagement': {
    es: 'Engagement',
    en: 'Engagement'
  },
  'metrics.trend': {
    es: 'Tendencia',
    en: 'Trend'
  },
  'metrics.volume': {
    es: 'Volumen',
    en: 'Volume'
  },
  'metrics.growth': {
    es: 'Crecimiento',
    en: 'Growth'
  },
  'metrics.mentions': {
    es: 'Menciones',
    en: 'Mentions'
  },
  'metrics.queries': {
    es: 'Consultas',
    en: 'Queries'
  },
  'metrics.searches': {
    es: 'Búsquedas',
    en: 'Searches'
  },
  'metrics.articles': {
    es: 'Artículos',
    en: 'Articles'
  },
  
  // Estados y acciones
  'status.active': {
    es: 'Activo',
    en: 'Active'
  },
  'status.monitoring': {
    es: 'Monitoreando',
    en: 'Monitoring'
  },
  'status.analyzing': {
    es: 'Analizando',
    en: 'Analyzing'
  },
  'actions.viewDetails': {
    es: 'Ver detalles',
    en: 'View details'
  },
  'actions.configure': {
    es: 'Configurar',
    en: 'Configure'
  },
  'actions.refresh': {
    es: 'Actualizar',
    en: 'Refresh'
  },
  'actions.planContent': {
    es: 'Planificar contenido',
    en: 'Plan content'
  },
  'actions.analyzeContent': {
    es: 'Analizar contenido',
    en: 'Analyze content'
  },
  'actions.scheduleUpdate': {
    es: 'Programar actualización',
    en: 'Schedule update'
  },
  'actions.connectBrandwatch': {
    es: 'Conectar Brandwatch',
    en: 'Connect Brandwatch'
  },
  
  // Períodos de tiempo
  'time.lastWeek': {
    es: 'Última semana',
    en: 'Last week'
  },
  'time.lastMonth': {
    es: 'Último mes',
    en: 'Last month'
  },
  
  // Keywords
  'keywords.reclamacion': {
    es: 'Reclamación',
    en: 'Complaint'
  },
  'keywords.comparadores': {
    es: 'Comparadores',
    en: 'Comparators'
  },
  'keywords.mejorProducto': {
    es: 'Mejor producto calidad-precio',
    en: 'Best value for money product'
  },
  'keywords.comoCancelar': {
    es: 'Cómo cancelar suscripción',
    en: 'How to cancel subscription'
  },
  'keywords.analisis': {
    es: 'Análisis producto',
    en: 'Product analysis'
  },
  'keywords.derechos': {
    es: 'Derechos del consumidor',
    en: 'Consumer rights'
  },
  'keywords.cat.claims': {
    es: 'Reclamaciones',
    en: 'Claims'
  },
  'keywords.cat.comparatives': {
    es: 'Comparativas',
    en: 'Comparatives'
  },
  'keywords.cat.howto': {
    es: 'Tutoriales',
    en: 'How-to'
  },
  'keywords.cat.reviews': {
    es: 'Análisis',
    en: 'Reviews'
  },
  'keywords.cat.rights': {
    es: 'Derechos',
    en: 'Rights'
  },
  'time.last3Months': {
    es: 'Últimos 3 meses',
    en: 'Last 3 months'
  },
  'time.realTime': {
    es: 'Tiempo real',
    en: 'Real time'
  },
  
  // Categorías de contenido
  'categories.automotive': {
    es: 'Automoción',
    en: 'Automotive'
  },
  'categories.technology': {
    es: 'Tecnología',
    en: 'Technology'
  },
  'categories.finance': {
    es: 'Finanzas',
    en: 'Finance'
  },
  'categories.health': {
    es: 'Salud',
    en: 'Health'
  },
  'categories.home': {
    es: 'Hogar',
    en: 'Home'
  },
  'categories.food': {
    es: 'Alimentación',
    en: 'Food'
  },
  
  // Elementos específicos de gráficos y análisis
  'chart.demandVsSupply': {
    es: 'Matriz Demanda vs Oferta',
    en: 'Demand vs Supply Matrix'
  },
  'chart.topOpportunities': {
    es: 'Top Oportunidades',
    en: 'Top Opportunities'
  },
  'chart.gapAnalysis': {
    es: 'Análisis de Gaps por Tema',
    en: 'Gap Analysis by Topic'
  },
  'chart.demandSummary': {
    es: 'Resumen de Demanda',
    en: 'Demand Summary'
  },
  'chart.supplyStatus': {
    es: 'Estado de la Oferta',
    en: 'Supply Status'
  },
  
  // Textos descriptivos
  'description.matrixDescription': {
    es: 'Posicionamiento de temas por nivel de demanda y cobertura actual',
    en: 'Topic positioning by demand level and current coverage'
  },
  'description.opportunitiesDescription': {
    es: 'Priorizadas por impacto y volumen',
    en: 'Prioritized by impact and volume'
  },
  'description.gapDescription': {
    es: 'Visualización de brechas de contenido (valores positivos = oportunidad, negativos = sobrecarga)',
    en: 'Content gap visualization (positive values = opportunity, negative = overload)'
  },
  
  // Urgencia y prioridad
  'urgency.critical': {
    es: 'Crítica',
    en: 'Critical'
  },
  'urgency.high': {
    es: 'Alta',
    en: 'High'
  },
  'urgency.medium': {
    es: 'Media',
    en: 'Medium'
  },
  'urgency.low': {
    es: 'Baja',
    en: 'Low'
  },
  
  // Estadísticas
  'stats.highPriorityAlerts': {
    es: 'Alertas de alta prioridad',
    en: 'High priority alerts'
  },
  'stats.emergingTrends': {
    es: 'Tendencias emergentes',
    en: 'Emerging trends'
  },
  'stats.unansweredSearches': {
    es: 'Búsquedas sin respuesta',
    en: 'Unanswered searches'
  },
  'stats.updatedContent': {
    es: 'Contenido actualizado',
    en: 'Updated content'
  },
  'stats.needsReview': {
    es: 'Necesita revisión',
    en: 'Needs review'
  },
  'stats.criticalGaps': {
    es: 'Gaps críticos',
    en: 'Critical gaps'
  },
  'stats.identifiedOpportunities': {
    es: 'Oportunidades identificadas',
    en: 'Identified opportunities'
  },
  'stats.wellCovered': {
    es: 'Bien cubiertos',
    en: 'Well covered'
  },
  'stats.averageAccuracy': {
    es: 'Precisión promedio',
    en: 'Average accuracy'
  },
  
  // Temas de alta prioridad
  'topics.highPriority.1': {
    es: 'Reclamaciones telefonía móvil',
    en: 'Mobile phone complaints'
  },
  'topics.highPriority.2': {
    es: 'Fraude servicios bancarios online',
    en: 'Online banking fraud'
  },
  'topics.highPriority.3': {
    es: 'Devoluciones marketplace',
    en: 'Marketplace returns'
  },
  'topics.highPriority.4': {
    es: 'Cancelación suscripciones',
    en: 'Subscription cancellations'
  },
  'topics.highPriority.5': {
    es: 'Reclamación seguros hogar',
    en: 'Home insurance claims'
  },
  
  // Temas de tendencias emergentes
  'topics.emergingTrends.1': {
    es: 'Productos anti-edad virales TikTok',
    en: 'Anti-aging viral TikTok products'
  },
  'topics.emergingTrends.2': {
    es: 'Energía solar doméstica',
    en: 'Home solar energy'
  },
  'topics.emergingTrends.3': {
    es: 'Estafas llamadas falsas',
    en: 'Fake call scams'
  },
  'topics.emergingTrends.4': {
    es: 'Roaming post-Brexit',
    en: 'Post-Brexit roaming'
  },
  'topics.emergingTrends.5': {
    es: 'Comparadores seguros salud',
    en: 'Health insurance comparators'
  },
  
  // Descripciones de fuentes de datos
  'descriptions.googleTrends': {
    es: 'Repunte de búsquedas e interés general',
    en: 'Surge in searches and general interest'
  },
  'descriptions.keywordPlanner': {
    es: 'Repunte de búsquedas e interés general',
    en: 'Surge in searches and general interest'
  },
  'descriptions.socialMedia': {
    es: 'Tendencias y temas en comentarios y hashtags',
    en: 'Trends and topics in comments and hashtags'
  },
  'descriptions.surveys': {
    es: 'Sectores o marcas con repunte de encuestas negativas',
    en: 'Sectors or brands with surge in negative surveys'
  },
  'descriptions.internalSearches': {
    es: 'Búsquedas sin respuesta en el buscador de la web',
    en: 'Unanswered searches in the website search engine'
  },
  'descriptions.reviews': {
    es: 'Puntuación y sentimiento de marcas',
    en: 'Brand ratings and sentiment'
  },
  'descriptions.brandwatch': {
    es: 'Escucha social de problemas emergentes',
    en: 'Social listening for emerging problems'
  },
  'descriptions.tiktok': {
    es: 'Top productos más virales',
    en: 'Top most viral products'
  },
  'descriptions.amazon': {
    es: 'Top productos más vendidos',
    en: 'Top best-selling products'
  },
  'descriptions.googleShopping': {
    es: 'Productos en tendencia que se están promocionando',
    en: 'Trending products being promoted'
  },
  'descriptions.searchConsole': {
    es: 'Qué keywords busca la gente que llega a la web de OCU',
    en: 'What keywords people search to reach OCU website'
  },
  'descriptions.mediaNews': {
    es: 'Noticias de actualidad de temáticas críticas',
    en: 'Current news on critical topics'
  },
  'descriptions.internalSource': {
    es: 'Los contenidos que han funcionado bien en otros países',
    en: 'Content that has worked well in other countries'
  },
  'descriptions.prescribers': {
    es: 'Contenidos de competencia y referentes',
    en: 'Competitor and reference content'
  },
  'descriptions.ocuContent': {
    es: 'Contenido publicado por OCU',
    en: 'Content published by OCU'
  },
  'descriptions.serps': {
    es: 'Top 5 resultados para palabras clave en tendencia',
    en: 'Top 5 results for trending keywords'
  },
  'descriptions.media': {
    es: 'Artículos, comparativas y análisis del mercado',
    en: 'Articles, comparisons and market analysis'
  },
  
  // Términos de Google Trends
  'trends.cancelSubscription': {
    es: 'cancelar suscripción',
    en: 'cancel subscription'
  },
  'trends.claimInsurance': {
    es: 'reclamar seguro',
    en: 'claim insurance'
  },
  'trends.productReturn': {
    es: 'devolución producto',
    en: 'product return'
  },
  
  // Redes sociales - categorías
  'social.meta': {
    es: 'Meta',
    en: 'Meta'
  },
  'social.tiktok': {
    es: 'TikTok',
    en: 'TikTok'
  },
  'social.x': {
    es: 'X',
    en: 'X'
  },
  'social.categories.hashtags': {
    es: 'Hashtags',
    en: 'Hashtags'
  },
  'social.categories.keywords': {
    es: 'Frases/keywords',
    en: 'Phrases/keywords'
  },
  'social.categories.properNouns': {
    es: 'Nombres propios / eventos',
    en: 'Proper nouns / events'
  },
  
  // Hashtags redes sociales
  'hashtags.phoneScam': {
    es: '#EstafaTelefónica',
    en: '#PhoneScam'
  },
  'hashtags.facturaLuz': {
    es: '#FacturaLuz',
    en: '#ElectricityBill'
  },
  'hashtags.vueltaEspana': {
    es: '#VueltaEspaña',
    en: '#VueltaEspana'
  },
  'hashtags.bankClaim': {
    es: '#ReclamacionBanco',
    en: '#BankClaim'
  },
  'hashtags.consumerRights': {
    es: '#DerechosConsumidor',
    en: '#ConsumerRights'
  },
  'hashtags.scamAlert': {
    es: '#AlertaEstafa',
    en: '#ScamAlert'
  },
  'hashtags.tarifaMovil': {
    es: '#TarifaMovil',
    en: '#MobilePlan'
  },
  'hashtags.devolucionCompra': {
    es: '#DevolucionCompra',
    en: '#PurchaseReturn'
  },
  'hashtags.contratoAbusivo': {
    es: '#ContratoAbusivo',
    en: '#AbusiveContract'
  },
  'hashtags.segurosBaratos': {
    es: '#SegurosBaratos',
    en: '#CheapInsurance'
  },
  
  // Keywords X
  'keywords.x.precioLuz': {
    es: 'precio de la luz',
    en: 'electricity price'
  },
  'keywords.x.cancelarSuscripcion': {
    es: 'cancelar suscripción',
    en: 'cancel subscription'
  },
  
  // Nombres propios / eventos X
  'properNouns.ocu': {
    es: 'OCU',
    en: 'OCU'
  },
  'properNouns.rayoVallecano': {
    es: 'Rayo Vallecano',
    en: 'Rayo Vallecano'
  },
  'properNouns.iphone16': {
    es: 'iPhone 16',
    en: 'iPhone 16'
  },
  'properNouns.blackFriday': {
    es: 'Black Friday',
    en: 'Black Friday'
  },
  
  // Categorías OCU
  'categories.telecommunications': {
    es: 'Telecomunicaciones',
    en: 'Telecommunications'
  },
  'categories.bankingFinance': {
    es: 'Banca/Finanzas',
    en: 'Banking/Finance'
  },
  'categories.insurance': {
    es: 'Seguros',
    en: 'Insurance'
  },
  'categories.ecommerce': {
    es: 'E-commerce',
    en: 'E-commerce'
  },
  'categories.energy': {
    es: 'Energía',
    en: 'Energy'
  },
  
  // Términos de búsqueda sin respuesta
  'searches.cancelMovistarFiber': {
    es: 'cancelar suscripción movistar fibra',
    en: 'cancel movistar fiber subscription'
  },
  'searches.claimCarInsurance': {
    es: 'reclamar seguro coche total loss',
    en: 'claim car insurance total loss'
  },
  'searches.amazonUsedReturn': {
    es: 'devolución amazon producto usado',
    en: 'amazon used product return'
  },
  'searches.changePhonePlan': {
    es: 'cambiar tarifa telefónica sin penalización',
    en: 'change phone plan without penalty'
  },
  
  // Productos virales TikTok
  'products.stanleyCup': {
    es: 'Stanley Cup 40oz',
    en: 'Stanley Cup 40oz'
  },
  'products.iphone15': {
    es: 'iPhone 15 overheating',
    en: 'iPhone 15 overheating'
  },
  'products.teslaModelY': {
    es: 'Tesla Model Y recalls',
    en: 'Tesla Model Y recalls'
  },
  'problems.leadLeak': {
    es: 'Filtración de plomo',
    en: 'Lead leakage'
  },
  'problems.overheating': {
    es: 'Sobrecalentamiento',
    en: 'Overheating'
  },
  'problems.softwareFault': {
    es: 'Fallo software',
    en: 'Software fault'
  },
  
  // Productos Amazon
  'products.roomba': {
    es: 'Robot aspiradora Roomba',
    en: 'Roomba Robot Vacuum'
  },
  'products.airFryer': {
    es: 'Air Fryer Xiaomi',
    en: 'Xiaomi Air Fryer'
  },
  'products.emmaMattress': {
    es: 'Colchón Emma',
    en: 'Emma Mattress'
  },
  'categories.kitchen': {
    es: 'Cocina',
    en: 'Kitchen'
  },
  'categories.rest': {
    es: 'Descanso',
    en: 'Rest'
  },
  
  // Estados de contenido
  'status.outdated': {
    es: 'Desactualizado',
    en: 'Outdated'
  },
  'status.partial': {
    es: 'Parcial',
    en: 'Partial'
  },
  'status.basic': {
    es: 'Básico',
    en: 'Basic'
  },
  'status.complete': {
    es: 'Completo',
    en: 'Complete'
  },
  'status.adequate': {
    es: 'Adecuado',
    en: 'Adequate'
  },
  'status.insufficient': {
    es: 'Insuficiente',
    en: 'Insufficient'
  },
  'status.generic': {
    es: 'Genérico',
    en: 'Generic'
  },
  'status.excellent': {
    es: 'Excelente',
    en: 'Excellent'
  },
  
  // Títulos de contenido FACUA
  'facua.title1': {
    es: 'Cómo cancelar servicios de telecomunicaciones',
    en: 'How to cancel telecommunications services'
  },
  'facua.title2': {
    es: 'Reclamaciones bancarias: nueva normativa 2024',
    en: 'Banking claims: new 2024 regulations'
  },
  'facua.title3': {
    es: 'Black Friday: Cómo detectar ofertas falsas',
    en: 'Black Friday: How to detect fake offers'
  },
  
  // Gap OCU
  'gaps.outdatedContent': {
    es: 'Nuestro contenido desactualizado',
    en: 'Our content is outdated'
  },
  'gaps.noSimilarContent': {
    es: 'No tenemos contenido similar',
    en: 'We have no similar content'
  },
  'gaps.lessDetailed': {
    es: 'Tenemos contenido pero menos detallado',
    en: 'We have content but less detailed'
  },
  
  // Títulos contenido OCU
  'ocu.title1': {
    es: 'Guía para cambiar de operadora móvil',
    en: 'Guide to changing mobile operator'
  },
  'ocu.title2': {
    es: 'Cómo reclamar al banco por comisiones',
    en: 'How to claim bank commissions'
  },
  'ocu.title3': {
    es: 'Derechos en compras online',
    en: 'Online shopping rights'
  },
  
  // Razones de actualización
  'reasons.portabilityReg': {
    es: 'Nuevas regulaciones sobre portabilidad',
    en: 'New portability regulations'
  },
  'reasons.europeanReg': {
    es: 'Nueva normativa europea',
    en: 'New European regulations'
  },
  'reasons.minorUpdates': {
    es: 'Actualizaciones menores necesarias',
    en: 'Minor updates needed'
  },
  
  // Análisis SERPs - keywords
  'keywords.cancelMovistar': {
    es: 'cancelar suscripción movistar',
    en: 'cancel movistar subscription'
  },
  'keywords.claimCarInsurance': {
    es: 'reclamar seguro coche',
    en: 'claim car insurance'
  },
  
  // Posicionamiento
  'serp.notAppear': {
    es: 'No aparece',
    en: 'Does not appear'
  },
  'serp.position8': {
    es: 'Posición 8',
    en: 'Position 8'
  },
  
  // Tipos de competencia
  'competitor.official': {
    es: 'Oficial',
    en: 'Official'
  },
  'competitor.comparator': {
    es: 'Comparador',
    en: 'Comparator'
  },
  'competitor.association': {
    es: 'Asociación',
    en: 'Association'
  },
  'competitor.insurer': {
    es: 'Aseguradora',
    en: 'Insurer'
  },
  
  // Oportunidades SERPs
  'opportunities.independentGuide': {
    es: 'OCU podría ofrecer guía independiente',
    en: 'OCU could offer independent guide'
  },
  'opportunities.practicalCases': {
    es: 'Mejorar contenido existente con casos prácticos',
    en: 'Improve existing content with practical cases'
  },
  
  // Medios especializados
  'media.cincoDias': {
    es: 'Cinco Días',
    en: 'Cinco Días'
  },
  'media.elEconomista': {
    es: 'El Economista',
    en: 'El Economista'
  },
  'media.expansion': {
    es: 'Expansión',
    en: 'Expansión'
  },
  
  // Artículos medios
  'articles.digitalServices': {
    es: 'Nueva ley de servicios digitales: qué cambia para el consumidor',
    en: 'New digital services law: what changes for consumers'
  },
  'articles.mortgageComparison': {
    es: 'Comparativa de hipotecas variables vs fijas en 2024',
    en: 'Variable vs fixed mortgage comparison in 2024'
  },
  'articles.lifeInsurance': {
    es: 'Los seguros de vida más rentables del mercado',
    en: 'The most profitable life insurance in the market'
  },
  
  // Cobertura OCU estados
  'coverage.no': {
    es: 'no',
    en: 'no'
  },
  'coverage.yes': {
    es: 'sí',
    en: 'yes'
  },
  'coverage.partial': {
    es: 'parcial',
    en: 'partial'
  },
  
  // Oportunidades medios
  'opportunities.detailedAnalysis': {
    es: 'Crear análisis detallado para consumidores',
    en: 'Create detailed analysis for consumers'
  },
  'opportunities.ownComparison': {
    es: 'OCU debería tener comparativa propia',
    en: 'OCU should have its own comparison'
  },
  'opportunities.contentUpdated': {
    es: 'Nuestro contenido está actualizado',
    en: 'Our content is updated'
  },
  
  // Temas del mapa de cobertura
  'topics.cancelSubscriptions': {
    es: 'Cancelar suscripciones',
    en: 'Cancel subscriptions'
  },
  'topics.bankClaims': {
    es: 'Reclamaciones bancarias',
    en: 'Banking claims'
  },
  'topics.ecommerceReturns': {
    es: 'Devoluciones e-commerce',
    en: 'E-commerce returns'
  },
  'topics.lifeInsurance': {
    es: 'Seguros de vida',
    en: 'Life insurance'
  },
  'topics.variableMortgages': {
    es: 'Hipotecas variables',
    en: 'Variable mortgages'
  },
  'topics.phoneScams': {
    es: 'Estafas telefónicas',
    en: 'Phone scams'
  },
  'topics.defectiveProducts': {
    es: 'Productos defectuosos',
    en: 'Defective products'
  },
  'topics.consumerRights': {
    es: 'Derechos consumidor',
    en: 'Consumer rights'
  },
  
  // Oportunidades del mapa
  'mapOpportunities.stepByStepGuide': {
    es: 'Crear guía actualizada paso a paso',
    en: 'Create updated step-by-step guide'
  },
  'mapOpportunities.updateRegulations': {
    es: 'Actualizar con nueva normativa',
    en: 'Update with new regulations'
  },
  'mapOpportunities.expandSpecificCases': {
    es: 'Ampliar con casos específicos',
    en: 'Expand with specific cases'
  },
  'mapOpportunities.keepUpdated': {
    es: 'Mantener actualizado',
    en: 'Keep updated'
  },
  'mapOpportunities.monitorChanges': {
    es: 'Monitorear cambios',
    en: 'Monitor changes'
  },
  'mapOpportunities.alertCenter': {
    es: 'Crear centro de alertas',
    en: 'Create alert center'
  },
  'mapOpportunities.sectorGuides': {
    es: 'Guías por sectores',
    en: 'Guides by sectors'
  },
  'mapOpportunities.promoteMore': {
    es: 'Promover más',
    en: 'Promote more'
  },
  
  // Labels adicionales
  'labels.mentions': {
    es: 'menciones',
    en: 'mentions'
  },
  'labels.cases': {
    es: 'casos',
    en: 'cases'
  },
  'labels.thisMonth': {
    es: 'casos este mes',
    en: 'cases this month'
  },
  'labels.searches': {
    es: 'busquedas',
    en: 'searches'
  },
  'labels.lastSearch': {
    es: 'Última búsqueda hace',
    en: 'Last search'
  },
  'labels.reviews': {
    es: 'reviews',
    en: 'reviews'
  },
  'labels.monthsOutdated': {
    es: 'meses desactualizado',
    en: 'months outdated'
  },
  'labels.position': {
    es: 'Posición',
    en: 'Position'
  },
  'labels.views': {
    es: 'views',
    en: 'views'
  },
  'labels.shares': {
    es: 'shares',
    en: 'shares'
  },
  'labels.ranking': {
    es: 'Posición',
    en: 'Position'
  },
  'labels.coverage': {
    es: 'Cobertura OCU',
    en: 'OCU Coverage'
  },
  'labels.action': {
    es: 'Acción',
    en: 'Action'
  },
  'labels.opportunity': {
    es: 'Oportunidad',
    en: 'Opportunity'
  },
  'labels.gapOcu': {
    es: 'Gap OCU',
    en: 'OCU Gap'
  },
  // Artículos de medios
  'news.article1': {
    es: 'Nuevo escándalo bancario: bancos cobran comisiones ilegales',
    en: 'New banking scandal: banks charge illegal fees'
  },
  'news.article2': {
    es: 'Alerta de seguridad: nueva ola de estafas telefónicas',
    en: 'Security alert: new wave of phone scams'
  },
  'news.article3': {
    es: 'Consumo investiga prácticas abusivas en suscripciones digitales',
    en: 'Consumer Affairs investigates abusive practices in digital subscriptions'
  },
  'news.article4': {
    es: 'Subida de precios en telefonía: usuarios denuncian aumentos sin previo aviso',
    en: 'Telecom price increases: users report increases without prior notice'
  },
  'news.article5': {
    es: 'Nueva normativa europea sobre garantías en productos electrónicos',
    en: 'New European regulation on warranties for electronic products'
  },
  'news.article6': {
    es: 'Crisis energética: cómo reducir la factura de luz sin cambiar de compañía',
    en: 'Energy crisis: how to reduce electricity bill without changing company'
  },
  
  // Medios de comunicación
  'media.elPais': {
    es: 'El País',
    en: 'El País'
  },
  'media.elMundo': {
    es: 'El Mundo',
    en: 'El Mundo'
  },
  'media.expansion': {
    es: 'Expansión',
    en: 'Expansión'
  },
  'media.cincodias': {
    es: 'Cinco Días',
    en: 'Cinco Días'
  },
  'media.lavanguardia': {
    es: 'La Vanguardia',
    en: 'La Vanguardia'
  },
  'media.abc': {
    es: 'ABC',
    en: 'ABC'
  },
  
  // Fuente interna - artículos de otros países OCU
  'internal.article1': {
    es: 'Cómo elegir el mejor seguro de hogar según tu perfil',
    en: 'How to choose the best home insurance according to your profile'
  },
  'internal.article2': {
    es: 'Comparativa de tarifas móviles: encuentra la más económica',
    en: 'Mobile tariff comparison: find the most economical'
  },
  'internal.article3': {
    es: 'Guía completa para reclamar un vuelo cancelado',
    en: 'Complete guide to claim a cancelled flight'
  },
  'internal.article4': {
    es: 'Los mejores electrodomésticos en relación calidad-precio 2025',
    en: 'Best value for money appliances 2025'
  },
  
  // Países de OCU
  'internal.country.belgium': {
    es: 'Test Achats (Bélgica)',
    en: 'Test Achats (Belgium)'
  },
  'internal.country.portugal': {
    es: 'DECO Proteste (Portugal)',
    en: 'DECO Proteste (Portugal)'
  },
  'internal.country.italy': {
    es: 'Altroconsumo (Italia)',
    en: 'Altroconsumo (Italy)'
  },
  'internal.country.france': {
    es: 'UFC-Que Choisir (Francia)',
    en: 'UFC-Que Choisir (France)'
  },
  
  'labels.ocuPosition': {
    es: 'Posición OCU',
    en: 'OCU Position'
  },
  'labels.top3Competition': {
    es: 'Top 3 competencia',
    en: 'Top 3 competition'
  },
  'labels.contentGap': {
    es: 'Gap de contenido',
    en: 'Content gap'
  },
  'labels.searchesPerMonth': {
    es: 'búsquedas/mes',
    en: 'searches/month'
  },
  'labels.size': {
    es: 'Tamaño = Volumen de búsquedas',
    en: 'Size = Search volume'
  },
  
  // Badges y estados adicionales
  'badges.peak': {
    es: 'Pico: +200% cancelaciones',
    en: 'Peak: +200% cancellations'
  },
  'badges.comparativeNeeded': {
    es: 'Comparativa necesaria',
    en: 'Comparison needed'
  },
  'badges.covered': {
    es: 'Cubierto',
    en: 'Covered'
  },
  'badges.gapCritical': {
    es: 'GAP CRÍTICO',
    en: 'CRITICAL GAP'
  },
  'badges.review': {
    es: 'REVISAR',
    en: 'REVIEW'
  },
  'badges.optimized': {
    es: 'OPTIMIZADO',
    en: 'OPTIMIZED'
  },
  
  // Configuración Brandwatch
  'brandwatch.configure': {
    es: 'Configurar integración con Brandwatch API',
    en: 'Configure Brandwatch API integration'
  },
  
  // Tiempo relativo
  'time.ago': {
    es: 'hace',
    en: 'ago'
  },
  'time.day': {
    es: 'día',
    en: 'day'
  },
  'time.days': {
    es: 'días',
    en: 'days'
  },
  'time.hour': {
    es: 'hora',
    en: 'hour'
  },
  'time.hours': {
    es: 'horas',
    en: 'hours'
  },
  'time.minute': {
    es: 'minuto',
    en: 'minute'
  },
  'time.minutes': {
    es: 'minutos',
    en: 'minutes'
  },
  
  // Temáticas
  'themes.title': {
    es: 'Temáticas en crecimiento',
    en: 'Growing themes'
  },
  'themes.description': {
    es: 'Agrupación de búsquedas por sectores con mayor demanda',
    en: 'Search grouping by sectors with highest demand'
  },
  'themes.airlines': {
    es: 'Aerolíneas',
    en: 'Airlines'
  },
  'themes.insurance': {
    es: 'Seguros',
    en: 'Insurance'
  },
  'themes.home': {
    es: 'Hogar',
    en: 'Home'
  },
  'themes.telecommunications': {
    es: 'Móviles',
    en: 'Mobile'
  },
  'themes.banking': {
    es: 'Banca',
    en: 'Banking'
  },
  'themes.energy': {
    es: 'Energía',
    en: 'Energy'
  },
  'themes.growth': {
    es: 'Crecimiento',
    en: 'Growth'
  },
  'themes.searches': {
    es: 'búsquedas/mes',
    en: 'searches/month'
  },
  'themes.all': {
    es: 'Todas las temáticas',
    en: 'All themes'
  },
  'themes.beauty': {
    es: 'Belleza y Cosmética',
    en: 'Beauty and Cosmetics'
  },
  'themes.technology': {
    es: 'Tecnología',
    en: 'Technology'
  },
  
  // Plan de Acción
  'actionPlan.title': {
    es: 'Plan de Acción',
    en: 'Action Plan'
  },
  'actionPlan.subtitle': {
    es: 'Estrategias y acciones concretas para capitalizar las oportunidades identificadas',
    en: 'Specific strategies and actions to capitalize on identified opportunities'
  },
  'actionPlan.selectOpportunity': {
    es: 'Selecciona una oportunidad para ver el plan de acción detallado',
    en: 'Select an opportunity to see the detailed action plan'
  },
  'actionPlan.for': {
    es: 'Plan de acción para',
    en: 'Action plan for'
  },
  'actionPlan.impact': {
    es: 'Impacto estimado',
    en: 'Estimated impact'
  },
  'actionPlan.timeline': {
    es: 'Timeline',
    en: 'Timeline'
  },
  'actionPlan.resources': {
    es: 'Recursos necesarios',
    en: 'Required resources'
  },
  'actionPlan.steps': {
    es: 'Pasos a seguir',
    en: 'Steps to follow'
  },
  'actionPlan.kpis': {
    es: 'KPIs a monitorear',
    en: 'KPIs to monitor'
  },
  
  // Pasos de acción - Cancelar suscripciones
  'actionSteps.cancelSubscriptions.1': {
    es: 'Publicar contenido en redes sociales dando respuesta a los hashtags en tendencia sobre cancelaciones',
    en: 'Publish social media content responding to trending hashtags about cancellations'
  },
  'actionSteps.cancelSubscriptions.2': {
    es: 'Crear artículo de actualidad paso a paso para cubrir el repunte de búsquedas en internet',
    en: 'Create up-to-date step-by-step article to cover the surge in internet searches'
  },
  'actionSteps.cancelSubscriptions.3': {
    es: 'Desarrollar guía interactiva con calculadora de penalizaciones',
    en: 'Develop interactive guide with penalty calculator'
  },
  'actionSteps.cancelSubscriptions.4': {
    es: 'Crear serie de videos tutoriales para YouTube y TikTok',
    en: 'Create tutorial video series for YouTube and TikTok'
  },
  'actionSteps.cancelSubscriptions.5': {
    es: 'Implementar chatbot con respuestas automáticas a consultas frecuentes',
    en: 'Implement chatbot with automatic responses to frequent queries'
  },
  
  // Pasos de acción - Estafas telefónicas
  'actionSteps.phoneScams.1': {
    es: 'Lanzar campaña en redes sociales con alertas de estafas más recientes',
    en: 'Launch social media campaign with alerts about most recent scams'
  },
  'actionSteps.phoneScams.2': {
    es: 'Publicar artículo semanal sobre nuevas modalidades de estafa detectadas',
    en: 'Publish weekly article about newly detected scam methods'
  },
  'actionSteps.phoneScams.3': {
    es: 'Crear centro de alertas tempranas en la web de OCU',
    en: 'Create early warning center on OCU website'
  },
  'actionSteps.phoneScams.4': {
    es: 'Colaborar con medios de comunicación para amplificar el alcance',
    en: 'Collaborate with media outlets to amplify reach'
  },
  'actionSteps.phoneScams.5': {
    es: 'Desarrollar app móvil para reportar y verificar llamadas sospechosas',
    en: 'Develop mobile app to report and verify suspicious calls'
  },
  
  // Pasos de acción - Devoluciones e-commerce
  'actionSteps.ecommerceReturns.1': {
    es: 'Publicar guía completa sobre derechos de devolución en diferentes plataformas',
    en: 'Publish comprehensive guide on return rights across different platforms'
  },
  'actionSteps.ecommerceReturns.2': {
    es: 'Crear contenido en redes sociales con casos prácticos resueltos',
    en: 'Create social media content with solved practical cases'
  },
  'actionSteps.ecommerceReturns.3': {
    es: 'Desarrollar comparador de políticas de devolución por marketplace',
    en: 'Develop comparison tool for return policies by marketplace'
  },
  'actionSteps.ecommerceReturns.4': {
    es: 'Establecer alianzas con plataformas e-commerce para simplificar procesos',
    en: 'Establish partnerships with e-commerce platforms to simplify processes'
  },
  'actionSteps.ecommerceReturns.5': {
    es: 'Crear templates de reclamación descargables',
    en: 'Create downloadable complaint templates'
  },
  
  // Pasos de acción - Hipotecas variables
  'actionSteps.variableMortgages.1': {
    es: 'Publicar análisis mensual del mercado hipotecario con predicciones',
    en: 'Publish monthly mortgage market analysis with predictions'
  },
  'actionSteps.variableMortgages.2': {
    es: 'Crear calculadora interactiva de impacto de subidas de euríbor',
    en: 'Create interactive calculator for euribor rise impact'
  },
  'actionSteps.variableMortgages.3': {
    es: 'Desarrollar comparador actualizado de ofertas bancarias',
    en: 'Develop updated comparison tool for banking offers'
  },
  'actionSteps.variableMortgages.4': {
    es: 'Producir webinars mensuales con expertos financieros',
    en: 'Produce monthly webinars with financial experts'
  },
  'actionSteps.variableMortgages.5': {
    es: 'Publicar guía sobre cómo negociar mejores condiciones con el banco',
    en: 'Publish guide on how to negotiate better terms with the bank'
  },
  
  // Pasos de acción - Productos defectuosos
  'actionSteps.defectiveProducts.1': {
    es: 'Crear guías específicas por sector (electrónica, electrodomésticos, etc.)',
    en: 'Create sector-specific guides (electronics, appliances, etc.)'
  },
  'actionSteps.defectiveProducts.2': {
    es: 'Publicar rankings de marcas con más reclamaciones por categoría',
    en: 'Publish rankings of brands with most complaints by category'
  },
  'actionSteps.defectiveProducts.3': {
    es: 'Desarrollar sistema de alertas para productos con defectos masivos',
    en: 'Develop alert system for products with massive defects'
  },
  'actionSteps.defectiveProducts.4': {
    es: 'Crear contenido viral en TikTok sobre productos problemáticos',
    en: 'Create viral TikTok content about problematic products'
  },
  'actionSteps.defectiveProducts.5': {
    es: 'Establecer formulario simplificado para reportar productos defectuosos',
    en: 'Establish simplified form to report defective products'
  },
  
  // Timeline estimado
  'timeline.immediate': {
    es: '1-2 semanas',
    en: '1-2 weeks'
  },
  'timeline.short': {
    es: '3-4 semanas',
    en: '3-4 weeks'
  },
  'timeline.medium': {
    es: '1-2 meses',
    en: '1-2 months'
  },
  'timeline.long': {
    es: '2-3 meses',
    en: '2-3 months'
  },
  
  // Recursos necesarios
  'resources.contentTeam': {
    es: 'Equipo de contenido',
    en: 'Content team'
  },
  'resources.socialMedia': {
    es: 'Community manager',
    en: 'Community manager'
  },
  'resources.development': {
    es: 'Equipo de desarrollo',
    en: 'Development team'
  },
  'resources.legal': {
    es: 'Asesoría legal',
    en: 'Legal advisory'
  },
  'resources.design': {
    es: 'Diseñador gráfico',
    en: 'Graphic designer'
  },
  'resources.seo': {
    es: 'Especialista SEO',
    en: 'SEO specialist'
  },
  
  // KPIs
  'kpis.organicTraffic': {
    es: 'Tráfico orgánico',
    en: 'Organic traffic'
  },
  'kpis.socialEngagement': {
    es: 'Engagement en RRSS',
    en: 'Social media engagement'
  },
  'kpis.conversionRate': {
    es: 'Tasa de conversión',
    en: 'Conversion rate'
  },
  'kpis.timeOnPage': {
    es: 'Tiempo en página',
    en: 'Time on page'
  },
  'kpis.bounceRate': {
    es: 'Tasa de rebote',
    en: 'Bounce rate'
  },
  'kpis.shares': {
    es: 'Compartidos',
    en: 'Shares'
  },
  'kpis.backlinks': {
    es: 'Enlaces entrantes',
    en: 'Backlinks'
  },
  
  // Temas cubiertos
  'supply.coveredTopics': {
    es: 'Temas cubiertos',
    en: 'Covered topics'
  },
  'supply.topicsCount': {
    es: 'temas',
    en: 'topics'
  },
  'supply.topic.telecommunications': {
    es: 'Telecomunicaciones',
    en: 'Telecommunications'
  },
  'supply.topic.finance': {
    es: 'Finanzas',
    en: 'Finance'
  },
  'supply.topic.ecommerce': {
    es: 'E-commerce',
    en: 'E-commerce'
  },
  'supply.topic.insurance': {
    es: 'Seguros',
    en: 'Insurance'
  },
  'supply.topic.warranties': {
    es: 'Garantías',
    en: 'Warranties'
  },
  'supply.topic.regulation': {
    es: 'Regulación',
    en: 'Regulation'
  },
  'supply.topic.consumerRights': {
    es: 'Derechos del Consumidor',
    en: 'Consumer Rights'
  },
  'supply.topic.homeAppliances': {
    es: 'Electrodomésticos',
    en: 'Home Appliances'
  },
  'supply.topic.mortgages': {
    es: 'Hipotecas',
    en: 'Mortgages'
  },
  'supply.topic.automotive': {
    es: 'Automoción',
    en: 'Automotive'
  },
  'supply.articlesCount': {
    es: 'artículos',
    en: 'articles'
  },
  'supply.lastUpdate': {
    es: 'Última actualización',
    en: 'Last update'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}