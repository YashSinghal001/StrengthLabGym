import React from 'react'
import blog3 from '../assets/blog_03-150x150.jpg'
import sleep from '../assets/sleep.jpg'
import strech from '../assets/strech.jpeg'
import blog4 from '../assets/blog_04-150x150.jpg'
import whey from '../assets/Whey.jpeg'
import blog2 from '../assets/blog_02-495x700.jpg'
import blog1 from '../assets/blog_01-495x700.jpg'


export default function HBlogs() {
  return (
    <div>
      <div className="container mt-5 pt-5">
    <div className="row text-center">
        <div className="maxtxt">
            <h6>our Blogs</h6>
<h2>Latest News Posts</h2>
        </div>
    </div>
</div>


<div className="container mt-5 ">
    <div className="row">
        <div className="col-xxl-8">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="carded text-white">
                        <span className="tag bg-info text-white">Fitness</span>

                        <img src={blog1} className="carded-img img-fluid" alt="Fitness"/>
                        <div className="carded-img-overlay d-flex flex-column justify-content-end">

                         

                            <h5 className="carded-title">How to Build Muscle Mass and Strength</h5>
                            <p className="carded-text"><small><i className="far fa-clock"></i> September 10, 2024 &nbsp; <i className="far fa-comment redicons"></i> 1k</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="carded text-white">
                        <span className="tag bg-info text-white">Bodybuilding</span>
                        <img src={blog2} className="carded-img img-fluid" alt="Bodybuilding"/>
                        <div className="carded-img-overlay d-flex flex-column justify-content-end">
                            
                            <h5 className="carded-title">The Ultimate Beginner's Guide to Starting CrossFit</h5>
                            <p className="carded-text"><small><i className="far fa-clock"></i> August 2, 2024 &nbsp; <i className="far fa-comment redicons"></i> 6k</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xxl-4">
            <div className="small-carded">
                <img src={whey} alt="Training Techniques"/>
                <div>
                    <p className="mb-0 "><small className="text-muted date-yearr"><i className="far fa-clock"></i> September 5, 2024 &nbsp; <i className="far fa-comment redicons"></i> 800</small></p>
                    <h6 className="mb-0 bolgsmalllimgtxt">Whey Protein vs. Whey Isolate: Insights from Anytime Fitness</h6>
                </div>
            </div>
            <div className="small-carded">
                <img src={blog4} alt="Balanced Fitness Routine"/>
                <div>
                    <p className="mb-0"><small className="text-muted date-yearr"><i className="far fa-clock"></i> August 6, 2024 &nbsp; <i className="far fa-comment redicons"></i> 1k</small></p>
                    <h6 className="mb-0 bolgsmalllimgtxt">How to Create a Balanced Fitness Routine That Promotes Total Body Health</h6>
                </div>
            </div>
            <div className="small-carded">
                <img src={strech} alt="Progressive Overload"/>
                <div>
                    <p className="mb-0"><small className="text-muted date-yearr"><i className="far fa-clock"></i> June 8, 2024 &nbsp; <i className="far fa-comment redicons"></i> 5k</small></p>
                    <h6 className="mb-0 bolgsmalllimgtxt">The Benefits of Stretching: Preventing Injuries and Enhancing Flexibility  </h6>
                </div>
            </div>
            <div className="small-carded">
                <img src={sleep} alt="Progressive Overload in Training"/>
                <div>
                    <p className="mb-0"><small className="text-muted date-yearr"><i className="far fa-clock"></i> June 10, 2024 &nbsp; <i className="far fa-comment redicons"></i> 6k</small></p>
                    <h6 className="mb-0 bolgsmalllimgtxt">The Importance of Sleep in Fitness and Muscle Recovery: Tips for a Better Sleep Schedule</h6>
                </div>
            </div>

            <div className="small-carded">
                <img src={blog3} alt="Training Techniques"/>
                <div>
                    <p className="mb-0 "><small className="text-muted date-yearr"><i className="far fa-clock"></i> June 5, 2024 &nbsp; <i className="far fa-comment redicons"></i> 2k</small></p>
                    <h6 className="mb-0 bolgsmalllimgtxt">Effective Training Techniques That Will Maximize Your Workout Results</h6>
                </div>
            </div>


        </div>
    </div>
</div>

    </div>
  )
}
