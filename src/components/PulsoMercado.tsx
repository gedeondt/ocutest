import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Star, ShoppingCart, TrendingUp, ArrowRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

const sentimientoData = [
  { fecha: '01/01', Amazon: 75, Mercadolibre: 68, AliExpress: 45, 'El Corte Inglés': 72, Zalando: 69 },
  { fecha: '02/01', Amazon: 78, Mercadolibre: 71, AliExpress: 48, 'El Corte Inglés': 74, Zalando: 71 },
  { fecha: '03/01', Amazon: 72, Mercadolibre: 69, AliExpress: 43, 'El Corte Inglés': 70, Zalando: 68 },
  { fecha: '04/01', Amazon: 80, Mercadolibre: 73, AliExpress: 51, 'El Corte Inglés': 76, Zalando: 73 },
  { fecha: '05/01', Amazon: 82, Mercadolibre: 75, AliExpress: 53, 'El Corte Inglés': 78, Zalando: 75 },
  { fecha: '06/01', Amazon: 79, Mercadolibre: 72, AliExpress: 49, 'El Corte Inglés': 75, Zalando: 72 },
  { fecha: '07/01', Amazon: 85, Mercadolibre: 77, AliExpress: 55, 'El Corte Inglés': 80, Zalando: 77 }
];

const productosAmazon = [
  {
    id: 1,
    nombre: "iPhone 15 Pro Max",
    categoria: "Electrónicos",
    precio: "€1,199",
    rating: 4.7,
    reviews: 2847,
    tendencia: "up",
    cambio: "+15%",
    imagen: "smartphone technology"
  },
  {
    id: 2,
    nombre: "MacBook Air M3",
    categoria: "Informática",
    precio: "€1,499",
    rating: 4.8,
    reviews: 1923,
    tendencia: "up",
    cambio: "+23%",
    imagen: "laptop computer"
  },
  {
    id: 3,
    nombre: "PlayStation 5",
    categoria: "Gaming",
    precio: "€549",
    rating: 4.6,
    reviews: 5634,
    tendencia: "down",
    cambio: "-8%",
    imagen: "gaming console"
  },
  {
    id: 4,
    nombre: "Samsung Galaxy Watch 6",
    categoria: "Wearables",
    precio: "€329",
    rating: 4.5,
    reviews: 1456,
    tendencia: "up",
    cambio: "+12%",
    imagen: "smartwatch technology"
  },
  {
    id: 5,
    nombre: "Nike Air Max 90",
    categoria: "Calzado",
    precio: "€129",
    rating: 4.4,
    reviews: 3721,
    tendencia: "up",
    cambio: "+7%",
    imagen: "running shoes"
  }
];

const ProductCarousel = ({ productos }: { productos: typeof productosAmazon }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {productos.map((producto) => (
        <Card key={producto.id} className="flex-shrink-0 w-64 hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src=""
                  alt={producto.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant={producto.tendencia === 'up' ? 'default' : 'destructive'}>
                    {producto.cambio}
                  </Badge>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm truncate">{producto.nombre}</h4>
                <p className="text-xs text-muted-foreground">{producto.categoria}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-lg">{producto.precio}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#F46506] text-[#F46506]" />
                  <span className="text-sm">{producto.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    ({producto.reviews.toLocaleString()})
                  </span>
                </div>
              </div>
              
              <Button size="sm" className="w-full" variant="outline">
                <ExternalLink className="w-3 h-3 mr-2" />
                Ver en Amazon
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover border rounded-lg shadow-md p-3">
        <p className="text-sm mb-2">{`Fecha: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.dataKey}: ${entry.value}% satisfacción`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const PulsoMercado = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-[#4AA83A]" />
        <h2>Pulso de Mercado</h2>
        <Badge variant="outline">Tiempo Real</Badge>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>
              Sentimiento de Marcas - E-commerce
            </CardTitle>
            <CardDescription>
              Evolución del sentimiento del consumidor por plataforma (última semana)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sentimientoData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="fecha" 
                    className="text-muted-foreground"
                  />
                  <YAxis 
                    domain={[0, 100]}
                    label={{ value: 'Satisfacción (%)', angle: -90, position: 'insideLeft' }}
                    className="text-muted-foreground"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="Amazon" 
                    stroke="#ff6b35" 
                    strokeWidth={3}
                    dot={{ fill: '#ff6b35', r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Mercadolibre" 
                    stroke="#3483fa" 
                    strokeWidth={3}
                    dot={{ fill: '#3483fa', r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="AliExpress" 
                    stroke="#ff4747" 
                    strokeWidth={3}
                    dot={{ fill: '#ff4747', r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="El Corte Inglés" 
                    stroke="#00a650" 
                    strokeWidth={3}
                    dot={{ fill: '#00a650', r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Zalando" 
                    stroke="#ff6900" 
                    strokeWidth={3}
                    dot={{ fill: '#ff6900', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>
                  Trending Products - Amazon
                </CardTitle>
                <CardDescription>
                  Productos con mayor crecimiento en las últimas 24 horas
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <ArrowRight className="w-4 h-4" />
                Ver Todos
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ProductCarousel productos={productosAmazon} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};