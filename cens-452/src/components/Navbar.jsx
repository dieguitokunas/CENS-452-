import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown,  } from "lucide-react";

const Sublinks = [
  {
    texto: "Secundario de adultos",
    link: "/secundario_adultos",
  },
  {
    texto: "Formación laboral",
    link: "/cursos",
  },
  {
    texto: "Como inscribirme",
    link: "/contacto",
  },
];
const MenuMobile = [
  {
    titulo: "Inicio",
    link: "/",
  },
  {
    titulo: "Sobre nosotros",
    link: "/#SobreNosotros",
  },
  {
    titulo: "Institucional",
  },
  {
    titulo: "Contacto",
    link: "#",
  },
];
export const Navbar = () => {
  return (
    <>
      <nav
        className={`navbar-container  rounded-xs w-full h-fit bg-[var(--cens-gray-200)] py-2 px-2`}
      >
        <div className="flex w-full h-fit md:px-20 rounded-sm  justify-between items-center">
          <span className="flex gap-6 items-center h-full ">
            <img src="/logo.png" className="size-20 min-w-20 rounded-br-xl border-solid border-[var(--cens-yellow-900)] border-2" />
            <div className="max-sm:hidden grid grid-cols-[auto_auto_auto] items-center hover:bg-accent/10 cursor-pointer w-fit  px-8">
              <div className="flex items-center justify-center  w-2 px-4">
                <span className="text-3xl font-serif font-bold text-gray-800 rotate-90">
                  DE
                </span>
              </div>
              <div className="flex flex-col justify-center text-nowrap gap-1 text-left">
                <h1 className="text-lg font-serif font-bold text-gray-900">
                  Centro Educativo
                </h1>
                <h2 className="text-lg font-serif text-gray-700 tracking-wide">
                  de Nivel Secundario
                </h2>
              </div>
              <div className="flex items-center justify-center w-2 px-4">
                <span className="text-3xl font-serif font-bold text-yellow-800 rotate-90">
                  452
                </span>
              </div>
            </div>
          </span>
          {/*  */}
          {/*  */}
          {/* MENU DESKTOP */}
          {/*  */}
          {/*  */}
          <NavigationMenu viewport={false} className="max-md:hidden ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} `}
                  asChild
                >
                  <a href="/" className="!text-lg">
                    Inicio
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                  asChild
                >
                  <a href="/#SobreNosotros" className="!text-lg">
                    Sobre nosotros
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer !text-lg">
                  Institucional
                </NavigationMenuTrigger>

                <NavigationMenuContent className="md:!w-40 border-[var(--cens-gray-900)] !border-2 !border-solid">
                  <ul>
                    {Sublinks.map((elm) => (
                      <li key={elm.texto} className="*:w-full ">
                        <NavigationMenuLink asChild>
                          <a
                            href={elm.link}
                            className={`hover:!bg-[var(--cens-yellow-300)] font-medium leading-7 [&:not(:first-child)]:mt-6 `}
                          >
                            {elm.texto}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} `}
                  asChild
                >
                  <a className="!text-lg cursor-pointer">Contacto</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <SidebarTrigger className=" md:hidden *:!w-fit p-6" />

          {/*  */}
          {/*  */}
          {/* MENU MOBILE */}
          {/*  */}
          {/*  */}
        </div>
      </nav>





      <div className="md:hidden ">
        <Sidebar side="right" className="!fixed ">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>C.E.N.S N°452</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {/*  */}
                  {/*  */}
                  {/* Agregar acordion para la opcion de "Institucional y que despliegue las opciones que ofrece el CENS" */}
                  {/*  */}
                  {/*  */}
                  {MenuMobile.map((item, index) =>
                    index === 2 ? (
                      <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-0"
                        className="h-full w-full"
                      >
                        <AccordionItem value="item-1" className="mb-4 w-full">
                          <AccordionTrigger className="w-full group flex justify-between rounded-none border-b-2 border-solid border-gray-900  hover:border-gray-400 transition-colors text-lg data-[state=open]:bg-[var(--cens-blue-300)] hover:bg-[var(--cens-blue-400)]">
                            <p className="w-full text-start pl-2 leading-7 ">
                              {item.titulo}
                            </p>
                            <ChevronDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="flex flex-col justify-center h-full mt-4 gap-4 w-full">
                              {Sublinks.map((elm) => (
                                <li
                                  key={elm.texto}
                                  className="border-b-[1px] border-solid border-[var(--cens-gray-900)] w-full hover:bg-[var(--cens-blue-200)]"
                                >
                                  <a
                                    href={elm.link}
                                    className="pl-2 text-start scroll-m-20 font-semibold tracking-tight"
                                  >
                                    {elm.texto}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <SidebarMenuItem className="mb-4">
                        <SidebarMenuButton
                          asChild
                          className="rounded-none border-b-2 border-solid border-gray-900  hover:border-gray-900 hover:bg-[var(--cens-blue-400)] transition-colors text-lg"
                        >
                          <a href={item.link}>
                            <p className=" !w-full">{item.titulo}</p>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="w-full flex flex-col items-center mb-20">
                  <div className=" grid grid-cols-[auto_auto_auto] items-center hover:bg-accent/10 cursor-pointer w-fit  px-8">
                    <div className="flex items-center justify-center  w-2 px-4">
                      <span className="text-3xl font-serif font-bold text-gray-800 rotate-90">
                        DE
                      </span>
                    </div>
                    <div className="flex flex-col justify-center text-nowrap gap-1 text-left">
                      <h1 className="text-lg font-serif font-bold text-gray-900">
                        Centro Educativo
                      </h1>
                      <h2 className="text-lg font-serif text-gray-700 tracking-wide">
                        de Nivel Secundario
                      </h2>
                    </div>
                    <div className="flex items-center justify-center w-2 px-4">
                      <span className="text-3xl font-serif font-bold text-yellow-800 rotate-90">
                        452
                      </span>
                    </div>
                  </div>
                  <img
                    src="/logo.png"
                    className="size-40 rounded-br-xl border-solid border-[var(--cens-yellow-900)] border-2"
                  />
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

      </div>
    </>
  );
};
