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
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./ui/sidebar";


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
        className={`navbar-container  rounded-xs w-full h-fit  bg-[#588427] px-2`}
      >
        <div className="flex w-full h-20 md:px-20 rounded-sm  justify-between items-center">
          <span className="flex gap-6 items-center h-full ">
            <img src="/logo.png" className="size-20 min-w-20 rounded-sm" />
            <div className="max-xl:hidden grid grid-cols-[1fr_auto] hover:bg-accent/10 cursor-pointer w-fit items-center h-32 px-8">
              <div className="flex flex-col justify-center text-nowrap gap-1 text-left">
                <h1 className="text-lg font-serif font-bold text-gray-900">
                  Centro Educativo
                </h1>
                <h2 className="text-lg font-serif text-gray-700 tracking-wide">
                  de Nivel Secundario
                </h2>
              </div>

              <div className="flex items-center justify-center  w-2 px-4">
                <span className="text-3xl font-serif font-bold text-gray-800 rotate-90">
                  DE
                </span>
              </div>
            </div>
          </span>
          {/*  */}
          {/*  */}
          {/* MENU DESKTOP */}
          {/*  */}
          {/*  */}
          <NavigationMenu viewport={false} className="max-sm:hidden ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`} asChild>
                  <a href="/">Inicio</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                  asChild
                >
                  <a href="/#SobreNosotros">Sobre nosotros</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer">
                  Institucional
                </NavigationMenuTrigger>

                <NavigationMenuContent className="md:!w-40">
                  <ul>
                    {Sublinks.map((elm) => (
                      <li key={elm.texto} className="*:w-full ">
                        <NavigationMenuLink asChild>
                          <a
                            href={elm.link}
                            className={`hover:!bg-[#588427] font-medium `}
                          >
                            {elm.texto}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <SidebarTrigger className=" sm:hidden *:!w-fit p-6" />

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
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {/*  */}
                  {/*  */}
                  {/* Agregar acordion para la opcion de "Institucional y que despliegue las opciones que ofrece el CENS" */}
                  {/*  */}
                  {/*  */}
                  {MenuMobile.map((item) => (
                    <SidebarMenuItem key={item.titulo}>
                      <SidebarMenuButton asChild>
                        <a href={item.link}>
                          <span>{item.titulo}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  );
};
