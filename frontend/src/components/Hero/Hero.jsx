import React from "react";
import {
  Heart,
  Target,
  Eye,
  Lightbulb,
  HandHeart,
  Building2,
  Users,
  Star,
  ChevronRight,
  Quote
} from "lucide-react";
import ab1Image from "../../assets/ab3.png";
import donationImage from "../../assets/donation.png";
import donationImage2 from "../../assets/donation2.png";
import donationImage3 from "../../assets/donation3.png";

const Hero = () => {
  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const missionCards = [
    {
      icon: <HandHeart className="w-8 h-8 text-red-600" />,
      title: "Connect Hearts",
      description: "Building bridges between donors and recipients, fostering meaningful connections that transform lives."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Empower Change",
      description: "Creating opportunities for community-driven impact through acts of generosity and kindness."
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Foster Hope",
      description: "Inspiring optimism and resilience through sustainable support systems and community engagement."
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-600" />,
      title: "Build Legacy",
      description: "Creating lasting positive change that resonates through generations of communities we serve."
    }
  ];

  const quotes = [
    {
      text: "Kindness is the language which the deaf can hear and the blind can see.",
      author: "Mark Twain"
    },
    {
      text: "No act of kindness, no matter how small, is ever wasted.",
      author: "Aesop"
    },
    {
      text: "We rise by lifting others.",
      author: "Robert Ingersoll"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-200 to-blue-100 text-blue-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center py-20 relative z-10">
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Heart className="w-10 h-10 text-red-600 mr-3" />
              <span className="text-lg font-semibold text-blue-900">Share The Hope</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Share the Hope,
              <br />
              Make a Difference!
            </h1>
            <p className="text-xl text-gray-800">
              Together, we connect hearts, bridge communities, and transform lives. Every act of generosity counts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a
                href="#"
                className="group bg-blue-900 hover:bg-blue-700 text-white py-4 px-8 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                Donate Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => handleScrollToSection("about-section")}
                className="group border-2 border-blue-900 hover:bg-blue-900 hover:text-white text-blue-900 py-4 px-8 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                Learn More
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-0 md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105">
              <img
                src={ab1Image}
                alt="Hero Illustration"
                className="w-full max-w-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-transparent opacity-75 pointer-events-none"></div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-12 transform hover:scale-[1.02] transition-transform">
            <div className="flex flex-col items-center justify-center mb-8">
              <Eye className="w-16 h-16 text-blue-600 mb-6" />
              <div className="flex items-center">
                <div className="w-20 h-1 bg-blue-600 rounded-full mr-4" />
                <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">
                  Our Vision
                </h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full ml-4" />
              </div>
            </div>
            <p className="text-2xl text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
              A future where every act of kindness transforms lives and builds
              stronger communities.
            </p>
          </div>
        </div>
      </section>

      {/* Inspiring Words Section */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center space-y-12">
            <div className="flex flex-col items-center">
              <Lightbulb className="w-16 h-16 text-yellow-400 mb-6" />
              <h2 className="text-4xl font-extrabold text-white tracking-tight">
                Inspiring Words
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quotes.map((quote, idx) => (
                <div key={idx} className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 transform hover:translate-y-[-4px] transition-transform">
                  <Quote className="w-8 h-8 text-blue-300 mb-4" />
                  <blockquote className="text-2xl text-white italic font-light">
                    {quote.text}
                  </blockquote>
                  <p className="mt-4 text-blue-200">— {quote.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="flex flex-col items-center mb-12">
              <Target className="w-16 h-16 text-blue-600 mb-6" />
              <h2 className="text-4xl font-extrabold text-center text-blue-900">
                Our Mission
              </h2>
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

      {/* Photos Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <div className="flex flex-col items-center mb-8">
            <HandHeart className="w-16 h-16 text-blue-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
              Moments of Generosity
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Celebrate the power of giving through these cherished memories.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[donationImage, donationImage2, donationImage3].map((imgSrc, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={imgSrc}
                  alt={`Donation Image ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="absolute bottom-0 left-0 right-0 text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    {idx === 0
                      ? "A donor's contribution bringing joy."
                      : idx === 1
                      ? "Volunteers creating positive change."
                      : "Smiles of gratitude from recipients."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-blue-900">About Share the Hope</h2>
          <p className="mt-4 text-lg text-gray-600">
            Share the Hope is a platform that connects generous donors with those in need, fostering a community of kindness and support.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
