import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

export default function BusinessModel() {
  const plans = [
    {
      name: "Essential",
      // price: "€0",
      // totalAmount: "€0",
      // totalPeriod: "/anno",
      // period: "/mese",
      note: "Funzioni Base:",
      features: [
        "Donazioni monetarie",
        "Documentazione fiscale per donazioni monetarie",
        "Rendicontazione per certificare e quantificare l'impatto (per donazioni monetarie)"
      ],
      recommended: false
    },
    {
      name: "Plus",
      // price: "€125",
      // totalAmount: "€1.500",
      // totalPeriod: "/anno",
      // period: "/mese",
      note: "Tutte le funzioni Essential più:",
      features: [
        "Donazioni di prodotti fino a 20 Tonnellate",
        "Documentazione fiscale per donazioni di prodotti",
        "Multiutenza fino a 3 utenti"
      ],
      recommended: false
    },
    {
      name: "Impact",
      // price: "€275",
      // totalAmount: "€3.300",
      // totalPeriod: "/anno",
      // period: "/mese",
      note: "Tutte le funzioni Plus più:",
      features: [
        "Donazione di prodotti senza limiti",
        "Rendicontazione per certificare e quantificare l'impatto",
        "Multiutenza con utenti illimitati"
      ],
      recommended: false
    }
  ];

  return (
    <div id="business-model" className="py-16 bg-gradient-to-b from-white via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold">Il nostro modello di business</h2>
          <p className="mt-4 text-lg text-gray-600">Scegli il piano più adatto alle esigenze della tua azienda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-4">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative h-full flex flex-col border-blue-400 ${plan.recommended ? 'border-2' : 'border'}`}>
              {plan.recommended && (
                <Badge className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-blue-500">
                  Consigliato
                </Badge>
              )}
              <CardHeader className="flex">
                <h3 className="text-5xl font-bold text-blue-600">{plan.name}</h3>
                <div className="flex items-baseline mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-gray-500">{plan.period}</span>
                </div>
                <div className="flex items-baseline mt-4">
                  <span className="text-xl font-bold">{plan.totalAmount}</span>
                  <span className="ml-1 text-gray-500">{plan.totalPeriod}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <h3 className="text-xl font-bold text-blue-600">{plan.note}</h3>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Scegli {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div >
          <div className=" font-bold p-4">
            {/* <h3 className="text-xl font-bold mb-4">Commissione sulle donazioni</h3> */}
            <p>*Durante la fase di testing, tutti i pacchetti di abbonamento saranno completamente gratuiti per consentire a tutte le aziende di scoprire e utilizzare la piattaforma senza costi.</p>
          </div>

          <div className="bg-blue-50 text-blue-900 rounded-lg p-8 mt-4 border border-blue-400">
            <h3 className="text-xl font-bold mb-4">Commissione sulle donazioni</h3>
            <p>Applichiamo una commissione percentuale su ogni donazione monetaria completata, per sostenere la piattaforma e continuare a migliorare i nostri servizi.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
