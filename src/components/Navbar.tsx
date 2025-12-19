import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menu = [
  { nombre: "Inicio", slug: "/" },
  { nombre: "Nosotros", slug: "/#nosotros" },
  { nombre: "Contacto", slug: "/#contacto" },
  { nombre: "Productos", slug: "/#productos" },
];

export function Navbar() {
  return (
    <header className="w-full fixed  bg-white z-10 shadow-inner  shadow-amber-100 ">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between md:justify-start px-4 gap-10">
        {/* Logo */}
        <img
          src="./Logo-Granja-Delicias.png"
          className="w-24 rounded-full"
          alt="logo Granja Delicias"
        />

        {/* Desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menu.map((m) => (
              <>
                <NavigationMenuItem>
                  <NavigationMenuLink href={m.slug} className="text-lg">
                    {m.nombre}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Acciones */}
        <div className="hidden md:flex gap-2">
          {/* <Button variant="ghost">Login</Button>
          <Button>Registro</Button> */}
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              ☰
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4 px-5 pt-8">
              {menu.map((m, i) => (
                <a key={i} href={m.slug}>
                  {m.nombre}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        {/* <p className="text-3xl ">{carrito}</p> */}
      </div>
    </header>
  );
}
