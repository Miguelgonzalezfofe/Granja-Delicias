import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Marca */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Granja Delicias</h3>
            <p className="text-sm text-muted-foreground">
              Productos frescos, calidad garantizada y atención cercana todos
              los días.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-3">
            <h4 className="font-medium">Navegación</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Inicio</li>
              <li>Productos</li>
              <li>Sobre nosotros</li>
              <li>Contacto</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <h4 className="font-medium">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +54 9 11 1234-5678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contacto@granjadelicias.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Buenos Aires, Argentina
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div className="space-y-3">
            <h4 className="font-medium">Seguinos</h4>
            <div className="flex gap-3">
              <Button size="icon" variant="outline">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Granja Delicias · Todos los derechos
          reservados
          <p>
            Desarrollador por{" "}
            <a
              href="https://miguelgfcode.vercel.app"
              className="underline"
              target="_blank"
            >
              {" "}
              Miguel Gonzalez{" "}
            </a>
          </p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
