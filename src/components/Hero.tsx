import { Button } from "./ui/button";
export default function Hero() {
  const handleScrollDown = () => {
    const indexSection = document.getElementById('platform');
    if (indexSection) {
      indexSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="relative bg-gradient-to-b from-white via-blue-1 to-blue-100 min-h-[500px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">"La donazione a portata di click"</h1>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-xl font-normal">Siamo la prima piattaforma in Italia che connette aziende ed enti non-profit tramite donazioni monetarie e materiali, per progetti ad alto impatto sociale. Aiutiamo gli enti a ottenere risorse per realizzare progetti che cambiano il territorio e offriamo alle aziende uno strumento per fare la differenza in modo trasparente, visibile e misurabile.</p>
        <Button onClick={handleScrollDown} className="bg-blue-600 hover:bg-blue-700">
          Scopri di più
        </Button>
      </div>
      
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div> */}
    </div>;
}
