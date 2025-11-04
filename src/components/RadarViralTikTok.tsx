import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Zap, Play, Eye, Heart, MessageCircle, Share2, Plus, Edit3 } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

const videoViral = {
  id: 1,
  usuario: "@consumidor_alerta",
  titulo: "🚨 CUIDADO con esta nueva estafa en delivery apps",
  descripcion: "Te muestro cómo detectar los restaurantes fantasma que te cobran el doble por la misma comida. Comparto mi experiencia y cómo reclamar tu dinero. #EstafaDelivery #DerechosConsumidor #AlertaEstafa",
  hashtags: ["#EstafaDelivery", "#DerechosConsumidor", "#AlertaEstafa", "#Reclamacion", "#TipsConsumo"],
  metricas: {
    visualizaciones: "2.3M",
    likes: "156K",
    comentarios: "8.9K",
    compartidos: "23K"
  },
  fechaCreacion: "hace 6h",
  categoria: "Alimentación",
  riesgoViral: "Alto",
  impactoEstimado: "Nacional",
  imagenThumbnail: "https://images.unsplash.com/flagged/photo-1594319622311-0b930abb17cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWt0b2slMjBzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3NTczMjA3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};

const tendenciasTikTok = [
  {
    hashtag: "#EstafaDelivery",
    crecimiento: "+340%",
    videos: "1.2K",
    categoria: "Consumo"
  },
  {
    hashtag: "#ReclamacionBanco",
    crecimiento: "+225%",
    videos: "890",
    categoria: "Finanzas"
  },
  {
    hashtag: "#DerechosConsumidor",
    crecimiento: "+180%",
    videos: "2.1K",
    categoria: "Legal"
  },
  {
    hashtag: "#AlertaTeleco",
    crecimiento: "+156%",
    videos: "567",
    categoria: "Telecomunicaciones"
  }
];

export const RadarViralTikTok = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <Zap className="w-6 h-6 text-purple-500" />
        <h2>Radar Viral TikTok</h2>
        <Badge variant="outline" className="bg-purple-50 text-purple-700">
          Manual Curation
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <Card className="border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center justify-between">
                <CardTitle>
                  Video Viral Curado
                </CardTitle>
                <Button size="sm" variant="outline">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Editar
                </Button>
              </div>
              <CardDescription>
                Contenido seleccionado manualmente con alto potencial de impacto
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <ImageWithFallback
                  src={videoViral.imagenThumbnail}
                  alt="TikTok viral video"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 right-4 space-y-2">
                  <Badge variant="destructive">{videoViral.riesgoViral}</Badge>
                  <Badge variant="outline" className="bg-white/90">
                    {videoViral.impactoEstimado}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>CA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm">{videoViral.usuario}</h3>
                      <Badge variant="secondary">{videoViral.categoria}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {videoViral.fechaCreacion}
                      </span>
                    </div>
                    <h4 className="text-base">{videoViral.titulo}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {videoViral.descripcion}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {videoViral.hashtags.map((hashtag, index) => (
                    <Badge key={index} variant="outline" className="text-[#016689] border-[#016689]/20">
                      {hashtag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{videoViral.metricas.visualizaciones}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm">{videoViral.metricas.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-[#016689]" />
                      <span className="text-sm">{videoViral.metricas.comentarios}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4 text-[#4AA83A]" />
                      <span className="text-sm">{videoViral.metricas.compartidos}</span>
                    </div>
                  </div>
                  <Button size="sm">
                    Analizar Impacto
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hashtags en Tendencia</CardTitle>
              <CardDescription>
                Términos relacionados con consumer rights en crecimiento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {tendenciasTikTok.map((trend, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-sm text-[#016689]">{trend.hashtag}</p>
                    <p className="text-xs text-muted-foreground">
                      {trend.videos} videos • {trend.categoria}
                    </p>
                  </div>
                  <Badge variant="default" className="bg-[#4AA83A]/10 text-[#4AA83A]">
                    {trend.crecimiento}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Agregar Contenido
              </CardTitle>
              <CardDescription>
                Curación manual de videos virales relevantes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="usuario">Usuario TikTok</Label>
                <Input id="usuario" placeholder="@usuario_tiktok" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="video-url">URL del Video</Label>
                <Input id="video-url" placeholder="https://tiktok.com/..." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notas">Notas de Curación</Label>
                <Textarea 
                  id="notas"
                  placeholder="¿Por qué es relevante este contenido? ¿Qué impacto puede tener?"
                  rows={3}
                />
              </div>
              
              <Button className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Agregar a Radar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};