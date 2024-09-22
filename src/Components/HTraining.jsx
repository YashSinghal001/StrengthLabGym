import React from 'react'
import train1 from '../assets/train1.png'
import train2 from '../assets/train2.png'
import train3 from '../assets/train3.png'
import { useNavigate } from 'react-router-dom';


export default function HTraining() {

    const navigate = useNavigate();

    const handleJoinNow = () => {
      navigate('/about', { state: { WhoAreWe: 'Strength Lab' } });
    };

  return (
    <div>

{/* <div className="container mt-5 pt-5">
    <div className="row text-center">
        <div className="maxtxt">
            <h6>our Blogs</h6>
<h2>Latest News Posts</h2>
        </div>
    </div>
</div> */}



       <div className="container mt-5">
        <div className="row text-center">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 g-3">
               <div className="cardclass">
                <div className="classnum">
                    <h2>01</h2>
                </div>
<img src={train1} className="img-fluid" alt=""/>
<div className="calssimgtxt">
<h2>  Group </h2>
<h2>training</h2>
</div>
               </div>
               <div className="clastxt">
                <p>Join our fitness classes for high-intensity workouts led by professional trainers designed to challenge and support all fitness levels. Achieve fitness goals together and realize the power of teamwork </p>

                <button className="button-89" onClick={handleJoinNow} role="button">Learn More</button>


               </div>


            </div>
         
            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 g-3 bderabout1">
                <div className="cardclass">
                 <div className="classnum">
                     <h2>02</h2>
                 </div>
 <img src={train2} className="img-fluid" alt=""/>
 <div className="calssimgtxt">
 <h2>Personal</h2>
 <h2>Training</h2>
 </div>
                </div>
                <div className="clastxt">
                 <p>Reach your health goals faster with one-on-one training personalized to your needs and abilities. Our professional trainers provide workout plans and motivation to help you stay on track and succeed.</p>
                </div>
                <button className="button-89" onClick={handleJoinNow} role="button">Learn More</button>

 
 
             </div>

             <div className="col col-12 col-sm-12 col-md-6 col-lg-4 g-3 bderabout2">
                <div className="cardclass">
                 <div className="classnum">
                     <h2>03</h2>
                 </div>
 <img src={train3} className="img-fluid" alt=""/>
 <div className="calssimgtxt">
 <h2>new member</h2>
 <h2>programs</h2>
 </div>
                </div>
                <div className="clastxt">
                 <p>Start your fitness journey with  our new member programs, designed to make it easier for you to join a healthy lifestyle. Enjoy personal training, special offers, and community support to help you reach your goals. </p>
                </div>
                <button className="button-89" onClick={handleJoinNow} role="button">Learn More</button>
      

             </div>
        </div>
    </div>
    </div>
  )
}
