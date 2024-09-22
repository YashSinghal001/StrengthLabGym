import React, { useState, useEffect } from 'react';

const FitnessStats = () => {
  const [counts, setCounts] = useState({
    equipment: 0,
    coaches: 0,
    customers: 0,
    programs: 0
  });

  const finalCounts = {
    equipment: 78,
    coaches: 23,
    customers: 2000,
    programs: 16
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prevCounts => ({
        equipment: Math.min(prevCounts.equipment + Math.ceil(finalCounts.equipment / steps), finalCounts.equipment),
        coaches: Math.min(prevCounts.coaches + Math.ceil(finalCounts.coaches / steps), finalCounts.coaches),
        customers: Math.min(prevCounts.customers + Math.ceil(finalCounts.customers / steps), finalCounts.customers),
        programs: Math.min(prevCounts.programs + Math.ceil(finalCounts.programs / steps), finalCounts.programs)
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-fluid p-0 mt-5 pt-5">
      <div className="position-relative" style={{
        backgroundImage: 'url("https://github.com/YashSinghal001/Images-Only/blob/main/promo_parallax.jpg?raw=true")',
        backgroundSize: 'cover',
        backgroundPosition: '50% 11px',
        backgroundAttachment: 'fixed',
        height: '400px'
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{opacity: 0.5}}></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{zIndex: 1}}>
          <div className="text-white text-center px-4">
            <h5 className="text-uppercase mb-0">Sports motivation</h5>
            <h1 className="display-4 fw-bold mb-3">Push yourself beyond your limits</h1>
            <p className="mb-4">We will develop for you a unique nutrition program for weight loss and positive tone of the whole body</p>
            <button className="btn btn-danger  text-white bmibtnsubmit2 px-4 py-2">Get Now</button>
          </div>
        </div>
      </div>
      <div className="animation-number text-white py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Your way to an ideal body shape starts here.</h2>
            <p>Thousands of people have changed their lives for the better.</p>
          </div>
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">{counts.equipment}</h1>
              <p>Exercise Equipment</p>
            </div>
            <div className="col-md-3 col-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">{counts.coaches}</h1>
              <p>Professional Coaches</p>
            </div>
            <div className="col-md-3 col-6">
              <h1 className="display-4 fw-bold">{counts.customers > 999 ? `${Math.floor(counts.customers / 1000)}k+` : counts.customers}</h1>
              <p>Happy Customers</p>
            </div>
            <div className="col-md-3 col-6">
              <h1 className="display-4 fw-bold">{counts.programs}</h1>
              <p>Fitness Programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessStats;