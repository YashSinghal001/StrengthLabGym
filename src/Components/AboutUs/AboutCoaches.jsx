import React from 'react'
import coach1 from '../assets/coach_01-365x550.jpg'
import coach2 from '../assets/coach_02-365x550.jpg'
import coach3 from '../assets/coach_03-365x550.jpg'
import coach4 from '../assets/coach_04-365x550 (1).jpg'

export default function AboutCoaches() {
  return (
    <div>


<div className="container mt-5 pt-5">
    <div className="row text-center">
        <div className="maxtxt">
            <h6>our Trainer</h6>
            <h2>Meet our Coaches</h2>

            <p>Muscles grow during rest, not while working out. Adequate sleep, rest days, and recovery techniques like stretching and massage are vital components of a successful bodybuilding program.</p>
        </div>
    </div>
</div>



<div className="container  pt-3">
    <div className="row markqq text-center">
        <div className="col col-12  col-sm-6 col-md-6 col-lg-3 g-3 ">
            <div className="carddb-container">
                <div className="carddb">
                <div className="img-content">
                    <div className="carddtxt">
                        <h3>Sam Marks</h3>
                        <h4>Gym Coach</h4>
                      </div>
               <img src={coach1} alt="" width="100%" height="100%"/>
                </div>
                <div className="content">
                  <p className="heading">Sam Marksr</p>
                  <p>
                    Our experienced gym coaches offer personalized training and expert guidance to help you reach your fitness goals. With a focus on motivation and technique, they’ll ensure every workout counts.
                  </p>
                </div>
              </div>
              </div>
        </div>

        <div className="col col-12  col-sm-6 col-md-6 col-lg-3 g-3">
            <div className="carddb-container">
                <div className="carddb">
                <div className="img-content">
                    <div className="carddtxt">
                        <h3>Emily Dalton </h3>
                        <h4>Yoga Coach</h4>
                      </div>
               <img src={coach2} alt="" width="100%" height="100%"/>
                </div>
                <div className="content">
                  <p className="heading">Emily Dalton</p>
                  <p>
                    Our certified yoga coaches guide you through mindful practices that enhance flexibility, balance, and inner peace. Whether you're a beginner or advanced, our coaches tailor sessions to meet your individual needs.
                  </p>
                </div>
              </div>
              </div>
        </div>

        <div className="col col-12  col-sm-6 col-md-6 col-lg-3 g-3 ">
            <div className="carddb-container">
                <div className="carddb">
                <div className="img-content">
                    <div className="carddtxt">
                        <h3>Chris Harris</h3>
                        <h4>CrossFit Coach</h4>
                      </div>
               <img src= {coach3} alt="" width="100%" height="100%"/>
                </div>
                <div className="content">
                  <p className="heading">Chris Harris</p>
                  <p>
                    Our skilled CrossFit coaches design dynamic, high-intensity workouts to push your limits and boost overall strength. With a focus on technique and performance, they’ll help you unlock your full athletic potential.
                  </p>
                </div>
              </div>
              </div>
        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 g-3">
            <div className="carddb-container">
                <div className="carddb">
                <div className="img-content">
                    <div className="carddtxt">
                        <h3>Samantha Dyer </h3>
                        <h4>Zumba Coach</h4>
                      </div>
               <img src={coach4} alt="" width="100%" height="100%"/>
                </div>
                <div className="content">
                  <p className="heading">Samantha Dyer</p>
                  <p>
                  Our vibrant Zumba coach leads high-energy dance workouts that make fitness fun and exhilarating. With her infectious enthusiasm, she’ll have you burning calories while dancing to the rhythm of your favorite tunes.
                  </p>
                </div>
              </div>
              </div>
        </div>

    </div>
</div>
      
    </div>
  )
}
