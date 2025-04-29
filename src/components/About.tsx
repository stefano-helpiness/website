import { Check, Users, Handshake, Info, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const values = [{
  title: "Fiducia",
  description: "Costruiamo relazioni autentiche tra aziende ed enti, basate sulla credibilità e sull'impegno reciproco.",
  icon: <Handshake className="h-8 w-8 text-orange-400" />
}, {
  title: "Trasparenza",
  description: "Ogni donazione è tracciata, ogni progetto raccontato con chiarezza e dettaglio.",
  icon: <Info className="h-8 w-8 text-sky-400" />
}, {
  title: "Efficienza",
  description: "Concentrare l’impegno su ció che conta davvero.",
  icon: <Users className="h-8 w-8 text-green-400" />
}, {
  title: "Impatto reale",
  description: "Aiutiamo le aziende a rendere il loro impatto sul territorio tangibile e misurabile.",
  icon: <Target className="h-8 w-8 text-red-400" />
}];

export default function About() {
  return <div id="about" className="py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-gray-900">Chi siamo</h2>
        <div className="mt-8">
          <p className="mt-4 text-xl text-gray-600 mx-auto">
            Helpiness nasce dall'idea di <span className="font-bold">4 ragazzi di 23 anni</span>, nati e cresciuti in <span className="font-bold">Valtiberina</span>,
            accomunati da una forte passione per l'<span className="font-bold">innovazione sociale</span> e dal desiderio di generare
            un <span className="font-bold">impatto concreto</span> in tutti i territori e le comunità, dai piú piccoli ai piú grandi.
          </p>
          <p className="mt-4 text-xl text-gray-600 mx-auto">
            Abbiamo avuto modo di osservare quanto può essere <span className="font-bold">complicato</span>, per le aziende, trasformare la volontà di aiutare in impatto
            <span className="font-bold"> reale</span>, e quanto possa essere <span className="font-bold">frustrante</span> per un ente non-profit dover bussare mille porte
            per ottenere <span className="font-bold">supporto</span>.

          </p>
          <p className="mt-4 text-xl text-gray-600 mx-auto">
            Per questo abbiamo creato <span className="font-bold">Helpiness</span>: una piattaforma che crea <span className="font-bold">connessioni</span> e fa convergere
            il valore dove serve davvero.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-5xl font-semibold text-center mb-8">I nostri valori</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {values.map(value => (
            <Card key={value.title} className="border border-blue-400 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-semibold mb-2">{value.title}</h4>
                <p className="text-lg text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-5xl font-semibold mb-6">La nostra missione</h3>
        <p className="text-xl text-gray-600 mx-auto">
          Helpiness nasce dalla volontá di <span className="font-bold">semplificare</span> e rendere piú trasparenti le relazioni tra
          aziende ed enti non profit, facendo incontrare la volontá di fare la <span className="font-bold">differenza</span> delle prime,
          con la forza delle <span className="font-bold">idee</span> dei secondi. Crediamo che fare del <span className="font-bold">bene</span> debba essere un atto semplice,
          trasparente e condiviso.
        </p>
      </div>
    </div>
  </div>;
}
