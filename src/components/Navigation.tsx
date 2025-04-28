import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aziendaOpen, setAziendaOpen] = useState(false);
  const [entiOpen, setEntiOpen] = useState(false);
  const {
    toast
  } = useToast();
  const handlePlatformAction = () => {
    toast({
      description: "Grazie per il tuo interesse, la piattaforma sarà operativa a breve, se desideri maggiori informazioni non esitare a scriverci alla nostra email!",
      className: "fixed top-20 right-4"
    });
  };
  return <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-gradient-to-l from-green-400 to-blue-500 shadow-sm backdrop-blur-sm">
    <div className="w-full flex items-center h-24">
      <div className="pl-0">
        <Link to="/">
          {/* <img src="/lovable-uploads/d07ceb7c-6c95-49ad-9ff9-db2a5d688ac7.png" alt="Helpiness Logo" className="h-16" /> */}
          <img src="/lovable-uploads/HelpinessLogo_v1.png" alt="Helpiness Logo" className="h-24" />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 mx-auto px-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-blue-100 text-lg text-white">Il Nostro Mondo</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] bg-white/90 backdrop-blur-md rounded-md shadow-lg">
                  <Link to="/chi-siamo" className="block p-3 hover:bg-blue-50 rounded-md">
                    Chi Siamo
                  </Link>
                  <Link to="/team" className="block p-3 hover:bg-blue-50 rounded-md">
                    Team
                  </Link>
                  <Link to="/perche-scegliere-noi" className="block p-3 hover:bg-blue-50 rounded-md">
                    Perché Scegliere Noi
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-950 bg-transparent text-lg text-white">Cosa Facciamo</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[250px] bg-white backdrop-blur-md rounded-md shadow-lg">
                  <div className="flex flex-col space-y-2">
                    <Link to="/percorso-aziende" className="block p-2 hover:bg-blue-50 rounded-md">
                      Aziende
                    </Link>
                    <Link to="/percorso-enti" className="block p-2 hover:bg-blue-50 rounded-md">
                      Enti
                    </Link>
                    <Link to="/modello-di-business" className="block p-2 hover:bg-blue-50 rounded-md">
                      Modello di Business
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/careers" className="text-white bg-transparent text-lg font-medium block p-2 rounded-md hover:backdrop-blur-md hover:bg-white hover:text-gray-950">
                Careers
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/careers" className="text-white bg-transparent text-lg font-medium block p-2 rounded-md hover:backdrop-blur-md hover:bg-white hover:text-gray-950">
                Partnership
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden md:flex items-center space-x-4 mr-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-white text-lg text-green-600 border-2 border-white transform transition-transform duration-300 hover:scale-105 hover:bg-white">
              Accedi alla piattaforma
            </Button>

          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuItem onClick={handlePlatformAction}>
              Registrati
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handlePlatformAction}>
              Accedi
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="md:hidden flex items-center ml-auto mr-2">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              <div className="space-y-4">
                <h3 className="font-medium mb-2">Il Nostro Mondo</h3>
                <Link to="/chi-siamo" className="block w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                  Chi Siamo
                </Link>
                <Link to="/team" className="block w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                  Team
                </Link>
                <Link to="/perche-scegliere-noi" className="block w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                  Perché Scegliere Noi
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium mb-2">Cosa Facciamo</h3>
                <Link to="/aziende" className="block w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                  Aziende
                </Link>
                <Link to="/enti" className="block w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                  Enti
                </Link>
                <Link to="/modello-di-business" className="block w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                  Modello di Business
                </Link>
              </div>

              <Link to="/careers" className="block w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                Careers
              </Link>

              <Link to="/partnership" className="block w-full text-left px-4 py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                Partnership
              </Link>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-4">
                Accedi alla piattaforma
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </nav>;
}