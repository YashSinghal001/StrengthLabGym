import React from 'react'

export default function BlogWholeSection() {
  return (
    <div>
      
      <div class="container mt-5 pt-5 ">
        <div class="row">
            <main class="col-lg-8">
                <div class="featured-post mb-4">
                    <img src="https://images.squarespace-cdn.com/content/v1/5e7e6f5a6ab6a703524116ae/8a1fde14-3f5f-4470-90a0-621a9c2cb7f7/one-on-one-fitness-spartanburg-sc-gym" alt="Featured post" class="img-fluid rounded"/>
                    <h2 class="mt-3 fw-semibold">Elevate Your Fitness: Where Strength Meets Transformation</h2>
                    <p class="text-muted ready-para" >Ready to take your fitness journey to the next level? Our gym is more than just a place to work out—it's a community dedicated to helping you transform both body and mind. With state-of-the-art equipment, expert trainers, and a variety of classes from high-intensity workouts to yoga, we provide everything you need to crush your goals. Whether you're aiming to build muscle, improve endurance, or boost your mental clarity, we’ve got you covered. Join us and experience the perfect blend of strength, support, and motivation to unlock the best version of yourself!</p>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="post-container">
                            <span class="tag bg-danger text-white">Fitness</span>
                            <img src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/blog-post-img-7.jpg" alt="Yoga" class="post-image"/>
                            {/* <!-- <span class="tag bg-info text-white">Fitness</span> -->
                            <!-- <span class="post-tag bg-danger text-white">Yoga</span> --> */}
                            <div class="post-content">
                                <h2 class="post-title">Power Up Your Workout</h2>
                                <p class="post-meta">By Admin | September 20, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="post-container">
                            <span class="tag bg-danger text-white">Fitness</span>
                            <img src="https://kropp.qodeinteractive.com/wp-content/uploads/2022/05/shutterstock_256985293.jpg" alt="Yoga" class="post-image"/>
                            {/* <!-- <span class="tag bg-info text-white">Fitness</span> -->
                            <!-- <span class="post-tag bg-danger text-white">Yoga</span> --> */}
                            <div class="post-content">
                                <h2 class="post-title">Get Stronger, Feel Better</h2>
                                <p class="post-meta">By Admin | September 12, 2024</p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-6 mb-4">
                        <div class="carded text-white">
                            <span class="tag bg-danger text-white">Fitness</span>
                            <img src="https://img.freepik.com/premium-photo/sport-bodybuilding-lifestyle-people-concept-young-man-woman-with-barbell-flexing-muscles-making-shoulder-press-squat-gym-trainer-fitness-girl-are-having-workout-gym_116317-20195.jpg?w=360" class="carded-img " alt="Fitness"/>
                            <div class="post-content">
                                <h2 class="post-title">Stronger Every Day</h2>
                                <p class="post-meta">By Admin | August 26, 2024</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 mb-4">
                        <div class="carded text-white">
                            <span class="tag bg-danger text-white">Yoga</span>
                            <img src="https://media.istockphoto.com/id/1554791030/photo/asian-chinese-woman-practicing-yoga-stretching-in-public-park-weekend-morning.webp?b=1&s=612x612&w=0&k=20&c=AJVGKN7CIicMfDWMMZ_k4ac8gA1QQR4i51Z90HdS1ZI=" class="carded-img " alt="Fitness"/>
                            <div class="post-content">
                                <h2 class="post-title">Yoga for Life</h2>
                                <p class="post-meta">By Admin | August 30, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-container">
                    <h2 class="mb-4">LEAVE A REPLY</h2>
                    <p class="text-muted  mb-4">Your email address will not be published. Required fields are marked *</p>
                    <form id="replyForm" class="needs-validation" novalidate>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="name" placeholder="Name *" required/>
                                <div class="invalid-feedback">
                                    Please provide your name.
                                </div>
                            </div>
                            <div class="col-md-6">
                                <input type="email" class="form-control" id="email" placeholder="Email *" required/>
                                <div class="invalid-feedback">
                                    Please provide a valid email address.
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <input type="url" class="form-control" id="website" placeholder="Website"/>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="comment" rows="6" placeholder="Comment *" required></textarea>
                            <div class="invalid-feedback">
                                Please enter your comment.
                            </div>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="saveInfo"/>
                            <label class="form-check-label" for="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button type="submit" class="btn btn-post-comment">Post Comment <span>&rarr;</span></button>
                    </form>
                </div>

                <div>
                    <h2 class="mt-5 mb-4">3 COMMENTS</h2>
                    <div class="comment">
                        <div class="d-flex">
                            <img src="https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=80&d=mm&r=g" alt="Joe Doe" class="avatar me-3"/>
                            <div>
                                <h5 class="mb-0">Joe Doe</h5>
                                <small class="text-muted date-year">September 22, 2024</small>
                                <p class="mt-2">This is exactly the motivation I needed today! Thanks for sharing such a great workout routine!</p>
                                <a href="#" class="reply-btn"><i class="fas fa-reply"></i> REPLY</a>
                            </div>
                        </div>
                    </div>
                    <div class="comment">
                        <div class="d-flex">
                            <img src="https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=80&d=mm&r=g" alt="Mike" class="avatar me-3"/>
                            <div>
                                <h5 class="mb-0">Mike</h5>
                                <small class="text-muted date-year ">September 1, 2024</small>
                                <p class="mt-2">I’ve struggled with finding a routine that works for me, but this blog has given me fresh ideas. Thank you!</p>
                                <a href="#" class="reply-btn"><i class="fas fa-reply"></i> REPLY</a>
                            </div>
                        </div>
                    </div>

                    <div class="comment">
                        <div class="d-flex">
                            <img src="https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=80&d=mm&r=g" alt="Mike" class="avatar me-3"/>
                            <div>
                                <h5 class="mb-0">Alex</h5>
                                <small class="text-muted date-year">August 28, 2024</small>
                                <p class="mt-2">I’ve struggled with finding a routine that works for me, but this blog has given me fresh ideas. Thank you!</p>
                                <a href="#" class="reply-btn"><i class="fas fa-reply"></i> REPLY</a>
                            </div>
                        </div>
                    </div>

                    <div class="comment">
                        <div class="d-flex">
                            <img src="https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=80&d=mm&r=g" alt="Elicia" class="avatar img me-3"/>
                            <div>
                                <h5 class="mb-0">Elicia</h5>
                                <small class="text-muted date-year">August 22, 2024</small>
                                <p class="mt-2">Great tips for staying consistent with my workouts, especially during busy weeks. Keep these coming!</p>
                                <a href="#" class="reply-btn"><i class="fas fa-reply"></i> REPLY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <aside class="col-lg-4">
                <div class="mb-5">
                    <h3>Search here</h3>
                    <form id="searchForm" class="input-group">
                        <input type="text" class="form-control" placeholder="Search..." required/>
                        <button class="btn btn-primary search-btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>

                <div class="mb-5">
                    <h3>Categories</h3>
                    <div class="lineheading"></div>
                    {/* <!-- <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Boxing
                            <span class="badge bg-primary rounded-pill">12</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Running
                            <span class="badge bg-primary rounded-pill">12</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Yoga
                            <span class="badge bg-primary rounded-pill">12</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Fitness
                            <span class="badge bg-primary rounded-pill">12</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Meditation
                            <span class="badge bg-primary rounded-pill">12</span>
                        </li>
                    </ul> --> */}
           
{/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"> */}

<div class="category-list">
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>
       
        <i class="fas fa-chevron-right ml-2"></i>
        &nbsp; Body Building 
      </span>
      <span class="badge badge-secondary Category">(4)</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>
       
        <i class="fas fa-chevron-right ml-2"></i>
       &nbsp; Boxing 
      </span>
      <span class="badge badge-secondary Category">(1)</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>
         
        <i class="fas fa-chevron-right ml-2"></i>
        &nbsp; Crossfit
      </span>
      <span class="badge badge-secondary Category">(1)</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>
         
        <i class="fas fa-chevron-right ml-2"></i>
        &nbsp; Fitness
      </span>
      <span class="badge badge-secondary Category">(3)</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>
         
        <i class="fas fa-chevron-right ml-2"></i>
        &nbsp; Meditation
      </span>
      <span class="badge badge-secondary Category">(1)</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>
         
        <i class="fas fa-chevron-right ml-2"></i>
        &nbsp; Yoga
      </span>
      <span class="badge badge-secondary Category">(1)</span>
    </li>
  </ul>
</div>

                
                
                </div>

                <div class="mb-5 recent-post">
                    <h3 >Recent Post</h3>
<div class="lineheading"></div>

                    <div class="small-carded">
                        <img src="https://www.bodybuilding.com/images/2016/july/the-best-3-day-plan-work-out-less-get-more-ripped-bigshot-v2-830x467.jpg" alt="Training Techniques"/>
                        <div>
                            <p class="mb-0 "><small class="text-muted september-text"><i class="far fa-clock"></i> September 10, 2024 </small></p>
                            <h6 class="mb-0 bolgsmalllimgtxt">
                                Building a Long-Term Workout Routine</h6>
                        </div>
                    </div>

                  


                    <div class="small-carded">
                        <img src="https://myxperiencefitness.com/wp-content/uploads/2021/06/shutterstock_583754929-scaled.jpg.webp" alt="Training Techniques"/>
                        <div>
                            <p class="mb-0 "><small class="text-muted september-text"><i class="far fa-clock"></i> September 8, 2024 </small></p>
                            <h6 class="mb-0 bolgsmalllimgtxt">Why Warm-Ups Are Essential Before Gym</h6>
                        </div>
                    </div>

                    <div class="small-carded">
                        <img src="https://images.everydayhealth.com/images/diet-nutrition/weight/our-weight-loss-calculator-can-determine-daily-calories-1440x810.jpg?sfvrsn=f2f9376c_1" alt="Training Techniques"/>
                        <div>
                            <p class="mb-0 "><small class="text-muted september-text"><i class="far fa-clock"></i> September 1, 2024 </small></p>
                            <h6 class="mb-0 bolgsmalllimgtxt">How to Calculate Calories for Your Workout</h6>
                        </div>
                    </div>

                    <div class="small-carded">
                        <img src="https://www.ericfavre.com/lifestyle/uk/wp-content/uploads/sites/15/2021/09/iStock-1132086672-1024x683-1.jpg" alt="Training Techniques"/>
                        <div>
                            <p class="mb-0 "><small class="text-muted september-text"><i class="far fa-clock"></i> August 25, 2024 </small></p>
                            <h6 class="mb-0 bolgsmalllimgtxt">
                                Training Safely: Reducing the Risk of Injury</h6>
                        </div>
                    </div>

                    <div class="small-carded">
                        <img src="https://www.trifectanutrition.com/hubfs/how-to-gain-weight-fast-secrets-for-skinny-guys.jpg" alt="Training Techniques"/>
                        <div>
                            <p class="mb-0 "><small class="text-muted september-text"><i class="far fa-clock"></i> August 20, 2024 </small></p>
                            <h6 class="mb-0 bolgsmalllimgtxt">
                                Secrets to Effective Weight Gain</h6>
                        </div>
                    </div>


                    <div class="small-carded">
                        <img src="https://images.moneycontrol.com/static-mcnews/2024/06/20240619090804_Best-yoga-poses-.jpg?impolicy=website&width=770&height=431" alt="Training Techniques"/>
                        <div>
                            <p class="mb-0 "><small class="text-muted september-text"><i class="far fa-clock"></i> August 10, 2024 </small></p>
                            <h6 class="mb-0 bolgsmalllimgtxt">
                                Incorporating Yoga into Your Fitness Routines</h6>
                        </div>
                    </div>


                </div>


                <div class="mb-5 back-tag">
                    <h3>Popular tags</h3>
                    <div class="lineheading"></div>
                    <div class="popular-tags">
                        <span class="badge">Cardio </span>
                        <span class="badge">Fat Loss</span>
                        <span class="badge">Flexibility</span>
                        <span class="badge">Fitness </span>
                        <span class="badge">Gym Motivation</span>
                        <span class="badge">Healthy Lifestyle</span>
                        <span class="badge">Nutrition </span>
                        <span class="badge">Strength </span>
                        <span class="badge">Workout </span>
                        <span class="badge">Yoga </span>
                        <span class="badge">Powerlifting </span>
                    </div>
                </div>

                <div class="  mb-5 back-tag">
                    <h3>Gallery</h3>
                    <div class="lineheading"></div>
                    <div class="popular-tags " >
                    <div class="row gallery">
                        <div class="col-4"><img src="https://demo2.wpopal.com/gofiz/wp-content/uploads/2024/08/gallery-2-150x150.jpg" alt="Gallery 1" class="img-fluid"/></div>
                        <div class="col-4"><img src="https://demo2.wpopal.com/gofiz/wp-content/uploads/2024/08/gallery-1-150x150.jpg" alt="Gallery 2" class="img-fluid"/></div>
                        <div class="col-4"><img src="https://demo2.wpopal.com/gofiz/wp-content/uploads/2024/08/gallery-6-150x150.jpg" alt="Gallery 3" class="img-fluid"/></div>
                        <div class="col-4"><img src="https://demo2.wpopal.com/gofiz/wp-content/uploads/2024/08/gallery-5-150x150.jpg" alt="Gallery 4" class="img-fluid"/></div>
                        <div class="col-4"><img src="https://demo2.wpopal.com/gofiz/wp-content/uploads/2024/08/gallery-4-150x150.jpg" alt="Gallery 5" class="img-fluid"/></div>
                        <div class="col-4"><img src="https://demo2.wpopal.com/gofiz/wp-content/uploads/2024/08/gallery-3-150x150.jpg" alt="Gallery 6" class="img-fluid"/></div>
                    </div>
                </div>
</div>

<div class="posterr">
    <div class="posterr-top">
        <div class="posterr-title">
            <h2>Strength Lab</h2>
        </div>
        <div class="posterr-percentage">
            <h3>35%</h3>
            <div class="discount">
                <h4>Falt Discount</h4>
            </div>
        </div>
    </div>
</div>




                
            </aside>
        </div>
    </div>

      
    </div>
  )
}
