import React from "react";
import { Target, HandHeart, Users, Star, Building2 } from "lucide-react";

const Mission = () => {
  const missionCards = [
    {
      icon: <HandHeart className="w-8 h-8 text-red-600" />,
      title: "Connect Hearts",
      description: "Building bridges between donors and recipients, fostering meaningful connections that transform lives.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Empower Change",
      description: "Creating opportunities for community-driven impact through acts of generosity and kindness.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Foster Hope",
      description: "Inspiring optimism and resilience through sustainable support systems and community engagement.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-600" />,
      title: "Build Legacy",
      description: "Creating lasting positive change that resonates through generations of communities we serve.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="flex flex-col items-center mb-12">
            <Target className="w-16 h-16 text-blue-600 mb-6" />
            <h2 className="text-4xl font-extrabold text-center text-blue-900">Our Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionCards.map((card, idx) => (
              <div key={idx} className="bg-blue-50 rounded-xl p-8 transform hover:scale-105 transition-transform">
                <div className="flex items-center mb-4">
                  {card.icon}
                  <h3 className="text-xl font-bold text-blue-900 ml-3">{card.title}</h3>
                </div>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
