
import React from 'react';
import { Card, CardContent } from "./ui/card";
import { HandCoins, Eye, Lightbulb } from "lucide-react";

export default function Opportunities() {
  const opportunities = [
    {
      title: "Accesso facilitato a risorse economiche e materiali",
      description: "Gli enti possono ricevere facilmente fondi o beni dalle aziende, trasformando necessità quotidiane in opportunità concrete.",
      icon: <HandCoins className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Visibilità e credibilità",
      description: "Ogni progetto pubblicato aumenta la visibilità dell'ente e rafforza la sua affidabilità grazie a un sistema trasparente e tracciabile.",
      icon: <Eye className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Opportunità di pensare in grande",
      description: "Il supporto delle aziende permette agli enti di realizzare progetti piú ambiziosi, aumentando il loro impatto finale",
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <div id="opportunities" className="py-16 bg-gradient-to-b from-white via-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900">Opportunità per gli Enti</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Scopri come la nostra piattaforma può supportare e valorizzare il tuo ente non profit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="border border-blue-400 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{opportunity.title}</h3>
                <p className="text-gray-600 text-center">{opportunity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
