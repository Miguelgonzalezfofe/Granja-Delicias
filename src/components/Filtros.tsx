"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Props {
  categorias: string[];
  setCategorias: (value: string[]) => void;
  orden: string;
  setOrden: (value: string) => void;
}

export function FiltrosProductos({
  categorias,
  setCategorias,
  orden,
  setOrden,
}: Props) {
  const toggleCategoria = (categoria: string) => {
    setCategorias(
      categorias.includes(categoria)
        ? categorias.filter((c) => c !== categoria)
        : [...categorias, categoria]
    );
  };

  return (
    <div className="flex flex-wrap md:gap-6 mb-6 mt-8 justify-center items-center border border-primary rounded-xl mx-10 md:w-1/2 md:h-18 h-24 md:mx-auto">
      <div className="flex gap-4">
        {["carne", "pollo", "cerdo"].map((cat) => (
          <div key={cat} className="flex items-center gap-2">
            <Checkbox
              checked={categorias.includes(cat)}
              onCheckedChange={() => toggleCategoria(cat)}
              id={cat}
            />
            <Label htmlFor={cat} className="capitalize">
              {cat}
            </Label>
          </div>
        ))}
      </div>

      <Select value={orden} onValueChange={setOrden}>
        <SelectTrigger className="w-55">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="precio-asc">Precio menor a mayor</SelectItem>
          <SelectItem value="precio-desc">Precio mayor a menor</SelectItem>
          <SelectItem value="nombre">Nombre</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
