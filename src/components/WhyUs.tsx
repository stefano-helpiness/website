import {
  TrendingUp,
  FileSearch,
  Lightbulb,
  CircleCheck,
  CircleDollarSign
} from "lucide-react";
import { motion } from "framer-motion"; // se non l'hai, fai: npm install framer-motion

const features = [
  {
    title: "Impatto tracciabile",
    description: "Ogni donazione è collegata a un progetto concreto. Le aziende possono vedere dove finiscono le risorse e quali risultati generano, in modo chiaro e misurabile.",
    icon: <TrendingUp className="h-8 w-8 text-orange-400" />
  },
  {
    title: "Trasparenza totale",
    description: "Rendiamo trasparente ogni passaggio: dalla scelta della donazione all’utilizzo dei fondi. Fiducia, dati, e trasparenza sono il cuore della nostra piattaforma.",
    icon: <CircleCheck className="h-8 w-8 text-green-400" />
  },
  {
    title: "Matching intelligente",
    description: "Usiamo criteri avanzati per connettere aziende ed enti non profit in base a valori comuni, bisogni reali e obiettivi condivisi.",
    icon: <Lightbulb className="h-8 w-8 text-sky-400" />
  },
  {
    title: "Visibilità per tutti",
    description: "Anche gli enti più piccoli possono emergere. Helpiness è uno strumento equo che valorizza ogni progetto ad alto impatto sociale, grande o piccolo che sia.",
    icon: <FileSearch className="h-8 w-8 text-[#FDE1D3]" />
  },
  {
    title: "Semplicità e supporto",
    description: "Donare è facile. La nostra piattaforma è intuitiva, guidata, e con assistenza umana sempre disponibile per ogni esigenza.",
    icon: <CircleDollarSign className="h-8 w-8 text-orange-400" />
  }
];

export default function WhyUs() {
  return (
    <div id="why-us" className="relative py-20 bg-gradient-to-b from-white via-orange-50 to-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Perché scegliere noi</h2>
        </div>

        <div className="relative">
          {features.map((feature, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} items-center gap-8 mb-32`}>
              
              {/* Blocco Specchietto */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-blue-400 shadow-md w-full md:w-2/5"
              >
                <div className="p-4 bg-blue-100 rounded-full inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>

              {/* Freccia solo se non ultimo */}
              {index !== features.length - 1 && (
                <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2">
                  <svg
                    width="200"
                    height="150"
                    viewBox="0 0 200 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      index % 2 === 0 ? "" : "scale-x-[-1]"
                    }`}
                  >
                    <path
                      d="M10 10 C 100 100, 100 0, 190 140"
                      stroke="#60a5fa"
                      strokeWidth="4"
                      fill="transparent"
                      markerEnd="url(#arrowhead)"
                    />
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="0"
                        refY="3"
                        orient="auto"
                      >
                        <path d="M0,0 L0,6 L9,3 z" fill="#60a5fa" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
