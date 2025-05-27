import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function PartnershipForm() {

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ayvvvyc",    // ← sostituisci con il tuo SERVICE ID
      "template_1enrzrj",   // ← sostituisci con il tuo TEMPLATE ID
      form.current,
      "uOJOnmWBEJ7jnKJrF"    // ← sostituisci con la tua PUBLIC KEY
    );
    emailjs
      .sendForm(
        "service_ayvvvyc",    // ← sostituisci con il tuo SERVICE ID
        "template_nfktlkm",   // ← sostituisci con il tuo TEMPLATE ID
        form.current,
        "uOJOnmWBEJ7jnKJrF"    // ← sostituisci con la tua PUBLIC KEY
      )
      .then(
        (result) => {
          console.log("Email inviata!", result.text);
          alert("Email inviata con successo!");
        },
        (error) => {
          console.error("Errore invio:", error.text);
          alert("Errore nell'invio della mail.");
        }
      );

  };

  return (
    <div className="py-16 bg-gradient-to-b from-white via-white to-blue-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg border-0">
          <CardHeader className="space-y-1">
            <h2 className="text-3xl font-bold text-center">Diventa Partner</h2>
            <p className="text-gray-500 text-center">
              Compila il form per iniziare la partnership con Helpiness
            </p>
          </CardHeader>
          <CardContent>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Nome azienda</Label>
                <Input id="companyName" name="companyName" placeholder="Nome della tua azienda" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="referentName">Nome e cognome referente</Label>
                <Input id="referentName" name="referentName" placeholder="Nome e cognome" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="email@azienda.it" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Nazione</Label>
                  <Input id="country" name="country" placeholder="Nazione" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Città</Label>
                  <Input id="city" name="city" placeholder="Città" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Numero di telefono</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+39 123 456 7890" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Perché vuoi diventare partner</Label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md border-input"
                  placeholder="Raccontaci la tua motivazione..."
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Invia richiesta
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
