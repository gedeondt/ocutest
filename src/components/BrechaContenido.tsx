import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Search, FileText, Clock, ArrowUp, CheckCircle2, AlertCircle } from "lucide-react";

const busquedasSinRespuesta = [
  {
    id: 1,
    termino: "cancelar suscripción movistar fibra",
    frecuencia: 234,
    ultimaBusqueda: "hace 2h",
    prioridad: "alta",
    dificultad: "media",
    volumenSEO: "1.2K",
    competencia: "alta"
  },
  {
    id: 2,
    termino: "reclamar seguro coche accidente",
    frecuencia: 189,
    ultimaBusqueda: "hace 1h",
    prioridad: "alta",
    dificultad: "baja",
    volumenSEO: "890",
    competencia: "media"
  },
  {
    id: 3,
    termino: "devolución amazon producto defectuoso",
    frecuencia: 167,
    ultimaBusqueda: "hace 3h",
    prioridad: "media",
    dificultad: "baja",
    volumenSEO: "2.1K",
    competencia: "alta"
  },
  {
    id: 4,
    termino: "cambiar tarifa telefónica portabilidad",
    frecuencia: 142,
    ultimaBusqueda: "hace 4h",
    prioridad: "media",
    dificultad: "media",
    volumenSEO: "670",
    competencia: "media"
  },
  {
    id: 5,
    termino: "reclamar vuelo retrasado indemnización",
    frecuencia: 128,
    ultimaBusqueda: "hace 5h",
    prioridad: "baja",
    dificultad: "alta",
    volumenSEO: "1.5K",
    competencia: "alta"
  },
  {
    id: 6,
    termino: "factura luz discriminación horaria",
    frecuencia: 98,
    ultimaBusqueda: "hace 1h",
    prioridad: "alta",
    dificultad: "baja",
    volumenSEO: "450",
    competencia: "baja"
  }
];

const tareasContenido = [
  {
    id: 1,
    titulo: "Guía completa: Cancelación de servicios telecomunicaciones",
    tipo: "Guía",
    estado: "en_progreso",
    prioridad: "alta",
    asignado: "Content Team",
    fechaLimite: "2024-01-15",
    progreso: 60
  },
  {
    id: 2,
    titulo: "FAQ: Reclamaciones de seguros paso a paso",
    tipo: "FAQ",
    estado: "revision",
    prioridad: "alta",
    asignado: "Legal Team",
    fechaLimite: "2024-01-12",
    progreso: 85
  },
  {
    id: 3,
    titulo: "Infografía: Derechos del consumidor online",
    tipo: "Visual",
    estado: "pendiente",
    prioridad: "media",
    asignado: "Design Team",
    fechaLimite: "2024-01-20",
    progreso: 0
  },
  {
    id: 4,
    titulo: "Calculator: Indemnización vuelos retrasados",
    tipo: "Herramienta",
    estado: "completado",
    prioridad: "media",
    asignado: "Dev Team",
    fechaLimite: "2024-01-10",
    progreso: 100
  },
  {
    id: 5,
    titulo: "Video tutorial: Portabilidad móvil 2024",
    tipo: "Video",
    estado: "en_progreso",
    prioridad: "baja",
    asignado: "Video Team",
    fechaLimite: "2024-01-25",
    progreso: 30
  }
];

const getPrioridadColor = (prioridad: string) => {
  switch (prioridad) {
    case 'alta': return 'destructive';
    case 'media': return 'default';
    case 'baja': return 'secondary';
    default: return 'secondary';
  }
};

const getEstadoIcon = (estado: string) => {
  switch (estado) {
    case 'completado': return <CheckCircle2 className="w-4 h-4 text-[#4AA83A]" />;
    case 'en_progreso': return <Clock className="w-4 h-4 text-[#016689]" />;
    case 'revision': return <AlertCircle className="w-4 h-4 text-[#F46506]" />;
    case 'pendiente': return <FileText className="w-4 h-4 text-[#6E6E6E]" />;
    default: return <FileText className="w-4 h-4 text-[#6E6E6E]" />;
  }
};

export const BrechaContenido = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <Search className="w-6 h-6 text-[#016689]" />
        <h2>Brecha de Contenido</h2>
        <Badge variant="outline">6 Oportunidades Identificadas</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                Búsquedas Internas Sin Respuesta
              </CardTitle>
              <CardDescription>
                Términos más buscados sin contenido relevante - Ordenados por prioridad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Término de Búsqueda</TableHead>
                    <TableHead className="text-center">Frecuencia</TableHead>
                    <TableHead className="text-center">Prioridad</TableHead>
                    <TableHead className="text-center">Volumen SEO</TableHead>
                    <TableHead className="text-center">Competencia</TableHead>
                    <TableHead className="text-center">Acción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {busquedasSinRespuesta.map((busqueda) => (
                    <TableRow key={busqueda.id}>
                      <TableCell>
                        <div>
                          <p className="text-sm">{busqueda.termino}</p>
                          <p className="text-xs text-muted-foreground">
                            Última búsqueda: {busqueda.ultimaBusqueda}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline">{busqueda.frecuencia}</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={getPrioridadColor(busqueda.prioridad)}>
                          {busqueda.prioridad}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-sm">{busqueda.volumenSEO}/mes</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={
                          busqueda.competencia === 'alta' ? 'destructive' :
                          busqueda.competencia === 'media' ? 'default' : 'secondary'
                        }>
                          {busqueda.competencia}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button size="sm" variant="outline">
                          Crear Contenido
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                Cola de Contenido
              </CardTitle>
              <CardDescription>
                Tareas de contenido en curso y pendientes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {tareasContenido.map((tarea) => (
                <div key={tarea.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {getEstadoIcon(tarea.estado)}
                      <div>
                        <p className="text-sm">{tarea.titulo}</p>
                        <p className="text-xs text-muted-foreground">
                          {tarea.tipo} • {tarea.asignado}
                        </p>
                      </div>
                    </div>
                    <Badge variant={getPrioridadColor(tarea.prioridad)} className="text-xs">
                      {tarea.prioridad}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Progreso</span>
                      <span>{tarea.progreso}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#016689] h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${tarea.progreso}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Fecha límite: {tarea.fechaLimite}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};