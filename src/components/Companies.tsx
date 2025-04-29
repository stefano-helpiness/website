import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { useNavigate } from "react-router-dom";
export default function Companies() {
  const navigate = useNavigate();
  return <div className="py-16 bg-gradient-to-b from-white via-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900">Per le Aziende</h2>
          
          <NavigationMenu className="mt-8 inline-flex justify-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => navigate("/percorso-aziende")} className="bg-blue-600 text-white hover:bg-blue-700">
                  Percorso Aziende
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => navigate("/opportunita-aziende")} className="bg-blue-600 text-white hover:bg-blue-700 ml-4">
                  Opportunità per le Aziende
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>;
}