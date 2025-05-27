import {
  TrendingUp,
  FileSearch,
  Lightbulb,
  CircleCheck,
  CircleDollarSign,
  ArrowDown
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const features = [
  {
    title: "Impatto tracciabile",
    description:
      "Ogni donazione è collegata a un progetto concreto. Le aziende possono vedere dove finiscono le risorse e quali risultati generano, in modo chiaro e misurabile.",
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    title: "Trasparenza totale",
    description:
      "Rendiamo trasparente ogni passaggio: dalla scelta della donazione all'utilizzo dei fondi. Fiducia, dati, e trasparenza sono il cuore della nostra piattaforma.",
    icon: <CircleCheck className="h-10 w-10 text-white" />,
    bgColor: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
  {
    title: "Matching intelligente",
    description:
      "Usiamo criteri avanzati per connettere aziende ed enti non profit in base a valori comuni, bisogni reali e obiettivi condivisi.",
    icon: <Lightbulb className="h-10 w-10 text-white" />,
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",

  },
  {
    title: "Visibilità per tutti",
    description:
      "Anche gli enti più piccoli possono emergere. Helpiness è uno strumento equo che valorizza ogni progetto ad alto impatto sociale, grande o piccolo che sia.",
    icon: <FileSearch className="h-10 w-10 text-white" />,
    bgColor: "bg-gradient-to-br from-amber-400 to-amber-600",
  },
  {
    title: "Semplicità e supporto",
    description:
      "Donare è facile. La nostra piattaforma è intuitiva, guidata, e con assistenza umana sempre disponibile per ogni esigenza.",
    icon: <CircleDollarSign className="h-10 w-10 text-white" />,
    bgColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
  }
];

// Componente per l'animazione della connessione
const Connection = ({ index }) => {
  return (
    <div className="relative flex justify-center my-6 h-24">
      <div className="absolute h-full w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10"
      >
        <ArrowDown className="h-6 w-6 text-gray-500" />
      </motion.div>
    </div>
  );
};

// Componente per la scheda feature
const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
      {index > 0 && <Connection index={index} />}
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Icona e titolo (lato sinistro per desktop) */}
          <div className="md:w-1/3 flex md:justify-end">
            <div className="flex flex-col items-center md:items-end">
              <div className={`${feature.bgColor} p-5 rounded-2xl shadow-lg mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl md:text-right font-bold">{feature.title}</h3>
            </div>
          </div>
          
          {/* Contenuto centrale */}
          <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          
          {/* Descrizione e testimonianza (lato destro per desktop) */}
          <div className="md:w-2/3">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <p className="text-gray-700 mb-6">{feature.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Animazione per il "blob" di background
const BackgroundBlob = ({ color, delay, duration, size, top, left }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 1],
        opacity: [0, 0.3, 0.2]
      }}
      transition={{ 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: duration,
        delay: delay,
        ease: "easeInOut" 
      }}
      className={`absolute rounded-full blur-3xl opacity-20 ${color} ${size}`}
      style={{ top: top, left: left }}
    ></motion.div>
  );
};

export default function WhyUs() {
  return (
    <div id="why-us" className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-blue-50 to-blue-100">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-xl font-medium mb-4">
            La nostra unicità
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Perché scegliere noi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un percorso di impatto costruito su valori concreti e risultati misurabili
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline centrale */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"></div>
          
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* Finale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg">
              <div className="bg-white p-3 rounded-full">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-3-4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <h3 className="mt-6 text-2xl font-bold text-gray-900">Il tuo viaggio di impatto inizia qui</h3>
            <p className="mt-3 max-w-2xl mx-auto text-gray-600">
              Unisciti a noi per trasformare il modo in cui le donazioni aziendali creano un impatto duraturo nella società
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 shadow-md transition duration-200"
            >
              Accedi alla piattaforma
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}