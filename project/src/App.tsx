import React, { useState } from 'react';
import { Music, Calendar, Users, Star, Phone, Mail, MapPin, Menu, X, Play, Headphones, Mic, Volume2 } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    });
  };

  const services = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Weddings",
      description: "Create magical moments with personalized music for your special day, from ceremony to reception.",
      features: ["Custom playlist creation", "Ceremony & reception music", "Custom & flexible packages"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Matric Dances",
      description: "Make your matric dance unforgettable with the latest hits and classic favourites.",
      features: ["Current chart hits", "Interactive DJ experience", "Professional sound & lighting"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Corporate Events",
      description: "Professional audio solutions for staff parties,year end functions and company celebrations.",
      features: ["Quality wireless microphone systems", "Background music", "Award ceremony audio", "Professional presentation"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Private Events",
      description: "Birthdays, anniversaries, and family celebrations made special with perfect music selection.",
      features: ["Age-appropriate music", "Flexible timing options & packages"]
    }
  ];

  const testimonials = [
    {
      name: "Peter M",
      event: "Daughter's 21st Birthday",
      text: "A million thank you's.  I always knew I was in good hands, but your performance exceeded all my expectations.",
    },
    {
      name: "Nigel D",
      event: "Wife's 40th Birthday",
      text: "Thank you for making Nikki's birthday special",
    },
    {
      name: "Melanie F",
      event: "Fundraiser",
      text: "Thank you, once again, for rendering your services on Saturday.  Everyone had an absolute blast.  You kept the crowd on their feet, as promised.",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Headphones className="h-8 w-8 text-purple-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">RCB Audio & Entertainment</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Testimonials</a>
                <a href="#contact" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Creating Unforgettable
                <span className="text-yellow-400"> Musical Experiences</span>
              </h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Professional DJ services for weddings, matric dances, corporate events, and private celebrations. 
                We bring the perfect soundtrack to your special moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-yellow-500 text-purple-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors text-center">
                  Book Your Event
                </a>
                <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-900 transition-colors text-center">
                  View Services
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional DJ Equipment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-purple-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <Play className="w-8 h-8 mr-2" />
                  <div>
                    <div className="font-bold text-2xl">100+</div>
                    <div className="text-sm">Events Rocked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we provide professional DJ services 
              tailored to make your event unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-purple-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About RCB Audio & Entertainment</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Trust Us — Your Soundtrack Starts Here
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At RCB Audio & Entertainment, we bring more than just music — we bring energy, precision, and unforgettable experiences.
                Whether you're tying the knot, hosting a corporate function, or throwing the biggest matric dance of the year, we deliver 
                professional DJ services tailored to your event.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience and a deep technical understanding of sound, lighting, and crowd engagement, we know how to read a
                room and keep it moving. We pride ourselves on being flexible, open-format DJs who adapt to your vision, style, and audience —
                from elegant weddings to high-energy sports events.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                RCB Audio & Entertainment is built on professionalism, preparation, and passion for what we do. Every event is different, and 
                we make it our mission to get the details right — so you can relax, celebrate, and trust us to keep the vibe exactly where it 
                should be.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-gray-600">Events Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="DJ performing at event"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute top-6 right-6 bg-purple-600 text-white p-4 rounded-2xl shadow-xl">
                <Volume2 className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Equipment</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We use only top-quality, professional-grade equipment to ensure crystal-clear sound 
              and stunning visual effects at every event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Mic className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Professional Audio</h3>
              <p className="text-purple-100">High-quality sound systems, wireless microphones, and crystal-clear audio mixing equipment.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Volume2 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Lighting Effects</h3>
              <p className="text-purple-100">Dynamic LED lighting effects to create the perfect ambiance.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Headphones className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">DJ Technology</h3>
              <p className="text-purple-100">Professional grade DJ controllers and digital music libraries for seamless performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of the amazing clients we've had the pleasure of working with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-purple-600 text-sm">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make your event unforgettable? Contact us today for a personalized quote 
              and let's discuss how we can bring the perfect soundtrack to your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-purple-100">082 887 7127</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-purple-100">bookings@rcb-audio.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-4" />
                    <div>
                      <div className="font-semibold">Service Area</div>
                      <div className="text-purple-100">Cape Town & Surrounding Areas</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>Professional, trustworthy & reliable service</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>Extensive music library</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>High-quality equipment & technical expertise</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>Competitive & Flexible pricing</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>Years of experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="">Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="matric-dance">Matric Dance</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your event, number of guests, venue, special requirements, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Headphones className="h-8 w-8 text-purple-400 mr-2" />
              <span className="text-2xl font-bold">RCB Audio & Entertainment</span>
            </div>
            <p className="text-gray-400 mb-6">Creating unforgettable musical experiences for every occasion.</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="tel:+27123456789" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:bookings@rcb-audio.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm">
                © 2025 RCB Audio & Entertainment. All rights reserved. | Professional DJ Services in Cape Town, South Africa
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;