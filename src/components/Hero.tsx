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
  return <div className="relative md:min-h-[500px] flex items-center" 
              style={{ 
                backgroundImage: 'url("./lovable-uploads/background_valtiberina.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'left 100%'
              }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center bg-white bg-opacity-60 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">"Donare non è mai stato così facile"</h1>
        <p className="text-gray-600 mb-8 max-w-5xl mx-auto text-base md:text-xl font-normal">Siamo la prima piattaforma in Italia che connette aziende ed enti non-profit tramite donazioni monetarie e materiali, per progetti ad alto impatto sociale. Aiutiamo gli enti a ottenere risorse per realizzare progetti che cambiano il territorio e offriamo alle aziende uno strumento per fare la differenza in modo trasparente, visibile e misurabile.</p>
        <Button onClick={handleScrollDown} className="bg-blue-600 hover:bg-blue-700">
          Scopri di più
        </Button>
      </div>
    </div>;
}
