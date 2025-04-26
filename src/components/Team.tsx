import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedIn: string;
  image: string;
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "Luca Bonauguri",
      role: "Co-founder & CEO",
      bio: "\"Creare valore significa condividere risorse, idee e visioni\"",
      linkedIn: "https://www.linkedin.com/in/luca-bonauguri-b81428201/",
      image: "/lovable-uploads/49cdd3dc-b390-4e5a-a8c9-02dde379c303.png"
    },
    {
      name: "Matteo Romanetti",
      role: "Co-founder & COO",
      bio: "\"L'impatto più grande nasce dalle connessioni più autentiche.\"",
      linkedIn: "https://www.linkedin.com/in/matteo-romanetti/",
      image: "/lovable-uploads/9c2c8d75-f697-465b-aaa3-fd967e7237a4.png"
    },
    {
      name: "Stefano Casini",
      role: "Co-founder & CTO",
      bio: "\"Il digitale è il nostro strumento, il cambiamento il nostro obbiettivo.\"",
      linkedIn: "https://www.linkedin.com/in/stefano-casini-292180268/",
      image: "/lovable-uploads/54456f82-70b4-4e7d-9fc3-1aa1dc7e5f69.png"
    },
    {
      name: "Leonardo Gennaioli",
      role: "Co-founder & CIO",
      bio: "\"L'impatto non si calcola, si vive.\"",
      linkedIn: "https://linkedin.com/",
      image: "/lovable-uploads/8a495da4-b7bc-400b-a886-1b3177f45caf.png"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white via-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900">Il Nostro Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Conosciamo i quattro fondatori di Helpiness, uniti dalla passione per 
            l'innovazione sociale e il desiderio di creare un impatto concreto nel territorio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden border border-blue-400 hover:shadow-md transition-shadow duration-300 min-h-56">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 p-6 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="sm:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  
                  <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
                  <a 
                    href={member.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
