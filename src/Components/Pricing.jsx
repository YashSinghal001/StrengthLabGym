import React from 'react'
import P1 from '../assets/P1.jpg'
import P2 from '../assets/P2.avif'
import P3 from '../assets/P3.jpg'



export default function Pricing() {
  return (
    <div>

<div className="container mt-5  pt-5">
    <div className="row text-center">
        <div className="maxtxt">
            <h6>Pricing Chart</h6>
<h2>Exclusive Pricing Plan</h2>
<p>Explore our flexible membership options and choose the plan that fits your fitness goals and budget.</p>
        </div>
    </div>
</div>

      
      <div className="container pt-4 ">
    <div className="row">
        <div className="col-md-4  g-3">
            <div className="pricing-element rounded shadow-lg p-4 text-center">
     
                <div className="pricing-image-container">
                    <img src={P1} alt="Gym background" className="pricing-image"/>
                </div>
                <div className="pricing-overlay"></div>
                <div className="pricing-content">
                    <h3 className="mb-4"> Basic Plan</h3>
                    <p>The Basic Plan is designed for those who want access to core gym facilities at an affordable rate. Perfect for beginners or those with a more casual workout routine.</p>
                    <h1 className="pricing-title mb-4">&#8377;2,999 <small className="text-muted">/ For 3 Month</small></h1>
                    <ul className="feature-list list-unstyled mb-5">
                        <li className="mb-3">Access to all gym equipment</li>
                        <li className="mb-3">Locker room and shower access</li>
                        <li className="mb-3">Complimentary fitness orientation</li>
                        <li className="mb-3">Locker access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-custom w-100">Get started</button>
                </div>
            </div>
        </div>

        <div className="col-md-4 g-3">
            <div className="pricing-element rounded shadow-lg p-4 text-center">
             
                <div className="pricing-image-container">
                    <img src={P2} alt="Gym background" className="pricing-image"/>
                </div>
                <div className="pricing-overlay"></div>
                <div className="pricing-content">
                    <h3 className="mb-4">Plus Plan</h3>
                    <p>The Plus Plan is perfect for those who want a little extra. Enjoy full access to our gym, group classes, and personalized support to help you stay on track.</p>
                    <h1 className="pricing-title mb-4">&#8377;7,999 <small className="text-muted">/For 6 Month</small></h1>
                    <ul className="feature-list list-unstyled mb-5">
                        <li className="mb-3">Full access to all gym equipment</li>
                        <li className="mb-3">Unlimited group fitness classes (spinning, yoga, Pilates, and more)
                        </li>
                        <li className="mb-3">Monthly fitness assessments with a trainer
                        </li>
                        <li className="mb-3">Access to premium locker rooms
                        </li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-custom w-100">Get started</button>
                </div>
            </div>
        </div>

        <div className="col-md-4  g-3">
            <div className="pricing-element rounded shadow-lg p-4 text-center">
                <div className="popular-badge">Popular</div>
                <div className="pricing-image-container">
                    <img src={P3} alt="Gym background" className="pricing-image"/>
                </div>
                <div className="pricing-overlay"></div>
                <div className="pricing-content">
                    <h3 className="mb-4">Premium Plan</h3>
                    <p>Our Premium Plan offers an all-inclusive fitness package. This plan is perfect for those who are serious about their fitness goals and want to take advantage of everything we offer.</p>
                    <h1 className="pricing-title mb-4">&#8377;13,999 <small className="text-muted ">/ For 1 Year</small></h1>
                    <ul className="feature-list list-unstyled mb-5">
                        <li className="mb-3">Everything in the Plus Plan

                        </li>
                        <li className="mb-3">Personal training sessions 

                        </li>
                        <li className="mb-3">Customized workout and nutrition plans

                        </li>
                        <li className="mb-3">Priority booking for classes 
                        </li>
                        <li className="mb-3">Exclusive access to member events 
                        </li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-custom w-100">Get started</button>
              
                </div>
            </div>
        </div>



    </div>
</div>



    </div>
  )
}
