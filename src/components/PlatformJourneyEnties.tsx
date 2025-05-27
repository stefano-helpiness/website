import { motion } from "framer-motion";
import { 
  FileText, 
  Building2, 
  Search, 
  FileSearch, 
  FileUp, 
  ClipboardList, 
  BarChart3, 
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function PlatformJourneyEntities() {
  const steps = [
    {
      title: "Registrazione account",
      description: "Crea il tuo account per l'ente non profit in pochi minuti per accedere a tutti i servizi della piattaforma.",
      icon: <FileText className="h-8 w-8 text-white" />,
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      visualContent: {
        metrics: "2 minuti per registrarsi",
        benefit: "Inizia il tuo percorso nella piattaforma"
      }
    }, 
    {
      title: "Creazione profilo",
      description: "Completa il profilo del tuo ente con tutte le informazioni necessarie.",
      icon: <Building2 className="h-8 w-8 text-white" />,
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
      visualContent: {
        metrics: "Profilo verificato",
        benefit: "Visibile a tutti gli altri utenti"
      }
    }, 
    {
      title: "Pubblicazione progetto",
      description: "Inserisci tutti i dettagli e le specifiche del tuo progetto sociale.",
      icon: <Search className="h-8 w-8 text-white" />,
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      visualContent: {
        metrics: "Visibilità immediata",
        benefit: "Cattura l’attenzione con una descrizione coinvolgente"
      }
    }, 
    {
      title: "Raccolta risorse",
      description: "Raccogli donazioni monetarie e materiali per il tuo progetto.",
      icon: <FileSearch className="h-8 w-8 text-white" />,
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
      visualContent: {
        metrics: "Specifica ció di cui hai bisogno",
        benefit: "Notifiche in tempo reale sulle nuove donazioni"
      }
    }, 
    {
      title: "Chiusura progetto",
      description: "Completa e finalizza il tuo progetto sociale.",
      icon: <FileUp className="h-8 w-8 text-white" />,
      bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
      visualContent: {
        metrics: "Passa all’azione",
        benefit: "Utilizza le risorse raccolte con le modalitá descritte nel progetto"
      }
    }, 
    {
      title: "Rendicontazione",
      description: "Compila il questionario per certificare l'avvenuta realizzazione del progetto.",
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      bgColor: "bg-gradient-to-br from-violet-500 to-purple-600",
      visualContent: {
        metrics: "Domande semplici e guidate",
        benefit: "Aiuta le aziende a quantificare l'impatto generato"
      }
    }, 
    {
      title: "Recensioni",
      description: "Condividi la tua esperienza e leggi le testimonianze di altri enti.",
      icon: <Star className="h-8 w-8 text-white" />,
      bgColor: "bg-gradient-to-br from-amber-500 to-orange-600",
      visualContent: {
        metrics: "Recensioni pubbliche e visibili",
        benefit: "Aumento della visibilità per progetti futuri"
      }
    }
  ];

  const {
      toast
    } = useToast();
    const handlePlatformAction = () => {
      toast({
        description: "Grazie per il tuo interesse! La piattaforma sarà operativa a breve, se desideri maggiori informazioni non esitare a scriverci alla nostra email!",
        className: "fixed top-20 left-1/2 -translate-x-1/2 w-[70%]"
      });
    };

  // Animazione per i singoli elementi
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: i => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.1
      }
    })
  };

    // Componente per le linee di connessione
    const ConnectionLine = () => (
      <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-px">
        <motion.div 
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-blue-300 to-blue-500"
        />
      </div>
    );

  return (
    <div id="platform-journey" className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Percorso Guidato
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Percorso Enti</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri come il tuo ente può realizzare progetti sociali in modo{" "}
            <span className="font-bold text-blue-700">efficiente</span>,{" "}
            <span className="font-bold text-blue-700">trasparente</span> e{" "}
            <span className="font-bold text-blue-700">misurabile</span>.
          </p>
        </motion.div>
        
        {/* Journey map con timeline visuale */}
        <div className="relative mb-24">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 transform -translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`relative flex flex-col mb-16 lg:mb-24 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
            >
              {/* Indicatore sulla timeline */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center shadow-md">
                  <span className="text-blue-700 font-bold">{index + 1}</span>
                </div>
              </div>
              
              {/* Card contenuto */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Angolo decorativo */}
                  <div className="absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 rounded-full bg-blue-50"></div>
                  
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg mr-4 ${step.bgColor}`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Elemento visuale di completamento */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-500">
                      {index < steps.length - 1 ? "Passa allo step successivo" : "Completa il percorso"}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Elemento centrale vuoto (solo per desktop) */}
              <div className="hidden lg:block w-2/12"></div>
              
              {/* Visualizzazione avanzata invece di semplici icone */}
              <div className="hidden lg:flex w-5/12 items-center justify-center">
                <div className="w-full max-w-xs">
                  <div className="relative rounded-lg bg-white p-6 shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col items-center">
                      {/* Icona principale */}
                      <div className={`p-4 rounded-full ${step.bgColor} mb-4`}>
                        {step.icon}
                      </div>
                      
                      {/* Contenuto informativo */}
                      <div className="text-center mt-2">
                        <div className="flex items-center justify-center mb-3">
                          <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
                            {step.visualContent.metrics}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center mt-3">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {step.visualContent.benefit}
                          </span>
                        </div>
                        
                        {/* Indicatore dello step attuale */}
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <span className={`text-xs text-white font-medium ${step.bgColor} bg-opacity-20 px-3 py-1 rounded-full`}>
                            Step {index + 1} di {steps.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 px-4"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 mb-8">
            <div className="bg-white p-2 rounded-full">
              <ArrowRight className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Pronto a realizzare il tuo progetto?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Unisciti agli enti che stanno già creando impatto sociale attraverso la nostra piattaforma.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handlePlatformAction}
          >
            Registra il tuo ente
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}