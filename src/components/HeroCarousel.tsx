"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "El mejor asado para el mejor asador",
    description: "Cortes seleccionados y calidad premium para tu parrilla.",
    cta: "Comprar Ahora",
    image: "/media/img/banners/envios_carniceria.webp",
  },
  {
    title: "Envíos rápidos y seguros a tu hogar",
    description: "Recibí tu pedido fresco y a tiempo, sin complicaciones.",
    cta: "Consultar envíos",
    image: "/media/img/banners/banner-pinchos.png",
  },
  {
    title: "Carne irresistibles listos para la parrilla",
    description: "Prácticos, sabrosos y listos en minutos",
    cta: "Ver Promos",
    image: "/media/img/banners/pinchos_banner.png",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-[80vh] flex items-center justify-center">
                {/* Imagen */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Contenido */}
                <div className="relative z-10 max-w-3xl px-4 text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
                  <Button className="mt-6">{slide.cta}</Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
