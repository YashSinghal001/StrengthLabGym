import React from 'react'
import c1 from '../assets/c1.jpg'
import c3 from '../assets/c3.jpg'
import class3 from '../assets/class3.jpg'
import c8 from '../assets/c8.jpg'
import class6 from '../assets/class6.jpg'
import class8 from '../assets/class8.jpg'

import dumbbell from '../assets/dumbbell.png'
import bag from '../assets/bag.png'
import gym from '../assets/gym.png'
import yogapose from '../assets/yoga-pose.png'
import karate from '../assets/karate.png'
import yoga from '../assets/yoga.png'

export default function HomeClass() {
  return (
    <div>
      
      <div className="container-fluid hero-section2 mt-5 pt-5 pb-5">
    <div className="row text-center">
        <div className="maxtxt">
            <h6>Our Featured Class</h6>
<h2> We Are Offering Best Flexible Classes</h2>
        </div>
    </div>



 <div className="container mt-5 pb-5">
        <div className="row">
            <div className="col col-12 col-sm-12 col-lg-6 g-3">
    <div className="row me-1">
        <div className="card text-white ">
            <img src={c1} className="card-img imgheightmain" alt="Cycling class"/>
            <div className="card-img-overlay">
<div className="class-media">

                <div className="icon">
                   <img src={gym} className="pose" alt=""/>
                </div>
            </div>
                <h5 className="card-title">Cycling</h5>
                <p className="card-text">Wednesday: 9:00am-10:00am</p>
            </div>
        </div>
    </div>


    <div className="row pt-4">
        <div className="col col-12 col-sm-6 g-2">
            <div className="card text-white ">
                <img src={c3} className="card-img imgheight " alt="Cycling class"/>
                <div className="card-img-overlay">
<div className="class-media">

                    <div className="icon">
                    <img src={yoga} className="pose" alt=""/>
                    </div>
                </div>
                    <h5 className="card-title">Meditation</h5>
                    <p className="card-text">Thursday: 1:00pm-2:00pm</p>
                </div>
            </div>
        </div>
        

        <div className="col  col-12 col-sm-6  g-2">
            <div className="card text-white ">
                <img src={class3} className="card-img  imgheight" alt="Cycling class"/>
                <div className="card-img-overlay">
<div className="class-media">

                    <div className="icon">
                   <img src={karate} className="pose" alt=""/>
                    </div>
                </div>
                    <h5 className="card-title">Karate</h5>
                    <p className="card-text">Friday: 10:00am-11:00am</p>
                </div>
            </div>
        </div>
    </div>
            </div>







            <div className="col col-12 col-sm-12 col-lg-6 g-3">
                <div className="row ">
                    <div className="col col-12 col-sm-6 g-2">
                        <div className="card text-white ">
                            <img src={c8} className="card-img  imgheight " alt="Cycling class"/>
                            <div className="card-img-overlay">
            <div className="class-media">
            
                                <div className="icon">
                                 <img src={yogapose} className="pose" alt=""/>
                                </div>
                            </div>
                                <h5 className="card-title">Yoga</h5>
                                <p className="card-text">Monday: 11:00am-12:00am</p>
                            </div>
                        </div>
                    </div>
                    
            
                    <div className="col col-12 col-sm-6 g-2">
                        <div className="card text-white ">
                            <img src={class8} className="card-img imgheight " alt="Cycling class"/>
                            <div className="card-img-overlay">
            <div className="class-media">
            
                                <div className="icon">
                                  <img src={bag} className="pose" alt=""/>
                                </div>
                            </div>
                                <h5 className="card-title">Boxing</h5>
                                <p className="card-text">Tuesday: 9:00am-10:00am</p>
                            </div>
                        </div>
                    </div>

<div className="row pt-3 ms-1" style={{overflow:"hidden !important"}}>
    <div className="card text-white ">
        <img src={class6} className="card-img imgheightmain" alt="Cycling class"/>
        <div className="card-img-overlay">
<div className="class-media">

            <div className="icon">
         
                 <img src={dumbbell} className="pose" alt=""/>
            
            </div>
        </div>
            <h5 className="card-title">Workout</h5>
            <p className="card-text">Saturday: 8:00am-10:00am</p>
        </div>
    </div>
</div>


                
            </div>




        </div>
    </div>




    
 </div>

</div>

    </div>
  )
}
