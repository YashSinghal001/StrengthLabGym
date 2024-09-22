import React from 'react'
import './About.css'
import Imporving from './Imporving'
import AbouBackiMg from './AbouBackiMg'
import FitnessStats from './FitnessStats'
import FitnessGoal from './FitnessGoal'
import ReviewsAbout from './ReviewsAbout'
import WhoWe from './WhoWe'
import MissonAndVision from './MissonAndVision'
import ImageTestimonialCarousel from './ImageTestimonialCarousel'

export default function AboutUs() {
  return (
    <div>
        <AbouBackiMg/>
      <Imporving/>
      <WhoWe/>
      {/* <MissonAndVision/> */}
      <FitnessGoal/>
      <FitnessStats/>
      <ReviewsAbout/>
      <ImageTestimonialCarousel/>
    </div>
  )
}
