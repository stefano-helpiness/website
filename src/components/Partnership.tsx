import { Building, Handshake, Briefcase, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

const partnerTypes = [{
  title: "Aziende",
  description: "Interessate a rafforzare il loro impegno sociale attraverso iniziative ad alto impatto",
  icon: <Building className="h-8 w-8 text-orange-400" />,
  image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
}, {
  title: "Enti del Terzo Settore",
  description: "Impegnati nel valorizzare i loro progetti fornendogli maggiore visibilità e trasparenza",
  icon: <Handshake className="h-8 w-8 text-green-400" />,
  image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
}, {
  title: "Fondazioni e Università",
  description: "Per collaborazioni accademiche e iniziative di ricerca sull'impatto sociale",
  icon: <FileText className="h-8 w-8 text-sky-400" />,
  image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
}, {
  title: "Incubatori e Acceleratori",
  description: "Allineati con i nostri valori e orientati alla crescita del progetto",
  icon: <Briefcase className="h-8 w-8 text-orange-400" />,
  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
}];

export default function Partnership() {
  return <div id="partnership" className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900">Partnership</h2>
          <h3 className="text-3xl font-medium mt-2 text-blue-600">Cresciamo insieme, creiamo valore condiviso</h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Helpiness è una piattaforma <span className="font-bold">collaborativa</span>: crediamo nel potere delle alleanze per generare 
            un impatto sociale più <span className="font-bold">tangibile</span>, più <span className="font-bold">solido</span> e più <span className="font-bold">diffuso</span>.
          </p>
        </div>
        
        <div className="space-y-16">
          {partnerTypes.map((partner, index) => <div key={partner.title} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2">
                <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-64">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex justify-center bg-transparent">
                      {partner.icon}
                    </div>
                    <h4 className="text-3xl font-semibold mb-2 text-center">{partner.title}</h4>
                    <p className="text-gray-600 text-xl text-center">{partner.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="w-1/2">
                <img src={partner.image} alt={partner.title} className="rounded-lg shadow-lg object-cover h-64 w-full" />
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Vuoi diventare nostro partner?</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Siamo sempre aperti a partnership.
            Scrivici a <a href="mailto:info@helpiness.it" className="text-blue-600 hover:underline">info@helpinessworld.com</a> o usa il form qui sotto.
          </p>
          <Link to="/partnership-form">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Diventa partner
            </Button>
          </Link>
        </div>
      </div>
    </div>;
}
