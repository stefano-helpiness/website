import { 
  TrendingUp, 
  FileSearch, 
  Lightbulb, 
  CircleCheck, 
  CircleDollarSign 
} from "lucide-react";

const features = [
  {
    title: "Impatto tracciabile",
    description: "Ogni donazione è collegata a un progetto concreto. Le aziende possono vedere dove finiscono le risorse e quali risultati generano, in modo chiaro e misurabile.",
    icon: <TrendingUp className="h-8 w-8 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "Trasparenza totale",
    description: "Diamo visibilità a ogni passaggio: chi riceve, come usa, cosa ottiene. Fiducia, dati, e rendicontazione sono il cuore della nostra piattaforma.",
    icon: <CircleCheck className="h-8 w-8 text-green-400" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "Matching intelligente",
    description: "Usiamo criteri avanzati per connettere aziende ed enti non profit in base a valori comuni, bisogni reali e obiettivi condivisi.",
    icon: <Lightbulb className="h-8 w-8 text-sky-400" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "Spazio per tutti",
    description: "Anche gli enti più piccoli possono emergere. Helpiness è uno strumento equo che valorizza ogni progetto ad alto impatto sociale, grande o piccolo.",
    icon: <FileSearch className="h-8 w-8 text-[#FDE1D3]" />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "Semplicità e supporto",
    description: "Donare è facile. La nostra piattaforma è intuitiva, guidata, e con assistenza umana sempre disponibile per ogni esigenza.",
    icon: <CircleDollarSign className="h-8 w-8 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&h=300"
  }
];

export default function WhyUs() {
  return (
    <div id="why-us" className="py-16 bg-gradient-to-b from-white via-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900">Perché scegliere noi</h2>
        </div>
        
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`flex items-center gap-8 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              <div className="flex-1">
                <div className="bg-gray-50 p-6 rounded-lg border border-blue-400 hover:shadow-md transition-shadow duration-300">
                  <div className="p-3 bg-blue-100 rounded-full mb-4 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
              <div className="flex-1">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
