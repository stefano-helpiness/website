import { useState } from "react";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedIn: string;
  image: string;
}

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <div className="py-24 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Il Nostro Team</h2>
          {/* <div className="h-1 w-24 bg-orange-500 mx-auto mb-8"></div> */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conosciamo i quattro fondatori di Helpiness, uniti dalla passione per
            l'innovazione sociale e il desiderio di creare un impatto concreto nel territorio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative h-64 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-auto h-full mx-auto object-contain md:w-full md:h-full md:object-cover md:object-center transition-transform duration-500 group-hover:scale-100"
                />
              </div>


              <div className="p-6 relative z-20 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>

                <p className="text-gray-600 italic mb-4 flex-grow">{member.bio}</p>

                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>

              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition-all">
            Unisciti al Team
          </button>
          <p className="mt-4 text-gray-600">
            Siamo sempre alla ricerca di talenti appassionati e motivati
          </p>
        </div>
      </div>
    </div>
  );
}