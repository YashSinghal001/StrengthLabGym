import React from 'react'


export default function WhoWe() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="main-title mb-5">Welcome to  <span style={{color:"#ff0606"}}>Strength Lab</span> Fitness Training Center</h1>
            <img src="https://github.com/YashSinghal001/Images-Only/blob/main/about-d-1.jpg?raw=true" alt="Fitness training" className="img-fluid mt-4"/>
          </div>
          <div className="col-lg-6 mt-4">
            <h2 className="section-title">Who We Are?</h2>
            <p className="mb-4">
At Strength Lab, we are more than just a gym—we are a community dedicated to helping individuals unlock their full potential. Our mission is to provide a supportive and motivating environment where fitness enthusiasts of all levels can thrive. With state-of-the-art equipment, expert trainers, and personalized workout programs, we focus on empowering you to achieve your health and fitness goals. Whether you're just beginning your fitness journey or are an experienced athlete, Strength Lab is designed to help you push boundaries and exceed your expectations. Join us and be part of a fitness family that’s committed to growth, resilience, and strength.
            </p>
            <h2 className="section-title">What's In It For Me?</h2>
            <ul className="feature-listt">
              <li className='feat-inner-list'>22,000 square feet Gym</li>
              <li className='feat-inner-list'>State of the Art Equipment</li>
              <li className='feat-inner-list'>Programs for weight loss</li>
              <li className='feat-inner-list'>Meet Expert Trainers</li>
              <li className='feat-inner-list'>Don't take our word for it</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}