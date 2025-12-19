import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function SobreNosotros() {
  return (
    <section className="container mx-auto px-4 py-16" id="nosotros">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="text-center space-y-2">
            <Badge className="mx-auto w-fit">Nuestra historia</Badge>
            <CardTitle className="text-3xl font-bold">Sobre Nosotros</CardTitle>
            <p className="text-muted-foreground">
              Calidad, confianza y sabor directo a tu mesa
            </p>
          </CardHeader>

          <Separator />

          <CardContent className="space-y-6 pt-6 text-muted-foreground">
            <p>
              En <strong>Granja Delicias</strong> trabajamos todos los días para
              ofrecer productos frescos, seleccionados y de la mejor calidad.
              Creemos que una buena alimentación comienza con ingredientes
              confiables y un trato cercano.
            </p>

            <p>
              Nuestro compromiso es brindarte cortes y productos elaborados con
              responsabilidad, cuidando cada etapa del proceso, desde el origen
              hasta tu hogar.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              <Card className="text-center border-primary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold">Calidad garantizada</h3>
                  <p className="text-sm mt-2">
                    Productos frescos y seleccionados
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold">Atención personalizada</h3>
                  <p className="text-sm mt-2">
                    Cercanía y confianza con cada cliente
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold">Precios justos</h3>
                  <p className="text-sm mt-2">Calidad sin pagar de más</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
