import express from 'express';
import cors from 'cors';
import trendsRouter from './routes/trends';
import tematicasRouter from './routes/tematicas';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'OCU Backend API is running' });
});

app.use('/api/trends', trendsRouter);
app.use('/api/tematicas', tematicasRouter);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
