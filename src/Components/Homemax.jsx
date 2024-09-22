import React from 'react'
import benefitsbg from '../assets/benefits-bg.jpg'
import shake from '../assets/healthy-shakes-svgrepo-com.svg'
import shower from '../assets/shower-svgrepo-com.svg'
import dumbell from '../assets/dumbbell-svgrepo-com (1).svg'



export default function Homemax() {
  return (
    <div>
    
    <div className="container mt-5 pt-5">
    <div className="row">
        <div className="col-xl-6 g-3">
            <img src={benefitsbg} alt="Woman with yoga mat" className="img-fluid rounded-4" />
        </div>

        <div className="col-xl-6 g-3">
            <div className="maxtxt">
                <h6>our benefits</h6>
<h2>Maximum comfort <br/> 
    and care for our gym <br/> 
    visitors</h2>
            </div>
            <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center">
                    <div className="icon-bg me-3">
                        <img src={dumbell} width="50px" alt=""/>
                    </div>
                    <div>
                        <h5 className="mb-1 professionaleqi">Professional Equipment</h5>
                        <p className="mb-0 equipment-text professionaleqip">Our gym is equipped with top-of-the-line professional equipment, designed to meet the needs of all fitness levels. From advanced weight machines to state-of-the-art cardio gear, we ensure a comprehensive workout experience for every member.</p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="icon-bg me-3">
                     <img src={shower} width="50px" alt=""/>
                    </div>
                    <div>
                        <h5 className="mb-1 professionaleqi">Bathing Area</h5>
                        <p className="mb-0 equipment-text professionaleqip">Our gym offers a clean and modern bathing area facility, equipped with spacious showers and high-quality toiletries for your convenience. Enjoy a refreshing and relaxing experience post-workout, ensuring you leave the gym feeling rejuvenated.
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="icon-bg me-3">
                     <img src={shake} width="50px"  alt=""/>
                    </div>
                    <div>
                        <h5 className="mb-1 professionaleqi">Healthy Snack Bar</h5>
                        <p className="mb-0 equipment-text professionaleqip">Our gym features a healthy snack bar, offering a variety of nutritious snacks and drinks to fuel your fitness journey. Whether you need a quick energy boost before your workout or a post-exercise recovery snack, we’ve got you covered with delicious, wholesome options.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}
