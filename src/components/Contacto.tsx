import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";

export default function Contacto() {
  return (
    <section className="container mx-auto px-4 py-16" id="contacto">
      <div className="max-w-6xl mx-auto">
        <Card>
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold">Contacto</CardTitle>
            <p className="text-muted-foreground">
              Estamos para ayudarte. Escribinos cuando lo necesites.
            </p>
          </CardHeader>

          <Separator />

          <CardContent className="pt-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Teléfono / WhatsApp</p>
                    <p className="text-muted-foreground">+54 9 11 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      contacto@granjadelicias.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Horarios</p>
                    <p className="text-muted-foreground">
                      Lun a Sáb · 9:00 a 20:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">@granjadelicias</span>
                </div>
              </div>

              {/* Formulario */}
              <form className="space-y-4">
                <Input placeholder="Nombre completo" />
                <Input type="email" placeholder="Correo electrónico" />
                <Textarea placeholder="Escribí tu mensaje..." rows={5} />
                <Button className="w-full">Enviar mensaje</Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
