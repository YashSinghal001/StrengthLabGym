import React, { useState, useEffect } from 'react';

export default function ReviewsAbout() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Strength Lab has everything I need for a great workout. The energy is infectious, and it keeps me coming back consistently. The trainers genuinely care about your progress, offering personalized support that's hard to find elsewhere. I highly recommend this gym!",
      name: "Rachel Williams",
    },
    {
      quote: "Strength Lab is my go-to gym! The community here is amazing, and everyone pushes each other to be their best. The facilities are always clean and spacious, so I never feel cramped during my workouts. It's the perfect place for achieving my fitness goals.",
      name: "Sarah Lewis",
    },
    {
      quote: "The best gym in town! The equipment is top-tier, and the staff is always friendly and supportive. Every workout feels productive, and the variety of equipment keeps things fresh. If you're serious about results, Strength Lab is the place to be.",
      name: "Mark Richardson",
    },
    {
      quote: "Since joining Strength Lab, my fitness has improved significantly. The trainers really know their stuff and offer great guidance. I love the variety of machines and free weights, which let me switch up my routine. This gym is a game-changer for me.",
      name: "Jessica Thompson",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonials mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 testimonial-content g-5">
            <h3 className="text-uppercase mb-3">Testimonials</h3>
            <h2 className="display-4 mb-4">Client's Reviews</h2>
            <div id="testimonialCarousel" className="carousel slide">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                    <div className="quote-icon mt-5 ">"</div>
                    <p className="mb-2">{testimonial.quote}</p>
                    <h5>{testimonial.name}</h5>
                    <p>{testimonial.title}</p>
                  </div>
                ))}
              </div>
              <div className="carousel-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={index === activeIndex ? 'active' : ''}
                    aria-current={index === activeIndex ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 g-5">
            <div className="image-placeholder">
              <img src="https://github.com/YashSinghal001/Images-Only/blob/main/clients-images.png?raw=true" className="img-fluid" alt="Clients" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}