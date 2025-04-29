
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import { Building, FileText, Users, CheckCircle, Heart } from "lucide-react";
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

      <section id="platform" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-10">
              <h2 className="text-5xl font-bold text-gray-900">Per le Aziende</h2>
              <ul className="space-y-8">
                {companyBenefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 text-xl">{benefit.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Aziende che lavorano con Helpiness"
                className="rounded-lg shadow-lg max-h-96 object-cover border border-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 space-y-10">
              <h2 className="text-5xl font-bold text-gray-900">Per gli Enti non-profit</h2>
              <ul className="space-y-8 mt-6">
                {nonProfitBenefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 text-xl">{benefit.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center md:order-1">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Enti non-profit supportati da Helpiness"
                className="rounded-lg shadow-lg max-h-96 object-cover border border-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-10">
              <h2 className="text-5xl font-bold text-gray-900">Per le Comunità</h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                Vogliamo costruire un ecosistema dove le aziende sostengono progetti concreti,
                gli enti li realizzano sul territorio e i cittadini ne raccolgono i frutti.
              </p>
              <div className="flex justify-center my-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l6-6m-6 6l-6-6" />
                </svg>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed">
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
      </section>
    </PageLayout>
  );
};

export default Index;
