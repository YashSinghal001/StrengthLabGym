import React from 'react'
import apple from '../assets/app-apple.png'
import google from '../assets/app-google.png'
import mob1 from '../assets/app-mob-2.png'
import mob2 from '../assets/app-mob-1.png'

export default function HDownload() {
  return (
    <div>
      
      <div className="container-fluid appdownload mt-5 pt-5 p-5">
    <div className="row align-items-center">
        <div className="col-lg-6">
            <h6 className="results-control mb-3">RESULTS CONTROL</h6>
            <h1 className="main-title mb-4">Support, motivation and results on your smartphone</h1>
            <p className="downloadbdy ">Unlock the power of support, motivation, and results—right from your smartphone. Our app brings your fitness goals closer with personalized guidance and progress tracking. Download now and transform your workout experience anytime, anywhere!</p>
            <div className="app-buttons">
                <img src={apple} alt="App Store" />
                <img src={google}  alt="Google Play" />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="row text-center appimgs">
                <div className="col frstappimg">
                    <img src={mob2} alt="GymTracker App Mockup" className="phone-mockup img-fluid"/>
                </div>
                <div className="col secondappimg">
                    <img src={mob1} alt="GymTracker App Mockup" className="phone-mockup img-fluid"/>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}
