
import { Check } from "lucide-react";

const benefits = [
  {
    title: "For Companies",
    items: [
      "Unified dashboard for managing donations",
      "Clear selection criteria",
      "Impact reports for sustainability",
      "Complete fiscal documentation"
    ]
  },
  {
    title: "For Non-Profits",
    items: [
      "Dedicated space to showcase projects",
      "Access to interested companies",
      "Monetary and material donations",
      "Increased visibility"
    ]
  }
];

export default function Benefits() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-900">
            Benefits for <span className="font-bold">All Stakeholders</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((section) => (
            <div key={section.title} className="bg-gray-50 rounded-lg p-8 border border-blue-400">
              <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
