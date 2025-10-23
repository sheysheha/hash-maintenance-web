"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, Wrench, Paintbrush, Home, Droplets, CheckCircle, Star, Clock, Shield, Award, ArrowRight, Users } from 'lucide-react';

export default function HashMaintenanceServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const services = [
    {
      category: "General Maintenance",
      icon: <Wrench className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop",
      items: ["General repairs & handyman services", "Fitting skirting boards, architraves, joinery work", "Door/window frames, cabinetry"]
    },
    {
      category: "Painting & Plastering",
      icon: <Paintbrush className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop",
      items: ["Painting & decorating", "Plastering & tiling"]
    },
    {
      category: "Roofing & Exterior",
      icon: <Home className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop",
      items: ["Roof & gutter maintenance", "Window & exterior cleaning", "Flooring installation/repair"]
    },
    {
      category: "Cleaning Services",
      icon: <Droplets className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&auto=format&fit=crop",
      items: ["Commercial & residential cleaning", "Patio, driveway cleaning"]
    },
    {
      category: "Garden & Outdoor",
      icon: <Home className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&auto=format&fit=crop",
      items: ["Lawn mowing, hedge trimming, garden clearance", "Fencing, decking, sheds", "Seasonal maintenance (leaves, snow, etc.)"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Outstanding service! The team was professional, punctual, and did an excellent job on our home renovation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop"
    },
    {
      name: "Michael Brown",
      role: "Business Owner",
      text: "Hash Maintenance has been maintaining our office building for 2 years. Always reliable and professional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop"
    },
    {
      name: "Emma Davis",
      role: "Property Manager",
      text: "Best maintenance company we've worked with. They handle everything from small repairs to major projects.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop"
    }
  ];

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      alert('Thank you for your inquiry! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      alert('Please fill in your name and email.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would go in Next.js Head component */}

      { /* Navigation */}
      <nav className="bg-white text-gray-900 fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-17">
            <div className="flex items-center space-x-3">

              <Image src="/logo.png" alt="Logo" width={60} height={60} />

              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#1A2C46]
               to-blue-600 bg-clip-text text-transparent p-0">Hash Maintenance</span>
                <p className="text-sm text-gray-500 p-0">Services</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-4 items-center">
              <a href="#home" className="hover:text-cyan-600 hover:border-2 hover:border-cyan-600 rounded-full py-2 px-4 hover:scale-110 transition font-medium">Home</a>
              <a href="#services" className="hover:text-cyan-600 hover:border-2 hover:border-cyan-600 rounded-full py-2 px-4 hover:scale-110 transition font-medium">Services</a>
              <a href="#about" className="hover:text-cyan-600 hover:border-2 hover:border-cyan-600 rounded-full py-2 px-4 hover:scale-110 transition font-medium">About</a>
              <a href="#testimonials" className="hover:text-cyan-600 hover:border-2 hover:border-cyan-600 rounded-full py-2 px-4 hover:scale-110 transition font-medium">Reviews</a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-110 transition font-medium">
                Get Quote
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
            <a href="#home" className="block hover:text-cyan-600 hover:scale-110 transition font-medium">Home</a>
            <a href="#services" className="block hover:text-cyan-600 hover:scale-110 transition font-medium">Services</a>
            <a href="#about" className="block hover:text-cyan-600 hover:scale-110 transition font-medium">About</a>
            {/* <a href="#testimonials" className="block hover:text-cyan-600 hover:scale-110 transition font-medium">Reviews</a> */}
            <a href="#contact" className="block hover:text-cyan-600 hover:scale-110 transition font-medium">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section with Background Image */}
      <section id="home" className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop"
            alt="Professional maintenance services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-block bg-cyan-500/20 border border-cyan-500/50 rounded-full px-4 py-2 mb-6">
              <span className="text-white font-semibold">⭐ 5-Star Rated Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Expert Maintenance <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              From repairs to renovations, we deliver excellence in every project. Professional, reliable, and trusted by thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition shadow-xl hover:shadow-2xl flex items-center justify-center">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:trangray-x-1 transition" />
              </a>
              <a href="tel:+441234567890" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative z-20 bg-white py-8 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">2500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">5000+</div>
                <div className="text-gray-600">Projects Done</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
                <div className="text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Hash Maintenance?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're not just another maintenance company. Here's what makes us different.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Licensed & Insured</h3>
              <p className="text-gray-600 leading-relaxed">Fully certified professionals with comprehensive insurance coverage for your peace of mind.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast Response</h3>
              <p className="text-gray-600 leading-relaxed">Same-day service available. Emergency repairs handled promptly with 24/7 availability.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">100% satisfaction guarantee on all work. If you're not happy, we'll make it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with Images */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive maintenance solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-amber-600 transition">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 text-amber-600 font-semibold flex items-center group-hover:gap-2 transition-all"
                  >
                    Contact Us
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-cyan-100 rounded-full px-4 py-2 mb-4">
                <span className="text-cyan-700 font-semibold">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Trusted Maintenance Partner</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                With over a decade of experience, Hash Maintenance Services has established itself as the premier maintenance provider in the region. We pride ourselves on delivering exceptional quality and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team of skilled professionals is dedicated to providing comprehensive solutions for all your residential and commercial maintenance needs, ensuring your property remains in pristine condition.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-500 mr-3" />
                  <span className="text-gray-700 font-medium">Licensed & Certified Professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-500 mr-3" />
                  <span className="text-gray-700 font-medium">Competitive Transparent Pricing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-500 mr-3" />
                  <span className="text-gray-700 font-medium">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-500 mr-3" />
                  <span className="text-gray-700 font-medium">Premium Quality Materials</span>
                </div>
              </div>

              <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop"
                  alt="Professional maintenance team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <Users className="w-12 h-12 text-cyan-600" />
                    <div>
                      <div className="text-3xl font-bold text-gray-900">50+</div>
                      <div className="text-gray-600">Expert Team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-500 text-cyan-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your project? We're here to help!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 123 456 7890"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Repairs</option>
                    <option value="painting">Painting & Decorating</option>
                    <option value="roofing">Roof & Gutter</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="garden">Garden & Outdoor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </div> */}

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-lg">Phone</h3>
                    <p className="text-gray-700 text-lg">+44 739 852 8864</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri 7AM-7PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-lg">Email</h3>
                    <p className="text-gray-700">hashmaintenance@outlook.com</p>
                    <p className="text-gray-500 text-sm mt-1">24/7 Support</p>
                  </div>
                </div>
              </div>
              </div>
              <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-lg">Service Area</h3>
                    <p className="text-gray-700">Greater London & Surrounding Areas</p>
                    <p className="text-gray-500 text-sm mt-1">50-mile radius</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white py-3 px-6  rounded-2xl shadow-xl">
                <div className="flex items-center mb-2">
                  <Clock className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your project to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-gradient-to-r from-cyan-500
             to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 
             rounded-full text-lg font-semibold transition shadow-xl inline-flex items-center justify-center">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="tel:+441234567890" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition inline-flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Hash Maintenance</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for professional maintenance services. We deliver quality, reliability, and excellence in every project.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-cyan-600 p-3 rounded-lg transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-amber-600 p-3 rounded-lg transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-amber-600 p-3 rounded-lg transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-amber-600 p-3 rounded-lg transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-cyan-500 transition">Home</a></li>
                <li><a href="#services" className="hover:text-cyan-500 transition">Services</a></li>
                <li><a href="#about" className="hover:text-cyan-500 transition">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-cyan-500 transition">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-cyan-500 transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-cyan-500 transition">General Repairs</a></li>
                <li><a href="#services" className="hover:text-cyan-500 transition">Painting & Decorating</a></li>
                <li><a href="#services" className="hover:text-cyan-500 transition">Roofing Services</a></li>
                <li><a href="#services" className="hover:text-cyan-500 transition">Cleaning Services</a></li>
                <li><a href="#services" className="hover:text-cyan-500 transition">Garden Maintenance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>&copy; 2025 Hash Maintenance Services. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-cyan-500 transition">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-500 transition">Terms of Service</a>
                <a href="#" className="hover:text-cyan-500 transition">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}