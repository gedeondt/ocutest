import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Treemap, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { Eye, MessageCircle, Heart, Share2, ExternalLink } from "lucide-react";

const facuaPosts = [
  {
    id: 1,
    author: "FACUA Consumidores",
    time: "hace 2h",
    content: "⚠️ ALERTA: Nueva práctica abusiva detectada en telecomunicaciones. Las operadoras están implementando cambios unilaterales en contratos sin notificación previa.",
    engagement: {
      likes: 342,
      comments: 89,
      shares: 156,
      views: 2841
    },
    topic: "Telecomunicaciones",
    severity: "high"
  },
  {
    id: 2,
    author: "FACUA Consumidores",
    time: "hace 4h",
    content: "📊 Estudio: El 67% de los consumidores han experimentado problemas con servicios de streaming en el último trimestre. Los principales issues: buffering constante y cancelaciones inesperadas.",
    engagement: {
      likes: 198,
      comments: 43,
      shares: 78,
      views: 1567
    },
    topic: "Streaming",
    severity: "medium"
  },
  {
    id: 3,
    author: "FACUA Consumidores",
    time: "hace 6h",
    content: "🛒 Black Friday: Detectadas más de 200 ofertas falsas en grandes retailers. Te enseñamos cómo identificar precios inflados antes de las 'rebajas'.",
    engagement: {
      likes: 567,
      comments: 123,
      shares: 289,
      views: 4521
    },
    topic: "E-commerce",
    severity: "high"
  },
  {
    id: 4,
    author: "FACUA Consumidores",
    time: "hace 8h",
    content: "🏦 Nuevo análisis: Los bancos han aumentado un 15% las comisiones ocultas en transferencias internacionales. Descubre qué entidades son las más abusivas.",
    engagement: {
      likes: 423,
      comments: 67,
      shares: 134,
      views: 3298
    },
    topic: "Banca",
    severity: "medium"
  }
];

const treemapData = [
  { name: "Telecomunicaciones", value: 2841, posts: 12, color: "#CB050A" },
  { name: "E-commerce", value: 2156, posts: 8, color: "#f97316" },
  { name: "Banca", value: 1897, posts: 6, color: "#eab308" },
  { name: "Streaming", value: 1567, posts: 5, color: "#22c55e" },
  { name: "Seguros", value: 1234, posts: 4, color: "#3b82f6" },
  { name: "Energía", value: 987, posts: 3, color: "#8b5cf6" },
  { name: "Alimentación", value: 756, posts: 2, color: "#ec4899" },
  { name: "Transporte", value: 543, posts: 2, color: "#14b8a6" }
];

const PostCard = ({ post }: { post: typeof facuaPosts[0] }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback>FC</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm">{post.author}</p>
            <p className="text-xs text-muted-foreground">{post.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={post.severity === 'high' ? 'destructive' : 'secondary'}>
            {post.topic}
          </Badge>
          <ExternalLink className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm mb-4 leading-relaxed">{post.content}</p>
      <div className="flex items-center justify-between text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span className="text-xs">{post.engagement.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs">{post.engagement.comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share2 className="w-4 h-4" />
            <span className="text-xs">{post.engagement.shares}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span className="text-xs">{post.engagement.views.toLocaleString()}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TreemapTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-popover border rounded-lg shadow-md p-3">
        <p className="text-sm">{data.name}</p>
        <p className="text-xs text-muted-foreground">
          {data.posts} posts • {data.value.toLocaleString()} interacciones
        </p>
      </div>
    );
  }
  return null;
};

export const RadarCompetencia = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <Eye className="w-6 h-6 text-primary" />
        <h2>Radar de Competencia</h2>
        <Badge variant="outline">FACUA Monitor</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg">Feed de Posts Recientes</h3>
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {facuaPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Temas Dominantes</CardTitle>
              <CardDescription>
                Distribución por interacciones de los últimos 7 días
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <Treemap
                    data={treemapData}
                    dataKey="value"
                    aspectRatio={4/3}
                    stroke="#fff"
                    strokeWidth={2}
                  >
                    {treemapData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    <Tooltip content={<TreemapTooltip />} />
                  </Treemap>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {treemapData.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-muted-foreground">{item.posts} posts</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
