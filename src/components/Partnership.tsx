import { Building, Handshake, Briefcase, FileText } from "lucide-react";
import { useState } from "react";

const partnerTypes = [{
  title: "Aziende",
  description: "Interessate a rafforzare il loro impegno sociale attraverso iniziative ad alto impatto",
  icon: <Building className="h-12 w-12 text-orange-500" />,
  image: "/api/placeholder/600/400"
}, {
  title: "Enti del Terzo Settore",
  description: "Impegnati nel valorizzare i loro progetti fornendogli maggiore visibilità e trasparenza",
  icon: <Handshake className="h-12 w-12 text-green-500" />,
  image: "/api/placeholder/600/400"
}, {
  title: "Fondazioni e Università",
  description: "Per collaborazioni accademiche e iniziative di ricerca sull'impatto sociale",
  icon: <FileText className="h-12 w-12 text-blue-500" />,
  image: "/api/placeholder/600/400"
}, {
  title: "Incubatori e Acceleratori",
  description: "Allineati con i nostri valori e orientati alla crescita del progetto",
  icon: <Briefcase className="h-12 w-12 text-purple-500" />,
  image: "/api/placeholder/600/400"
}];

export default function Partnership() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  return (
    <div id="partnership" className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Partnership</h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mb-8"></div>
          <h3 className="text-2xl font-medium text-blue-700 mb-6">Cresciamo insieme, creiamo valore condiviso</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Helpiness è una piattaforma <span className="font-bold text-blue-700">collaborativa</span>: crediamo nel potere delle alleanze per generare 
            un impatto sociale più <span className="font-bold text-orange-600">tangibile</span>, più <span className="font-bold text-orange-600">solido</span> e più <span className="font-bold text-orange-600">diffuso</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partnerTypes.map((partner, index) => (
            <div 
              key={partner.title}
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-white rounded-xl z-0"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-xl opacity-30 transition-opacity duration-300"
                style={{backgroundImage: `url(${partner.image})`}}
              ></div>
              <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-black">
                <div className="bg-white/20 rounded-full p-4 mb-6">
                  {partner.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-center">{partner.title}</h4>
                <p className="text-black/90 text-center leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-4xl mx-auto transform -translate-y-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Vuoi diventare nostro partner?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Siamo sempre aperti a nuove partnership che condividono i nostri valori.
            Scrivici a <a href="mailto:info@helpinessworld.com" className="text-blue-600 hover:text-orange-500 transition-colors font-medium">info@helpinessworld.com</a> o utilizza il nostro form dedicato.
          </p>
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            onClick={() => window.location.href = '/partnership-form'}
          >
            Diventa partner
          </button>
        </div>
      </div>
    </div>
  );
}