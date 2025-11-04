import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Badge } from "./ui/badge";
import { AlertTriangle, TrendingUp } from "lucide-react";

const sparklineData1 = [
  { value: 12 }, { value: 18 }, { value: 25 }, { value: 22 }, 
  { value: 35 }, { value: 42 }, { value: 58 }, { value: 51 }
];

const sparklineData2 = [
  { value: 8 }, { value: 15 }, { value: 28 }, { value: 32 }, 
  { value: 29 }, { value: 48 }, { value: 55 }, { value: 62 }
];

const sparklineData3 = [
  { value: 20 }, { value: 22 }, { value: 18 }, { value: 35 }, 
  { value: 45 }, { value: 38 }, { value: 52 }, { value: 48 }
];

const reclamacionesData = [
  { palabra: "servicio", peso: 45, frecuencia: 234 },
  { palabra: "demora", peso: 38, frecuencia: 189 },
  { palabra: "calidad", peso: 35, frecuencia: 167 },
  { palabra: "precio", peso: 32, frecuencia: 156 },
  { palabra: "atención", peso: 28, frecuencia: 142 },
  { palabra: "producto", peso: 25, frecuencia: 128 },
  { palabra: "entrega", peso: 22, frecuencia: 115 },
  { palabra: "soporte", peso: 18, frecuencia: 98 },
  { palabra: "facturación", peso: 15, frecuencia: 87 },
  { palabra: "garantía", peso: 12, frecuencia: 76 },
];

const WordCloud = ({ data }: { data: typeof reclamacionesData }) => {
  const maxPeso = Math.max(...data.map(item => item.peso));
  
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {data.map((item, index) => {
        const size = Math.max(0.8, (item.peso / maxPeso) * 2.5);
        const opacity = Math.max(0.6, item.peso / maxPeso);
        
        return (
          <span
            key={index}
            className="inline-block px-2 py-1 rounded-md bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors cursor-pointer"
            style={{
              fontSize: `${size}rem`,
              opacity: opacity
            }}
            title={`${item.frecuencia} menciones`}
          >
            {item.palabra}
          </span>
        );
      })}
    </div>
  );
};

const SparklineCard = ({ 
  title, 
  value, 
  change, 
  data, 
  trend 
}: { 
  title: string; 
  value: string; 
  change: string; 
  data: typeof sparklineData1;
  trend: 'up' | 'down';
}) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm">{title}</CardTitle>
      <div className="flex items-center justify-between">
        <span className="text-2xl">{value}</span>
        <Badge variant={trend === 'up' ? 'destructive' : 'secondary'} className="text-xs">
          <TrendingUp className="w-3 h-3 mr-1" />
          {change}
        </Badge>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={trend === 'up' ? '#CB050A' : '#717182'}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export const AlertasTempranas = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-destructive" />
        <h2>Alertas Tempranas</h2>
        <Badge variant="destructive">3 Alertas Activas</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SparklineCard
          title="Crisis Reputacional"
          value="89%"
          change="+34%"
          data={sparklineData1}
          trend="up"
        />
        <SparklineCard
          title="Menciones Negativas"
          value="156"
          change="+28%"
          data={sparklineData2}
          trend="up"
        />
        <SparklineCard
          title="Sentiment Score"
          value="2.1"
          change="+15%"
          data={sparklineData3}
          trend="up"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nube de Palabras - Reclamaciones</CardTitle>
          <CardDescription>
            Términos más frecuentes en reclamaciones de las últimas 24 horas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WordCloud data={reclamacionesData} />
        </CardContent>
      </Card>
    </section>
  );
};