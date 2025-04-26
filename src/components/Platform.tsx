
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export default function Platform() {
  return (
    <div id="platform" className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900">La nostra piattaforma</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Aiutiamo aziende ed enti non-profit a incontrarsi nel modo giusto, con strumenti semplici 
            per donare in modo intelligente, mirato e trasparente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Gli enti caricano progetti</h3>
            <p className="text-gray-600">
              Presentano iniziative con descrizioni dettagliate, obiettivi, budget necessario e impatto previsto.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center">
              <ArrowDown className="mx-auto h-8 w-8 text-blue-400" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Le aziende selezionano</h3>
              <p className="text-gray-600">
                Consultano, valutano e scelgono i progetti da sostenere con donazioni monetarie o materiali.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center">
              <ArrowDown className="mx-auto h-8 w-8 text-blue-400" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Impatto e rendicontazione</h3>
              <p className="text-gray-600">
                Tracciamento completo di ogni donazione, misurazione dell'impatto e documentazione fiscale.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Ci occupiamo anche di tutta la documentazione fiscale per entrambe le parti, 
            offriamo un servizio di matching intelligente e supportiamo le aziende 
            nella misurazione del loro impatto, attraverso un sistema di rendicontazione 
            utile sia per il bilancio di sostenibilità, sia per le attività di comunicazione.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Accedi alla piattaforma
          </Button>
        </div>
      </div>
    </div>
  );
}
