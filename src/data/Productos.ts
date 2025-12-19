// import type { Producto } from "@/hook/useCarrito";

import roasBeef from "@/assets/media/img/productos/roas_beef.webp";
import paleta from "@/assets/media/img/productos/paleta.webp";
import matambre_carne from "@/assets/media/img/productos/matambre_carne.webp";
import asado from "@/assets/media/img/productos/asado.webp";
import vacio from "@/assets/media/img/productos/vacio.webp";
import bife_ancho from "@/assets/media/img/productos/bife_ancho.webp";
import bife_angosto from "@/assets/media/img/productos/bife_angosto.webp";
import bife_chorizo from "@/assets/media/img/productos/bife_chorizo.webp";
import ojo_de_bife from "@/assets/media/img/productos/ojo_de_bife.webp";
import lomo from "@/assets/media/img/productos/lomo.webp";
import tapa_de_asado from "@/assets/media/img/productos/tapa_de_asado.webp";
import tapa_de_nalga from "@/assets/media/img/productos/tapa_de_nalga.webp";
import entrana from "@/assets/media/img/productos/entraña.webp";
import picada from "@/assets/media/img/productos/picada.webp";
import osobuco from "@/assets/media/img/productos/osobuco.webp";
import cuadrada from "@/assets/media/img/productos/cuadrada.webp";
import bola_de_lomo from "@/assets/media/img/productos/bola_de_lomo.webp";
import nalga from "@/assets/media/img/productos/nalga.webp";
import peceto from "@/assets/media/img/productos/peceto.webp";
import riñonada from "@/assets/media/img/productos/riñonada.webp";
import colita from "@/assets/media/img/productos/colita.webp";
import burguee_carne from "@/assets/media/img/productos/burguee_carne.webp";
import mila_de_carne from "@/assets/media/img/productos/mila_de_carne.webp";

import suprema from "@/assets/media/img/productos/suprema.webp";
import pata_muslo from "@/assets/media/img/productos/pata_muslo.webp";
import pollo from "@/assets/media/img/productos/pollo.webp";
import churrasco from "@/assets/media/img/productos/churrasco.webp";
import mila_pollo from "@/assets/media/img/productos/mila_pollo.webp";
import mila_pata_muslo from "@/assets/media/img/productos/mila_pata_muslo.webp";

import bondiola from "@/assets/media/img/productos/bondiola.webp";
import pechito from "@/assets/media/img/productos/pechito.webp";
import costillitas from "@/assets/media/img/productos/costillitas.webp";
import carre from "@/assets/media/img/productos/carre.webp";
import solomillo from "@/assets/media/img/productos/solomillo.webp";
import chuleta_paleta from "@/assets/media/img/productos/chuleta_paleta.webp";

export const productos = [
  {
    id: 1,
    nombre: "Roast beef",
    precio: 3580,
    imagen: roasBeef.src,
    categoria: "carne",
  },
  {
    id: 2,
    nombre: "Paleta",
    precio: 3720,
    imagen: paleta.src,
    categoria: "carne",
  },
  {
    id: 3,
    nombre: "Matambre",
    precio: 3630,
    imagen: matambre_carne.src,
    categoria: "carne",
  },
  {
    id: 4,
    nombre: "Asado",
    precio: 3900,
    imagen: asado.src,
    categoria: "carne",
  },
  {
    id: 5,
    nombre: "Vacío",
    precio: 4500,
    imagen: vacio.src,
    categoria: "carne",
  },
  {
    id: 6,
    nombre: "Bife ancho",
    precio: 3640,
    imagen: bife_ancho.src,
    categoria: "carne",
  },
  {
    id: 7,
    nombre: "Bife angosto",
    precio: 4110,
    imagen: bife_angosto.src,
    categoria: "carne",
  },
  {
    id: 8,
    nombre: "Bife de chorizo",
    precio: 5260,
    imagen: bife_chorizo.src,
    categoria: "carne",
  },
  {
    id: 9,
    nombre: "Ojo de bife",
    precio: 5260,
    imagen: ojo_de_bife.src,
    categoria: "carne",
  },
  {
    id: 10,
    nombre: "Lomo",
    precio: 5260,
    imagen: lomo.src,
    categoria: "carne",
  },
  {
    id: 11,
    nombre: "Tapa de asado",
    precio: 3920,
    imagen: tapa_de_asado.src,
    categoria: "carne",
  },
  {
    id: 12,
    nombre: "Tapa de nalga",
    precio: 3920,
    imagen: tapa_de_nalga.src,
    categoria: "carne",
  },
  {
    id: 13,
    nombre: "Entraña",
    precio: 5260,
    imagen: entrana.src,
    categoria: "carne",
  },
  {
    id: 14,
    nombre: "Picada Premium",
    precio: 3550,
    imagen: picada.src,
    categoria: "carne",
  },
  {
    id: 15,
    nombre: "Osobuco",
    precio: 2710,
    imagen: osobuco.src,
    categoria: "carne",
  },
  {
    id: 16,
    nombre: "Cuadrada",
    precio: 4760,
    imagen: cuadrada.src,
    categoria: "carne",
  },
  {
    id: 17,
    nombre: "Bola de lomo",
    precio: 4760,
    imagen: bola_de_lomo.src,
    categoria: "carne",
  },
  {
    id: 18,
    nombre: "Nalga",
    precio: 5070,
    imagen: nalga.src,
    categoria: "carne",
  },
  {
    id: 19,
    nombre: "Peceto",
    precio: 6150,
    imagen: peceto.src,
    categoria: "carne",
  },
  {
    id: 20,
    nombre: "Riñonada de cuadril",
    precio: 5190,
    imagen: riñonada.src,
    categoria: "carne",
  },
  {
    id: 21,
    nombre: "Colita de cuadril",
    precio: 5700,
    imagen: colita.src,
    categoria: "carne",
  },
  {
    id: 22,
    nombre: "Hamburguesa de carne",
    precio: 4370,
    imagen: burguee_carne.src,
    categoria: "carne",
  },
  {
    id: 23,
    nombre: "Milanesa de carne",
    precio: 4100,
    imagen: mila_de_carne.src,
    categoria: "carne",
  },
  {
    id: 24,
    nombre: "Milanesa de peceto",
    precio: 4900,
    imagen: mila_de_carne.src,
    categoria: "carne",
  },

  // =====================
  // POLLO
  // =====================
  {
    id: 25,
    nombre: "Suprema",
    precio: 3800,
    imagen: suprema.src,
    categoria: "pollo",
  },
  {
    id: 26,
    nombre: "Pata muslo",
    precio: 1450,
    imagen: pata_muslo.src,
    categoria: "pollo",
  },
  {
    id: 27,
    nombre: "Pollo entero",
    precio: 1390,
    imagen: pollo.src,
    categoria: "pollo",
  },
  {
    id: 28,
    nombre: "Churrasco de pata muslo",
    precio: 3550,
    imagen: churrasco.src,
    categoria: "pollo",
  },
  {
    id: 29,
    nombre: "Milanesa de suprema",
    precio: 3450,
    imagen: mila_pollo.src,
    categoria: "pollo",
  },
  {
    id: 30,
    nombre: "Milanesa de pata muslo",
    precio: 3150,
    imagen: mila_pata_muslo.src,
    categoria: "pollo",
  },

  // =====================
  // CERDO
  // =====================
  {
    id: 31,
    nombre: "Bondiola",
    precio: 5100,
    imagen: bondiola.src,
    categoria: "cerdo",
  },
  {
    id: 32,
    nombre: "Pechito",
    precio: 2850,
    imagen: peceto.src,
    categoria: "cerdo",
  },
  {
    id: 33,
    nombre: "Costillitas",
    precio: 2880,
    imagen: costillitas.src,
    categoria: "cerdo",
  },
  {
    id: 34,
    nombre: "Carre deshuesado",
    precio: 5000,
    imagen: carre.src,
    categoria: "cerdo",
  },
  {
    id: 35,
    nombre: "Solomillo",
    precio: 5000,
    imagen: solomillo.src,
    categoria: "cerdo",
  },
  {
    id: 36,
    nombre: "Chuleta paleta",
    precio: 2200,
    imagen: chuleta_paleta.src,
    categoria: "cerdo",
  },
];
