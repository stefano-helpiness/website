
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Careers() {
  return <div className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-gray-900 mb-6">Unisciti a noi</h2>
        <h3 className="text-3xl font-medium mt-2 text-blue-600">Insieme è più semplice</h3>
        <p className="mt-4 text-lg text-gray-600 mx-auto">
        Anche se al momento non abbiamo posizioni aperte, siamo sempre entusiasti di conoscere persone che vogliono creare impatto e lasciare il segno.
        </p>
        <p className="mt-4 text-lg text-gray-600 mx-auto">
          Se ti riconosci nei nostri valori non farti scrupoli a scriverci!
          Cerchiamo persone <span className="font-bold">curiose</span>, <span className="font-bold">coraggiose</span> e <span className="font-bold">intraprendenti</span>.
          Se sei appassionato del mondo start-up e credi che l'<span className="font-bold">impatto sociale</span> possa essere potenziato
          dalla tecnologia, potresti avere qualcosa da dare (e da ricevere) in Helpiness.
        </p>
        <p className="mt-4 text-lg text-gray-600 mx-auto">
          Siamo solo all'inizio del nostro viaggio, quindi siamo pronti ed aperti
          a ricevere ed imparare in qualsiasi momento!
        </p>
      </div>

      <Card className="shadow-lg border-0 w-full">
        <CardHeader className="space-y-1">
          <h3 className="text-3xl font-medium">Inviaci una candidatura spontanea!</h3>
          <p className="text-gray-500">
            Non vediamo l'ora di conoscerti!
          </p>
        </CardHeader>
        {/* <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input id="firstName" placeholder="Il tuo nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Cognome</Label>
                <Input id="lastName" placeholder="Il tuo cognome" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="nome@esempio.it" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv">CV (Link o breve descrizione)</Label>
              <Input id="cv" placeholder="Inserisci link o descrizione" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Messaggio</Label>
              <textarea id="message" rows={3} className="w-full px-3 py-2 border rounded-md border-input" placeholder="Raccontaci qualcosa di te..." />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Invia candidatura
            </Button>
          </form>
        </CardContent> */}
      </Card>
    </div>
  </div>;
}
