import { Router } from 'express';

const router = Router();

interface TrendDataPoint {
  fecha: string;
  'cancelar suscripción': number;
  'reclamar seguro': number;
  'devolución producto': number;
}

const mockTrendsData: TrendDataPoint[] = [
  { fecha: '01/01', 'cancelar suscripción': 100, 'reclamar seguro': 65, 'devolución producto': 80 },
  { fecha: '02/01', 'cancelar suscripción': 120, 'reclamar seguro': 75, 'devolución producto': 85 },
  { fecha: '03/01', 'cancelar suscripción': 85, 'reclamar seguro': 70, 'devolución producto': 90 },
  { fecha: '04/01', 'cancelar suscripción': 150, 'reclamar seguro': 85, 'devolución producto': 95 },
  { fecha: '05/01', 'cancelar suscripción': 180, 'reclamar seguro': 95, 'devolución producto': 110 },
  { fecha: '06/01', 'cancelar suscripción': 165, 'reclamar seguro': 88, 'devolución producto': 105 },
  { fecha: '07/01', 'cancelar suscripción': 200, 'reclamar seguro': 105, 'devolución producto': 120 }
];

router.get('/google-trends', (req, res) => {
  const lang = req.query.lang as string || 'es';
  
  let data = mockTrendsData;
  
  if (lang === 'en') {
    data = mockTrendsData.map(item => ({
      fecha: item.fecha,
      'cancel subscription': item['cancelar suscripción'],
      'claim insurance': item['reclamar seguro'],
      'product return': item['devolución producto']
    }));
  }
  
  res.json({
    success: true,
    data,
    metadata: {
      source: 'Google Trends',
      dateRange: '01/01 - 07/01',
      lang
    }
  });
});

router.get('/keyword-planner', (req, res) => {
  const lang = req.query.lang as string || 'es';
  
  let data = mockTrendsData;
  
  if (lang === 'en') {
    data = mockTrendsData.map(item => ({
      fecha: item.fecha,
      'cancel subscription': item['cancelar suscripción'],
      'claim insurance': item['reclamar seguro'],
      'product return': item['devolución producto']
    }));
  }
  
  res.json({
    success: true,
    data,
    metadata: {
      source: 'Google Keyword Planner',
      dateRange: '01/01 - 07/01',
      lang
    }
  });
});

export default router;
