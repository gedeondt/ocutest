import { Router } from 'express';

const router = Router();

interface TematicaData {
  tema: string;
  busquedas: number;
  crecimiento: string;
  color: string;
}

const mockTematicasDataES: TematicaData[] = [
  { tema: 'Aerolíneas', busquedas: 245000, crecimiento: '+156%', color: '#016689' },
  { tema: 'Seguros', busquedas: 189000, crecimiento: '+142%', color: '#016689' },
  { tema: 'Hogar', busquedas: 167000, crecimiento: '+128%', color: '#016689' },
  { tema: 'Telecomunicaciones', busquedas: 298000, crecimiento: '+185%', color: '#016689' },
  { tema: 'Banca', busquedas: 276000, crecimiento: '+173%', color: '#016689' },
  { tema: 'Energía', busquedas: 134000, crecimiento: '+98%', color: '#016689' },
];

const mockTematicasDataEN: TematicaData[] = [
  { tema: 'Airlines', busquedas: 245000, crecimiento: '+156%', color: '#016689' },
  { tema: 'Insurance', busquedas: 189000, crecimiento: '+142%', color: '#016689' },
  { tema: 'Home', busquedas: 167000, crecimiento: '+128%', color: '#016689' },
  { tema: 'Telecommunications', busquedas: 298000, crecimiento: '+185%', color: '#016689' },
  { tema: 'Banking', busquedas: 276000, crecimiento: '+173%', color: '#016689' },
  { tema: 'Energy', busquedas: 134000, crecimiento: '+98%', color: '#016689' },
];

router.get('/', (req, res) => {
  const lang = req.query.lang as string || 'es';
  
  const data = lang === 'en' ? mockTematicasDataEN : mockTematicasDataES;
  
  res.json({
    success: true,
    data,
    metadata: {
      source: 'Internal Analysis',
      lang
    }
  });
});

export default router;
