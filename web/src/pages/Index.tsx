
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Leaf, Award, MapPin, Phone, Mail, Star, TrendingUp } from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Supporting the Consumer Code for Home Builders ensuring fair treatment and reliable information.",
    },
    {
      icon: Leaf,
      title: "Energy Efficient",
      description: "Advanced insulation, high-efficiency boilers, and low-energy lighting exceeding current regulations.",
    },
    {
      icon: Award,
      title: "Exceptional Design",
      description: "Blending seamlessly into environments using local design features and materials.",
    },
  ];

  const testimonials = [
    {
      quote: "The quality of workmanship is exceptional. Our new home exceeded all expectations.",
      author: "Sarah Johnson",
      location: "Leeds",
      rating: 5,
    },
    {
      quote: "Professional service from start to finish. Truly energy-efficient and beautifully designed.",
      author: "Michael Thompson",
      location: "York",
      rating: 5,
    },
    {
      quote: "Outstanding attention to detail and customer service throughout the entire process.",
      author: "Emma Wilson",
      location: "Harrogate",
      rating: 5,
    },
  ];

  const stats = [
    { number: "200+", label: "Homes Built" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "A+", label: "Energy Rating" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-70"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 mb-6 animate-scale-in">
              <TrendingUp size={16} className="mr-2" />
              Leading Yorkshire Homebuilder Since 2008
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Quality Homes
              <span className="block text-gray-600 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                Across Yorkshire
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Renowned for exceptional design, construction quality, and customer service. 
              We create energy-efficient homes that blend seamlessly into their environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/houses">
                <Button size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Our Homes
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300 hover:bg-gray-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Arncliffe Homes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From small conversions of historic buildings to larger new-build projects, 
              we deliver exceptional homes with uncompromising quality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="group text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in border border-transparent hover:border-gray-200 cursor-pointer transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Range Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Home Range</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From apartments perfect for first-time buyers to luxury six-bedroom residences, 
              we offer homes to suit every lifestyle and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Apartments", description: "Modern 1-2 bedroom apartments", price: "From £280k" },
              { type: "Family Homes", description: "3-4 bedroom family houses", price: "From £425k" },
              { type: "Executive Homes", description: "5-6 bedroom luxury properties", price: "From £650k" },
              { type: "Conversions", description: "Historic building conversions", price: "From £375k" },
            ].map((home, index) => (
              <div 
                key={home.type}
                className="group p-6 border border-gray-200 rounded-xl hover:border-gray-900 transition-all duration-300 animate-fade-in bg-white hover:bg-gray-50 cursor-pointer transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">{home.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{home.description}</p>
                <p className="text-sm font-medium text-gray-900">{home.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in border border-transparent hover:border-gray-200 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <span className="text-white font-semibold text-sm">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Ready to find your perfect home? Contact us today.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bramley Grange, Skeltons Lane<br />
                Thorner, Leeds, LS14 3DW
              </p>
            </div>
            <div className="group flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">0113 237 5900</p>
            </div>
            <div className="group flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline">
                Send us a message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-900 font-bold">AH</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              © 2024 Arncliffe Homes. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Supporting the Consumer Code for Home Builders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
