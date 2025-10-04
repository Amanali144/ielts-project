import React from "react";

function Testimonials() {
  const testimonials = [
    { 
      name: "Aarav Patel", 
      review: "The mock tests really prepared me for the real exam. I scored 8.0 overall with 8.5 in speaking!",
      role: "Medical Student",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      score: "8.0"
    },
    { 
      name: "Sophia Li", 
      review: "Amazing teachers and flexible schedule. The recorded sessions helped me practice at my own pace. Highly recommended!",
      role: "Business Analyst",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      score: "7.5"
    },
    { 
      name: "James Smith", 
      review: "The AI feedback on writing was super helpful. I improved my score from 6.5 to 7.5 in just one month of practice.",
      role: "Engineering Student",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      score: "7.5"
    },
  ];

  return (
    <section id="testimonials" className="px-6 md:px-16 py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Success Stories</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">Join thousands of successful students who achieved their target IELTS scores with our program.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute -top-5 -right-5 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                {t.score}
              </div>
              <div className="flex items-center mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{t.name}</h4>
                  <p className="text-blue-600 text-sm">{t.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{t.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
