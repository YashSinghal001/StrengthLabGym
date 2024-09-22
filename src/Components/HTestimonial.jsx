import React from 'react'

export default function HTestimonial() {
  return (
    <div>

<div className="container  pt-5">
    <div className="row text-center">
        <div className="maxtxt">
            <h6>Review's</h6>
<h2>What’s Clients Say</h2>
        </div>
    </div>
</div>

      
      <div className="backimgg mt-5 pt-5">

  <div className="pathcntr">
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="82" viewBox="0 0 96 82" fill="none">
      <path d="M40.1429 40.5848L1 79.5917V1H40.1429V40.5848ZM95 40.5848L55.8571 79.5917V1H95V40.5848Z" stroke="white" stroke-width="2"></path>


    </svg>
  </div>


  {/* <!-- <div className="row"> --> */}
    <div className="col col-12 col-sm-12 col-lg-8 offset-lg-2 text-center">
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimonial-wrapper">
                    <div className="row">
                      <div className="col col-12 col-sm-12">
                        {/* <!-- <img src="testimonials-3.jpg" alt="" className="img-fluid rounded-circle"> --> */}
                      </div>
                      <div className="username">
                        <h2 className="fs-4 fw-semibold">
                          
"Strength Lab has completely transformed my fitness journey! The top-notch equipment, expert trainers, and welcoming atmosphere make every workout both enjoyable and challenging."</h2>
                          <h3 className="fs-2 fw-bold">Ryan Dawson</h3>
                          <span className="fs-5 fw-semibold">Club Member</span>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial-wrapper">
                    <div className="row">
                      <div className="col col-12 col-sm-12">
                        {/* <!-- <img src="testimonials-2.jpg" alt="" className="img-fluid rounded-circle"> --> */}
                      </div>
                      <div className="username">
                        <h2 className="fs-4 fw-semibold">
                          
This gym has everything you need to stay motivated and achieve your fitness goals. The facilities are clean, the equipment is top-notch, and the staff is incredibly supportive!</h2>
                          <h3 className="fs-2 fw-bold">Willard Henry </h3>
                          <span className="fs-5 fw-semibold">Club Member</span>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial-wrapper">
                    <div className="row">
                      <div className="col col-12 col-sm-12">
                        {/* <!-- <img src="testimonials-4.jpg" alt="" className="img-fluid rounded-circle"> --> */}
                      </div>
                      <div className="username">
                        <h2 className="fs-3 fw-semibold">
                         
The atmosphere here is so motivating, and the staff truly care about your progress. With excellent equipment and a welcoming environment, it's the perfect place to work out!</h2>
                          <h3 className="fs-2 fw-bold">Max Davis </h3>
                          <span className="fs-5 fw-semibold">Club Member</span>
                      </div>
                    </div>
                  </div>
              </div>
             <div className="carousel-item">
                <div className="testimonial-wrapper">
                    <div className="row">
                      <div className="col col-12 col-sm-12">
                      </div>
                      <div className="username">
                        <h2 className="fs-3 fw-semibold">
                         

                        "Strength Lab provides the perfect blend of professional equipment and a motivating atmosphere. I've seen amazing results and look forward to every workout here!"</h2>
                          <h3 className="fs-2 fw-bold">Tanya Doran </h3>
                          <span className="fs-5 fw-semibold">Club Member</span>
                      </div>
                    </div>
                  </div>
              </div> 
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              {/* <!-- <span className="carousel-control-prev-icon" aria-hidden="true"></span> -->
              <!-- <i className="fa-solid fa-angle-left than"></i> --> */}
               {/* <span className="carousel-control-prev-icon fw-bold " aria-hidden="true"></span> */}
               <i className="fa-solid fa-angle-left than" style={{fontSize:"50px"}}></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              {/* <!-- <span className="carousel-control-next-icon" aria-hidden="true"></span> -->
              <!-- <i className="fa-solid fa-angle-right than"></i> --> */}
              {/* <span className="carousel-control-next-icon fw-bold" aria-hidden="true"></span> */}
              <i className="fa-solid fa-angle-right than" style={{fontSize:"50px"}}></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

      
    </div>   
  {/* <!-- </div> --> */}
</div> 

    </div>
  )
}
