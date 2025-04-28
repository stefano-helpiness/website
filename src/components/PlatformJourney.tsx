
import { Card, CardContent } from "./ui/card";
import { FileText, Building2, Search, Gift, FileUp, ClipboardList, BarChart3, Star } from "lucide-react";

export default function PlatformJourney() {
  const steps = [{
    title: "Registrazione account",
    description: "Crea il tuo account aziendale in pochi minuti per accedere a tutti i servizi della piattaforma.",
    icon: <FileText className="h-8 w-8 text-blue-600" />
  }, {
    title: "Creazione profilo aziendale",
    description: "Completa il profilo della tua azienda con tutte le informazioni necessarie.",
    icon: <Building2 className="h-8 w-8 text-blue-600" />
  }, {
    title: "Ricerca dei progetti",
    description: "Esplora i progetti sociali disponibili sulla piattaforma.",
    icon: <Search className="h-8 w-8 text-blue-600" />
  }, {
    title: "Scelta della donazione",
    description: "Seleziona il tipo e l'entità della donazione per il progetto scelto.",
    icon: <Gift className="h-8 w-8 text-blue-600" />
  }, {
    title: "Possibilità di pubblicare prodotti",
    description: "Pubblica i prodotti che la tua azienda è pronta a donare.",
    icon: <FileUp className="h-8 w-8 text-blue-600" />
  }, {
    title: "Rendicontazione",
    description: "Accedi alla documentazione dettagliata delle donazioni effettuate.",
    icon: <ClipboardList className="h-8 w-8 text-blue-600" />
  }, {
    title: "Documentazione Fiscale",
    description: "Ci occupiamo noi di fornirti tutti i documenti fiscali necessari.",
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />
  }, {
    title: "Recensioni",
    description: "Condividi la tua esperienza e leggi le testimonianze degli enti beneficiari.",
    icon: <Star className="h-8 w-8 text-blue-600" />
  }];

  return <div id="platform-journey" className="py-16 bg-gradient-to-b from-white via-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900">Percorso Aziende</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Scopri come la tua azienda può contribuire a progetti sociali in modo 
            <span className="font-bold"> efficiente</span>, 
            <span className="font-bold"> trasparente</span> e 
            <span className="font-bold"> misurabile</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border border-blue-400 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>;
}
