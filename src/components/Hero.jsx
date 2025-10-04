import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        <div className="max-w-xl text-center md:text-left mt-10 md:mt-0">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6 transform transition-transform hover:scale-105">
            #1 IELTS Preparation Platform
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              Master IELTS
            </span> 
            <br />with Confidence
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Learn from expert tutors and AI-powered tools to boost your speaking, listening, reading, and writing skills for guaranteed success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-2xl transform rotate-3"></div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Students learning"
            className="rounded-2xl shadow-2xl w-full relative z-10 transform transition-transform hover:scale-105 duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
