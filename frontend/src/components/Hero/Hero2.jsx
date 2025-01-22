import React from "react";
import { Heart, ChevronRight } from "lucide-react";
import donationImage from "../../assets/donation.png";

const Hero2 = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-200 to-blue-100 text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center mb-4">
            <Heart className="w-10 h-10 text-red-600 mr-3" />
            <span className="text-lg font-semibold text-green-800">Welcome to Share The Hope</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover Kindness, <br /> Inspire Generosity.
          </h1>
          <p className="text-lg text-gray-700">
            Our platform connects donors and recipients to make a real impact in the community. Together, let's share hope and transform lives.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-6">
            <a
              href="#donate"
              className="bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center"
            >
              Start Donating
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#learn-more"
              className="border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 py-4 px-8 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="mt-10 md:mt-0 md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={donationImage}
              alt="Donation Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
