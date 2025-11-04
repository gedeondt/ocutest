import { Router } from 'express';

const router = Router();

interface TrendDataPoint {
  fecha: string;
  cancelSubscription: number;
  claimInsurance: number;
  productReturn: number;
}

const mockTrendsData: TrendDataPoint[] = [
  { fecha: '01/01', cancelSubscription: 100, claimInsurance: 65, productReturn: 80 },
  { fecha: '02/01', cancelSubscription: 120, claimInsurance: 75, productReturn: 85 },
  { fecha: '03/01', cancelSubscription: 85, claimInsurance: 70, productReturn: 90 },
  { fecha: '04/01', cancelSubscription: 150, claimInsurance: 85, productReturn: 95 },
  { fecha: '05/01', cancelSubscription: 180, claimInsurance: 95, productReturn: 110 },
  { fecha: '06/01', cancelSubscription: 165, claimInsurance: 88, productReturn: 105 },
  { fecha: '07/01', cancelSubscription: 200, claimInsurance: 105, productReturn: 120 }
];

router.get('/google-trends', (req, res) => {
  const lang = req.query.lang as string || 'es';
  
  res.json({
    success: true,
    data: mockTrendsData,
    metadata: {
      source: 'Google Trends',
      dateRange: '01/01 - 07/01',
      lang
    }
  });
});

router.get('/keyword-planner', (req, res) => {
  const lang = req.query.lang as string || 'es';
  
  res.json({
    success: true,
    data: mockTrendsData,
    metadata: {
      source: 'Google Keyword Planner',
      dateRange: '01/01 - 07/01',
      lang
    }
  });
});

export default router;
