
import { Link } from "react-router-dom";
import { Bed, Bath, Square, MapPin, Star, TrendingUp, Filter } from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";

const Houses = () => {
  const houses = [
    {
      id: 1,
      name: "The Harrogate",
      location: "Harrogate, North Yorkshire",
      price: "£425,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 1850,
      status: "Available",
      type: "Family Home",
      featured: true,
      rating: 4.9,
    },
    {
      id: 2,
      name: "The Leeds Executive",
      location: "Leeds, West Yorkshire",
      price: "£650,000",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 2400,
      status: "Sold",
      type: "Executive Home",
      featured: false,
      rating: 4.8,
    },
    {
      id: 3,
      name: "The York Apartment",
      location: "York, North Yorkshire",
      price: "£280,000",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 900,
      status: "Available",
      type: "Apartment",
      featured: false,
      rating: 4.7,
    },
    {
      id: 4,
      name: "The Wetherby Manor",
      location: "Wetherby, West Yorkshire",
      price: "£825,000",
      bedrooms: 6,
      bathrooms: 5,
      sqft: 3200,
      status: "Sold",
      type: "Luxury Home",
      featured: true,
      rating: 5.0,
    },
    {
      id: 5,
      name: "The Ilkley Conversion",
      location: "Ilkley, West Yorkshire",
      price: "£375,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      status: "Available",
      type: "Historic Conversion",
      featured: false,
      rating: 4.6,
    },
    {
      id: 6,
      name: "The Skipton Cottage",
      location: "Skipton, North Yorkshire",
      price: "£320,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1100,
      status: "Sold",
      type: "Cottage",
      featured: false,
      rating: 4.8,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 mb-6 animate-scale-in">
              <TrendingUp size={16} className="mr-2" />
              Premium Properties Across Yorkshire
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Property Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our range of quality homes across Yorkshire. From modern apartments 
              to luxury family residences, each property is crafted with exceptional attention to detail.
            </p>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                <Filter size={16} className="mr-2" />
                All Properties
              </Button>
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                Available
              </Button>
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                Family Homes
              </Button>
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                Luxury
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houses.map((house, index) => (
              <div 
                key={house.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* House Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/10 group-hover:to-gray-900/20 transition-all duration-500"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="w-20 h-20 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">AH</span>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 text-xs rounded-full font-medium shadow-lg ${
                    house.status === "Available" 
                      ? "bg-green-500 text-white" 
                      : "bg-red-500 text-white"
                  }`}>
                    {house.status}
                  </div>
                  
                  {/* Featured Badge */}
                  {house.featured && (
                    <div className="absolute top-4 left-4 px-2 py-1 bg-yellow-500 text-white text-xs rounded-full font-medium shadow-lg flex items-center">
                      <Star size={12} className="mr-1 fill-current" />
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">{house.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star size={14} className="text-yellow-400 fill-current mr-1" />
                      {house.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-2 text-gray-400" />
                    <span className="text-sm">{house.location}</span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4 font-medium">{house.type}</p>
                  
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-600">
                        <Bed size={16} className="mr-1 text-gray-400" />
                        <span className="font-medium">{house.bedrooms}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Bath size={16} className="mr-1 text-gray-400" />
                        <span className="font-medium">{house.bathrooms}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Square size={16} className="mr-1 text-gray-400" />
                        <span className="font-medium">{house.sqft} sq ft</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">{house.price}</span>
                    <Link to={`/houses/${house.id}`}>
                      <Button size="sm" className="group-hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 animate-fade-in">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team can help you find the perfect home or discuss upcoming developments. 
                Get in touch for personalized assistance.
              </p>
              <Link to="/contact">
                <Button size="lg" className="hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;
