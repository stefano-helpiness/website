import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Link to="/">
              <img src="/lovable-uploads/HelpinessLogo_v1.png" alt="Helpiness Logo" className="h-14 mb-2" />
            </Link>
            <p className="text-gray-400 text-sm mt-2">
              Connecting Business Impact with Social Change
            </p>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-3">Navigazione</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-1">
                <li>
                  <Link to="/chi-siamo" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Chi Siamo
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/perche-scegliere-noi" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Perché Scegliere Noi
                  </Link>
                </li>
                <li>
                  <Link to="/aziende" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Aziende
                  </Link>
                </li>
              </ul>
              <ul className="space-y-1">
                <li>
                  <Link to="/enti" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Enti
                  </Link>
                </li>
                <li>
                  <Link to="/modello-di-business" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Modello di Business
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/partnership" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Partnership
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-3">Contatti:</h3>
            <ul className="space-y-1">
              <li className="text-gray-400 text-sm">Email: info@helpinessworld.com</li>
              {/* <li className="text-gray-400 text-sm">Tel: +39 123 456 7890</li> */}
              <li className="text-gray-400 text-sm">Sede: Sansepolcro, AR, Italia</li>
              <li className="mt-3">
                <a href="https://www.linkedin.com/company/helpiness" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Helpiness. Tutti i diritti riservati.</p>
          <br />
          <p>Home page background by Franco Vannini on Flickr, licensed under CC BY 2.0.</p>
        </div>
      </div>
    </footer>;
}
