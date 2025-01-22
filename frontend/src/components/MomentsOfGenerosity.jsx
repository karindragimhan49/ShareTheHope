import React from "react";
import { HandHeart, Users, Smile } from "lucide-react";

const MomentsOfGenerosity = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/10742870/pexels-photo-10742870.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "A donor's contribution bringing joy.",
      icon: <HandHeart className="w-12 h-12 text-blue-500 mb-4" />,
    },
    {
      url: "https://images.pexels.com/photos/27597369/pexels-photo-27597369/free-photo-of-the-3-friends.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Volunteers creating positive change.",
      icon: <Users className="w-12 h-12 text-green-500 mb-4" />,
    },
    {
      url: "https://images.pexels.com/photos/17397905/pexels-photo-17397905/free-photo-of-elderly-man-sitting-on-ground.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Smiles of gratitude from recipients.",
      icon: <Smile className="w-12 h-12 text-yellow-500 mb-4" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Moments of Generosity
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Celebrate the power of giving through these cherished memories.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white p-6">
              <div className="flex justify-center">{image.icon}</div>
              <img
                src={image.url}
                alt={`Donation Image ${idx + 1}`}
                className="w-full h-64 object-cover mt-4 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-0 left-0 right-0 text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsOfGenerosity;
