import React, { useState, useEffect } from 'react';

const testimonials = [
  { name: "Gofret", logo: "http://tofit.like-themes.com/wp-content/uploads/2024/07/logo_03.png" },
  { name: "Speak Training", logo: "	http://tofit.like-themes.com/wp-content/uploads/2024/07/logo_02.png" },
  { name: "Krempeng", logo: "http://tofit.like-themes.com/wp-content/uploads/2024/07/logo_05.png" },
  { name: "Wild Sport", logo: "http://tofit.like-themes.com/wp-content/uploads/2024/07/logo_04.png" },
  { name: "Krempeng", logo: "http://tofit.like-themes.com/wp-content/uploads/2024/07/logo_05.png" },
  { name: "Wild Cat", logo: "http://tofit.like-themes.com/wp-content/uploads/2024/07/logo_06.png" },
];

const ImageTestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name} className="col-4 col-md-2 mb-4">
            <div className={`card h-100 border-0 ${index === activeIndex ? 'active-card' : ''}`}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img 
                  src={testimonial.logo} 
                  alt={testimonial.name}
                  className="img-fluid mb-2"
                  style={{ 
                    maxHeight: index === activeIndex ? '70px' : '70px',
                    maxWidth: index === activeIndex ? '140px' : '140px',
                    objectFit: 'contain',
                    transition: 'all 0.3s ease',
                    opacity: index === activeIndex ? 1 : 0.6,
                    filter: index === activeIndex ? 'none' : 'grayscale(100%)'
                  }}
                />
                <p className="text-muted text-center small">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTestimonialCarousel;