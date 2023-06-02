import React, { useState } from 'react'

import './closesellertv.css';
import './slider.css';

import arrow from '../image/home/arrow.png'
import prodcast from '../image/closetv/prodcast.png'
import comedy from '../image/closetv/comedy.png'
import img1 from '../image/closetv/moiecom1.png'
import img2 from '../image/closetv/Img 2.png'
import img3 from '../image/closetv/moviecom2.png'
import elearn from '../image/closetv/e-learning.png'
import pastevent from '../image/closetv/pastevent.png'
import event2 from '../image/closetv/event2.png'
import event3 from '../image/closetv/event3.png'
import upcomingEvent from '../image/closetv/upcoingEvent.png'



import Footer from '../components/Footer';




const ClosesellerTv = () => {

  return (
    <div className="close-seller-tv">
        <div className="container">
            {/* After Navbar............... */}

        <section className="after-koks">
            <div className="after-nav-koks">
                <p  data-aos="zoom-in">Welcome to closeSeller Tv</p>
                <h2 data-aos="zoom-in">Your one-stop-channel for entertainment, education, and social engagement.</h2>
                <p  data-aos="fade-up">We offer a wide variety of social activities that are designed to keep you engaged and entertained, no matter what your interests are.</p>
            </div>
        </section>
            {/*END After Navbar............... */}

            {/* START SOCIAL ACTIVITIES............... */}

            <section className="social-activities">
                <div className="social-act">
                   <div className="h-1">
                   <h1  data-aos="fade-up">We offer a diverse range of social activities.</h1>
                   </div>

                    <div className="activities">


                        <div className="activity activity-1">
                            
                            <div className="detial-1">
                            <span>TV Prodcast</span>
                            <p data-aos="fade-up" >Our online streaming event, "Talk Ur Mind," is a must-see for anyone who loves engaging in controversial topics. We host a range of guests, including business people, artists, influencers, students, and members of the public, all of whom bring their unique perspectives to the discussion.</p>
                            <div className="prodacst-but">
                           <a href="">View Our Prodcast <img src={arrow} alt="" /></a>
                           </div>
                            </div>

                            <div className="detial-img"  data-aos="zoom-out">
                                <img src={prodcast} alt="" />
                            </div>
                        </div>
                        <div className="activity activity-2">
                        <div className="detial-img">
                                <img src={comedy} alt="" />
                            </div>

                            <div className="detial-1">
                            <span data-aos="fade-up"> TV Prodcast</span>
                            <p data-aos="fade-up">Our online streaming event, "Talk Ur Mind," is a must-see for anyone who loves engaging in controversial topics. We host a range of guests, including business people, artists, influencers, students, and members of the public, all of whom bring their unique perspectives to the discussion.</p>
                           <div className="prodacst-but">
                           <a href="">View Our Prodcast <img src={arrow} alt="" /></a>
                           </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>

            {/* END SOCIAL ACTIVITIES............... */}

            {/* START MOVIE COMMUNITY.................... */}
          
          <section className="movie-community">
            <div className="movie-comm">
                <div className="movie-1">
                    <span data-aos="zoom-in">Movie Community</span>
                    <p>For movie lovers, our movie community is the perfect place to be. Whether you're a die-hard film buff or just enjoy watching the occasional movie, we've got something for everyone.</p>
                </div>
                
                <div className="movie-img">
                    <div className="img-1">
                        <img src={img1} alt="" data-aos="zoom-in"/>
                    </div>
                    <div className="img-2">
                        <img src={img2} alt=""  data-aos="zoom-in"/>
                    </div>
                    <div className="img-3">
                        <img src={img3} alt=""  data-aos="zoom-in"/>
                    </div>

                </div>
            </div>
          </section>

          <section>
          <div className="movie-1 slider-movie">
                    <span data-aos="zoom-in">Movie Community</span>
                    <p>For movie lovers, our movie community is the perfect place to be. Whether you're a die-hard film buff or just enjoy watching the occasional movie, we've got something for everyone.</p>
                </div>
          </section>

        {/* IMAGE SLIDER SECTION.............. */}
          <section className='slide-sec'>
            
          <div class="container-slide">


<input type="radio" name="slider" class="d-none" id="s1"  defaultChecked />
<input type="radio" name="slider" class="d-none" id="s2"/>
<input type="radio" name="slider" class="d-none" id="s3"/>
<input type="radio" name="slider" class="d-none" id="s4"/>
<input type="radio" name="slider" class="d-none" id="s5"/>

<div class="cards">
  <label for="s1" id="slide1">
    <div class="card">
      <div class="image">
        <img src="https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/350134196_3562607053969132_5395996830974223312_n.jpg?stp=dst-jpg_p180x540&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFiW_RJwIlW2-5mxKTQz9MIOc-F_vY08ss5z4X-9jTyy8dkEybHzfigXO9K6umXdKx_prAS36WMZ-kZcRcvEFmh&_nc_ohc=E3FuANX8bP0AX-q0_qz&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&oh=00_AfAiInYdbkveNUyKRkRHnwqG4RXoTpDHB1XHlJQMtdCf4g&oe=647F79DB" />
        <div class="dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    
    </div>
  </label>

  <label for="s2" id="slide2">
    <div class="card">
      <div class="image">
        <img src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/350266373_816697849890631_7686188041387389215_n.jpg?stp=dst-jpg_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeE3FD4Eh8CYXoIMx8xxdnkrebRV8NejyWx5tFXw16PJbE0fpk7mfxkpKe0lc67hjFCO8IRGxn0xhs_UVstb_bLN&_nc_ohc=q_Q7hgUv8aoAX9FvDll&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfCZgz3WAmRmIDr3wcME7Kng_8lwBgvn2LVNi1kAnnXOiQ&oe=647E1172"/>
        <div class="dots">
          <div class="dot1"></div>
          <div class="dot2"></div>
          <div class="dot3"></div>
        </div>
      </div>
    </div>
  </label>

  <label for="s3" id="slide3">
    <div class="card">
      <div class="image">
        <img src="https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/350344087_176731325055333_2276892590452765154_n.jpg?stp=dst-jpg_s640x640&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEW43_Qvb4tF3livhn10nDzCvjkoRlvn6QK-OShGW-fpNDl3kNHxh2JCb96avBd1yExjcyBdjXCQjMgHXZn84cW&_nc_ohc=508hAB6GywIAX-6rkF1&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&oh=00_AfAA8cGVmxDZNE4cddOb1q5SXaSgJPFqlkw8k0jDiqTk0A&oe=647DCAED"/>
        <div class="dots">
          <div class="dot1"></div>
          <div class="dot2"></div>
          <div class="dot3"></div>
        </div>
      </div>
     
    </div>
  </label>

  <label for="s4" id="slide4">
    <div class="card">
      <div class="image">
        <img src="https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/350786270_1009822120192129_2678633398341624595_n.jpg?stp=dst-jpg_p180x540&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFNlkDf4l7r_gnjRtE2j0A_8fB1J-VsSMLx8HUn5WxIwq5dNQnXq-nn5kBvLNyVZBvRY9p1CM0CYDPgsaO8Ou47&_nc_ohc=ZIOewuRRBYAAX8lvQbP&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&oh=00_AfD1wx3NA93lUH5uiWsmH5isNE73CHXxX9A_-z-6dAYe-g&oe=647F1539" />
        <div class="dots">
          <div class="dot1"></div>
          <div class="dot2"></div>
          <div class="dot3"></div>
        </div>
      </div>
    
    </div>
  </label>

  <label for="s5" id="slide5">
    <div class="card">
      <div class="image">
      <img src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/350810016_1205123203533786_4864193887414631307_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGTMEG6cvHVWHaryb-64SmueGLdjok0AlZ4Yt2OiTQCVqeEwtPndGpAdqgX9Qj6YsRDiSd-YbzHWeyNsSaOx2iu&_nc_ohc=Z3997N7ChBUAX_36X4b&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfDc3KvTbofm87bQDDAotxPzq-61JdtEReniGOWv9P6MKA&oe=647E8C1A" />
        <div class="dots">
          <div class="dot1"></div>
          <div class="dot2"></div>
          <div class="dot3"></div>
        </div>
      </div>
     
    </div>
  </label>
</div>

</div>


          </section>
          
            {/* END MOVIE COMMUNITY.................... */}


            {/* START E-LEARNING AREA........................ */}
            <section className="e-learning">

            <div className="activity activity-2">
                        <div className="detial-img">
                                <img src={elearn} alt=""   />
                            </div>

                            <div className="detial-1">
                            <span >E-Learning</span>
                            <p >We believe in the power of education, which is why we offer a range of side hustle tutorials and educational videos on our YouTube channel. Whether you're looking to learn a new skill or just want to brush up on your existing knowledge, we've got you covered.</p>
                            
                            </div>

                        </div>

            </section>
            {/* END E-LEARNING AREA........................ */}

            {/* START TRAINING EVENTS............................ */}
        <section className="training-sec">

            <div className="training-event">
                <h2  data-aos="fade-down">Training Events</h2>
                <p  data-aos="fade-up" data-aos-duration="3000">At Closeseller, we're always hosting new and exciting events and programs. Whether it's a training seminar, a workshop, or a networking event, we've got something for everyone. And if you're unable to attend one of our events, you can always check out our website to see photos and highlights from past events.</p>
                <div className="traing-flex">
                    <div className="pic-1">
                        <img src={pastevent} alt=""  data-aos="zoom-in" data-aos-duration="3000" />
                    </div>
                    <div className="pic-2">
                        <img src={event2} alt=""  data-aos="zoom-in" data-aos-duration="3000" />
                        <img src={event3} alt=""  data-aos="zoom-in" data-aos-duration="3000" />
                    </div>
                </div>
            </div>

            {/* UPCOMING EVENTS........................ */}
            <div className="upcoming-event">
                <div className="upcoming">
                    <div className="event-area">
                        <img src={upcomingEvent} alt="" data-aos="zoom-out-down" />
                    </div>
                    <h3 data-aos="flip-up">Upcoming Events</h3>
                    <a href=""data-aos="flip-up" >Click to register <img src={arrow} alt="" /></a>
                </div>
            </div>
        </section>
        {/* END UPCOMING EVENT..................................... */}

        {/* START EMAIL EVENT..................................... */}
       
        <section className="mail-section">
    <div className="container">
      <div className="mail">
        <span data-aos="fade-up">
        Join us today and discover a whole new world of entertainment, education, and social engagement. With Closeseller TV, the possibilities are endless!
        </span>
        <a href="" data-aos="fade-up">
        Send us an email today
        </a>
      </div>
    </div>

  </section>
        {/* END EMAIL EVENT..................................... */}

        <Footer/>
        </div>
    </div>
  )
}

export default ClosesellerTv