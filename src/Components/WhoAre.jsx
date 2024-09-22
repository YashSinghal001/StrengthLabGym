import React from 'react'
import logo from '../assets/logo.png'
import barbell from '../assets/barbell.png'
import gymequipment from '../assets/gym-equipment.png'
import weightlifting from '../assets/weightlifting.png'
import run from '../assets/about-4-removebg-preview.png'
import { useNavigate } from 'react-router-dom';




export default function WhoAre() {


    const navigate = useNavigate();

    const handleJoinNow = () => {
      navigate('/about', { state: { WhoAreWe: 'Strength Lab' } });
    };

  return (
    <div>
      
      {/* <!-- About --> */}
<div className="container-fluid mt-5 pt-5 hero-section py-5 ">
    <div className="red-circle"></div>
    <div className="container-fluid hero-content">
        <div className="row align-items-center">
            <div className="col-lg-6" style={{color:"#323131"}}>
                <h2 className="whoare">WHO WE ARE</h2>
                <h3 className="fw-bold mb-4 take-h3">Take Your Health And Body To Next Level</h3>
                <p className=" mb-4 at-p">At Strength Lab, we are dedicated to transforming fitness journeys with expert guidance and cutting-edge facilities. Our goal is to empower individuals to push their limits and reach new heights in their health and fitness. Whether you're a beginner or an experienced athlete, we are here to support your growth every step of the way.</p>
                <div className="row mb-4 text-center">
                    <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center flex-column ">
                           <img src={weightlifting} width="65px" className="aboutimgg" alt=""/>
                            <h5 className=" abouttxt">PROFESSIONAL TRAINERS</h5>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center flex-column bderabout">
                       <img src={gymequipment} width="65px " className="aboutimgg" alt=""/>
                            <h5 className=" abouttxt">MODERN EQUIPMENTS</h5>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center flex-column bderabout ">
                        
                            <img src={barbell} width="65px" className="aboutimgg" alt=""/>
                    
                            <h5 className=" abouttxt">BODY BUILDING MACHINE</h5>
                        </div>
                    </div>
                </div>
           
                <button className="button-89 mt-5" onClick={handleJoinNow} role="button">TAKE A TOUR</button>
    
            </div>
        </div>
    </div>
    <img src={run} alt="Fitness model" className="hero-image d-none d-lg-block"/>
</div>
{/* <!--  --> */}


    </div>
  )
}
