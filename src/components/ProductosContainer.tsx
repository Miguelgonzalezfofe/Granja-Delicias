"use client";

import { useState } from "react";
import { productos as data } from "@/data/Productos";
import { FiltrosProductos } from "./Filtros";
import { GridProductos } from "./GridProductos";

export function ProductosContainer() {
  const [categorias, setCategorias] = useState(["carne", "pollo", "cerdo"]);
  const [orden, setOrden] = useState("precio-asc");

  const productosFiltrados = data
    .filter((p) => categorias.includes(p.categoria))
    .sort((a, b) => {
      if (orden === "precio-asc") return a.precio - b.precio;
      if (orden === "precio-desc") return b.precio - a.precio;
      return a.nombre.localeCompare(b.nombre);
    });

  return (
    <>
      <div id="productos">
        <FiltrosProductos
          categorias={categorias}
          setCategorias={setCategorias}
          orden={orden}
          setOrden={setOrden}
        />
        <GridProductos productos={productosFiltrados} />
      </div>
    </>
  );
}
