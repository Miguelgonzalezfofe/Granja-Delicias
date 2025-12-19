"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Producto } from "@/hook/useCarrito";
import { Image } from "astro:assets";

interface Props {
  productos: Producto[];
}

export function GridProductos({ productos }: Props) {
  // const addCarrito = useCarrito((s) => s.addCarrito);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-10">
      {productos.map((producto) => (
        <Card
          key={producto.id}
          className="flex flex-col hover:scale-105 transition-all duration-100"
        >
          <CardHeader className="p-2">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              loading="lazy"
              className="rounded-md object-cover w-full h-auto"
            />
          </CardHeader>

          <CardContent className="flex-1">
            <h3 className="font-semibold text-sm">{producto.nombre}</h3>
            <p className="font-bold text-green-600">${producto.precio}</p>
          </CardContent>

          <CardFooter>
            <Button
              className="w-full"
              onClick={() => {
                console.log("produCto");
              }}
            >
              Agregar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
