
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Square, MapPin, ChevronLeft, ChevronRight, Star, Wifi, Car, Leaf, Shield, Heart, Share } from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";

const HouseDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock data - in a real app this would come from an API
  const house = {
    id: parseInt(id || "1"),
    name: "The Harrogate",
    location: "Harrogate, North Yorkshire",
    fullAddress: "Oak Tree Lane, Harrogate, HG2 8QT",
    price: "£425,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1850,
    status: "Available",
    type: "Family Home",
    rating: 4.9,
    reviews: 27,
    description: "A beautifully designed four-bedroom family home featuring contemporary living spaces, high-quality finishes, and excellent energy efficiency. Located in a desirable area of Harrogate with easy access to local amenities and transport links. This stunning property represents the perfect blend of modern comfort and traditional Yorkshire charm.",
    features: [
      "Energy-efficient design exceeding current building regulations",
      "Advanced insulation throughout with triple-glazed windows",
      "High-efficiency boiler and low-energy LED lighting",
      "Modern kitchen with integrated Bosch appliances",
      "Master bedroom with en-suite bathroom and walk-in wardrobe",
      "Private landscaped garden and off-street parking for 2 cars",
      "Secured by Design certified with smart home features",
      "10-year NHBC warranty and comprehensive aftercare"
    ],
    amenities: [
      { icon: Wifi, label: "High-Speed Broadband" },
      { icon: Car, label: "Private Parking" },
      { icon: Leaf, label: "Energy Efficient" },
      { icon: Shield, label: "Security System" },
    ]
  };

  // Enhanced room descriptions for better placeholder content
  const images = [
    { name: "Living Room", description: "Spacious open-plan living area with feature fireplace" },
    { name: "Kitchen", description: "Modern fitted kitchen with island and breakfast bar" },
    { name: "Master Bedroom", description: "Large master suite with en-suite and built-in storage" },
    { name: "Bathroom", description: "Contemporary family bathroom with premium fixtures" },
    { name: "Garden", description: "Private landscaped rear garden with patio area" },
    { name: "Exterior", description: "Attractive front elevation with driveway parking" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back button and actions */}
          <div className="flex justify-between items-center mb-6">
            <Link 
              to="/houses" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Houses
            </Link>
            
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`hover:scale-105 transition-all ${isLiked ? 'text-red-500 border-red-500' : ''}`}
              >
                <Heart size={16} className={`mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                <Share size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Image Carousel */}
            <div className="animate-fade-in">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 shadow-lg">
                <div className="h-96 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/20"></div>
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform shadow-xl">
                      <span className="text-white font-bold text-xl">AH</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                      <p className="text-gray-900 font-semibold text-lg">{images[currentImageIndex].name}</p>
                      <p className="text-gray-600 text-sm mt-1">{images[currentImageIndex].description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <ChevronLeft size={24} className="text-gray-900" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <ChevronRight size={24} className="text-gray-900" />
                </button>

                {/* Enhanced Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced Thumbnail grid */}
              <div className="grid grid-cols-6 gap-3">
                {images.map((room, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`group relative h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 transition-all overflow-hidden ${
                      index === currentImageIndex 
                        ? "border-gray-900 scale-105 shadow-lg" 
                        : "border-transparent hover:border-gray-300 hover:scale-105"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/20"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-xs">AH</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced House Details */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{house.name}</h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star size={18} className="text-yellow-400 fill-current mr-1" />
                      <span className="font-medium text-gray-900">{house.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({house.reviews} reviews)</span>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                      house.status === "Available" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {house.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin size={20} className="mr-2 text-gray-400" />
                <span className="text-lg">{house.fullAddress}</span>
              </div>

              <p className="text-gray-500 mb-6 text-lg">{house.type}</p>

              <div className="text-4xl font-bold text-gray-900 mb-8">{house.price}</div>

              {/* Enhanced Property specs */}
              <div className="grid grid-cols-3 gap-6 mb-8 p-8 bg-gray-50 rounded-2xl">
                <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform">
                  <Bed size={32} className="mx-auto mb-3 text-gray-600 group-hover:text-gray-900 transition-colors" />
                  <div className="text-3xl font-bold text-gray-900">{house.bedrooms}</div>
                  <div className="text-sm text-gray-600 font-medium">Bedrooms</div>
                </div>
                <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform">
                  <Bath size={32} className="mx-auto mb-3 text-gray-600 group-hover:text-gray-900 transition-colors" />
                  <div className="text-3xl font-bold text-gray-900">{house.bathrooms}</div>
                  <div className="text-sm text-gray-600 font-medium">Bathrooms</div>
                </div>
                <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform">
                  <Square size={32} className="mx-auto mb-3 text-gray-600 group-hover:text-gray-900 transition-colors" />
                  <div className="text-3xl font-bold text-gray-900">{house.sqft}</div>
                  <div className="text-sm text-gray-600 font-medium">Sq Ft</div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  {house.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <amenity.icon size={20} className="text-gray-600 mr-3" />
                      <span className="text-gray-900 font-medium">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{house.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {house.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced Contact CTA */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interested in this property?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Contact us today to arrange a viewing or get more information. Our team is ready to help you 
                  find your perfect home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                      Contact Us
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1 hover:scale-105 transition-transform">
                    Call: 0113 237 5900
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
