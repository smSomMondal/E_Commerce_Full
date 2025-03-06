import  { useState, useEffect } from 'react';
import {  FaStar, FaArrowRight } from 'react-icons/fa';

const LandingPage = () => {
  
  const [categories] = useState([
    { id: 1, name: "Electronics", icon: "🖥️", products: 245 },
    { id: 2, name: "Clothing", icon: "👕", products: 384 },
    { id: 3, name: "Home & Kitchen", icon: "🏠", products: 523 },
    { id: 4, name: "Beauty", icon: "✨", products: 198 },
    { id: 5, name: "Sports", icon: "⚽", products: 276 },
    { id: 6, name: "Books", icon: "📚", products: 412 }
  ]);

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroSlides = [
    {
      heading: "Summer Collection 2025",
      subheading: "Discover the season's hottest trends",
      cta: "Shop Now",
     
      color: "from-blue-500 to-purple-600"
    },
    {
      heading: "Tech Gadgets Sale",
      subheading: "Up to 40% off on premium electronics",
      cta: "View Deals",
     
      color: "from-emerald-500 to-teal-600"
    },
    {
      heading: "Home Essentials",
      subheading: "Transform your space with our curated selection",
      cta: "Explore",
    
      color: "from-amber-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[600px]">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentHeroIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80`}></div>
          
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-lg">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.heading}</h1>
                  <p className="text-xl text-white mb-8">{slide.subheading}</p>
                  <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition duration-300 flex items-center">
                    {slide.cta}
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentHeroIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentHeroIndex(index)}
            ></button>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <a 
                href={`/category/${category.name.toLowerCase()}`} 
                key={category.id}
                className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105 hover:shadow-md"
              >
                <span className="text-4xl mb-4">{category.icon}</span>
                <h3 className="font-medium text-lg mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.products} Products</p>
              </a>
            ))}
          </div>
        </div>
      </section>

     
      

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                image: "/api/placeholder/80/80",
                text: "I've been shopping here for years and the quality never disappoints. Fast shipping and excellent customer service!",
                rating: 5
              },
              {
                name: "Michael Chen",
                image: "/api/placeholder/80/80",
                text: "Found exactly what I was looking for at a great price. The website is easy to navigate and checkout was seamless.",
                rating: 4
              },
              {
                name: "Jessica Williams",
                image: "/api/placeholder/80/80",
                text: "My order arrived earlier than expected and the product exceeded my expectations. Will definitely shop here again!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🔒", title: "Secure Payment", text: "Your data is protected" },
              { icon: "🚚", title: "Free Shipping", text: "On orders over $50" },
              { icon: "↩️", title: "Easy Returns", text: "30-day money back" },
              { icon: "🎧", title: "24/7 Support", text: "We're here to help" }
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-4xl mb-4">{badge.icon}</span>
                <h3 className="font-bold mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-sm">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Shopping?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">Discover thousands of products at unbeatable prices. Your perfect find is just a click away.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition duration-300">
              Shop Now
            </button>
            <button className="px-8 py-3 bg-transparent text-white border border-white font-medium rounded-md hover:bg-indigo-700 transition duration-300">
              View Deals
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;