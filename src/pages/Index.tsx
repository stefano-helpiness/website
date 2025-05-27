
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import { Building, FileText, Users, CheckCircle, Heart, ArrowDownRight, ArrowDownLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const companyBenefits = [
    {
      text: "Una dashboard unica per concretizzare  in modo semplice e veloce il proprio impegno sociale",
      icon: <Building className="h-6 w-6 text-blue-600" />
    },
    {
      text: "Possibilità di impostare criteri di selezione chiari e trasparenti",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      text: "Report d'impatto pronto per il bilancio di sostenibilità e per attività di comunicazione",
      icon: <FileText className="h-6 w-6 text-blue-600" />
    },
    {
      text: "Documentazione fiscale completa per tutte le donazioni",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    }
  ];

  const nonProfitBenefits = [
    {
      text: "Uno spazio dedicato per raccontare progetti, obiettivi e bisogni",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      text: "Accesso ad un'ampia platea di aziende interessate a sostenere il territorio",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      text: "Possibilità di ottenere donazioni in denaro o di beni materiali",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      text: "Visibilità e supporto alle loro attività",
      icon: <Users className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <PageLayout>
      <Hero />

      <div className="bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 min-h-screen">
        {/* Contenitore principale con sfondo */}
        <div className="w-full px-10 sm:px-6 lg:px-8 py-16 bg-gray-100">
          {/* Contenitore centrato */}
          <div className="w-full md:max-w-8xl">
            {/* Sezioni superiori affiancate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 md:px-4">

              {/* Per le Aziende - Sezione sinistra */}
              <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden border-t-4 border-blue-500">
                <div className="z-10 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Per le Aziende</h2>
                  </div>
                  <ul className="space-y-4 md:space-y-8">
                    {companyBenefits.map((benefit, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <p className="text-gray-700 text-sm md:text-xl">{benefit.text}</p>
                      </li>
                    ))}
                  </ul>
                  {/* <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Aziende che lavorano con Helpiness"
                    className="rounded-lg shadow-lg max-h-96 object-cover border border-blue-400"
                  />
                </div> */}
                </div>
              </div>

              {/* Per gli Enti non-profit - Sezione destra */}
              <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden border-t-4 border-green-500">
                <div className="z-10 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Per gli Enti non-profit</h2>
                  </div>
                  <ul className="space-y-4 md:space-y-8">
                    {nonProfitBenefits.map((benefit, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <p className="text-gray-700 text-sm md:text-xl">{benefit.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex justify-center md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Enti non-profit supportati da Helpiness"
                  className="rounded-lg shadow-lg max-h-96 object-cover border border-blue-400"
                />
              </div> */}
              </div>
            </div>

            <div className="flex justify-center mb-10">
              <div className="flex justify-center">
                    <div className="bg-blue-500 bg-opacity-10 rounded-full p-6 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 md:h-16 md:w-16 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M12 19l7-7M12 19l-7-7" />
                      </svg>
                      <div className="absolute inset-0 rounded-full bg-blue-500 bg-opacity-5 animate-ping"></div>
                    </div>
                  </div>
            </div>

            <div className="flex justify-center mt-4">
              <div className="bg-white rounded-xl shadow-lg p-8 md:max-w-4xl border-t-4 border-purple-500 relative">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Per tutti noi</h2>
                  <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                    Vogliamo costruire un ecosistema dove le aziende sostengono progetti concreti,
                    gli enti li realizzano sul territorio e i cittadini ne raccolgono i frutti.
                  </p>
                  <br></br>
                  <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                    Quando le donazioni sono ben indirizzate, crescono i progetti.
                    E con loro crescono anche le comunità.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80"
                    alt="Comunità che beneficiano di Helpiness"
                    className="rounded-lg shadow-lg max-h-96 object-cover border border-blue-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
