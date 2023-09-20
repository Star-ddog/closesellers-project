import React, { useState } from 'react'
import { Link } from 'react-router-dom';


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
import ambassador1 from '../image/closetv/ambassador3.jpg'
import talkPic1 from '../image/closetvtalk/talkPic1.jpeg'
import talkPic2 from '../image/closetvtalk/talkPic2.jpg'
import talkPic3 from '../image/closetvtalk/talkPic3.jpg'
import talkPic4 from '../image/closetvtalk/talkPic4.jpg'
import talkPic5 from '../image/closetvtalk/talkPic5.jpg'





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
                            <span>Talk your mind Prodcast</span>
                            <p data-aos="fade-up" >Talk Ur Mind is a thought-provoking and engaging podcast program that is hosted by SIMEON MICHEALS at Closesellertv. This program aims to delve into various topics and issues that are relevant to personal growth, self-improvement, and overall well-being.</p>
                            <div className="prodacst-but">
                           <Link to={'/TakUrMind'} ><a href="">View Our Prodcast <img src={arrow} alt="" /></a></Link>
                           
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
        <img src={talkPic1} />
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
      <img src={talkPic2}/>
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
      <img src={talkPic3}/>
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
      <img src={talkPic4}/>
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
      <img src={talkPic5}/>
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

            {/* START Advert promotion */}
            <section className="advert-promotion">
              <h2 className="promo-title">Advert promotion</h2>
              <p className="promo-text">Are you a business owner looking to boost your brand awareness and reach a wider audience? Look 
            no further! CloseSellerTV Advert Promotion Service is here to help you skyrocket your sales through targeted TV advertising campaigns.
            </p>
            <Link to={'/whytv'} ><a href="">Why choose CloseSellerTV?</a></Link>
            </section>


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

            {/* start red capert area */}

            <section className="red-carpet">

              <p className="red-tit">
                <span>RED Carpet :</span>
              Book us now let’s host your glamorous red carpet event which includes
               videos and photos. We work as a team to bring exclusive glitz, glamour, and celebration.
              </p>
             
                <div className="red-text">
                 <div className='red-padd'>
                 <p>
                  Our red carpet events will leave your guest, including top-dignitaries , industry influencers, and celebrities amazed. Attendees will have the opportunity to network with fellow, industry professionals, and potential business partners.
                  </p>

                  <p>
                  In addition to celebrating your achievements, our red carpet event should be notified minimum of 2weeks ahead the occasions to enable us reach agreements.
                  </p>
                  <p>
                  ClosesellerTv understands the importance of recognizing and appreciating  hard work and dedications . This red carpet event is our way of showing our gratitude and celebrating their success.
                  </p>
                  <span>For more information, please contact our event coordinator at</span>
                 </div>
                </div>

            </section>


            {/* End start red capert area */}

            {/* START BRAND COLLABORATION */}

        <section className='brand-colla'>
         <div className='brand-colla-tit'>
         <h2>Brand Collaboration</h2>
          <p className='colla-text'>
          At ClosesellerTV, we understand the importance of building strong partnerships and collaborations with brands. We are excited to introduce our Brand Collaboration Program, which aims to create mutually beneficial relationships between ClosesellerTV and brands looking to increase their visibility and reach.
          </p>
         </div>

          <div className="brand-colla-box">

            <div className="colla-box">
              <h3>How to participate in the Brand Collaboration Program:</h3>
              <li> <span>1</span>
              Submit your brand: Interested brands can apply to participate in the program by filling out a form on our website. We review each application carefully to ensure a good fit.
              </li>
              <li><span>2</span>
              Collaboration proposal: Once selected, brands will be required to submit a collaboration proposal outlining their objectives, target audience, and proposed collaboration ideas.
              </li>
              <li><span>3</span>
              Collaboration execution: Upon approval of the proposal, we will work closely with the brand to execute the collaboration, including content creation, promotion, and engagement with our audience.
              </li>
              <li><span>4</span>
              Evaluation and feedback: After the collaboration is completed, we will evaluate the results together with the brand, providing feedback and suggestions for future collaborations.
              </li>
            </div>

            <div className="colla-box">
              <h3>Benefits of the Brand Collaboration Program:</h3>
              <li> <span>1</span>
              Increased exposure: Collaborating with ClosesellerTV allows brands to tap into our extensive audience base and gain exposure to potential customers.
              </li>
              <li><span>2</span>
              Targeted marketing: ClosesellerTV focuses on the e-commerce and online selling industry, ensuring that brand collaborations are relevant and reach the right target
              </li>
              <li><span>3</span>
              Content creation: Through collaborations, brands have the opportunity to co-create engaging and informative content with our team, helping to showcase their products or services.
              </li>
              <li><span>4</span>
              Social media promotion: Collaborating brands will be featured across our social media platforms, including Instagram, Facebook, and YouTube, giving them access to our followers and subscribers.
              </li>
              <li><span>5</span>
              Networking opportunities: The Brand Collaboration Program provides a platform for brands to connect and network with other like-minded businesses, fostering potential partnerships and collaborations beyond ClosesellerTV.
              </li>
            </div>
          </div>

          <div className="colla-note">
            <span>*Please note that our Brand Collaboration Program is open to brands from various industries.</span>
            <p>If you are interested in partnering with ClosesellerTV through our Brand Collaboration Program, please visit our website and submit your brand for consideration. We look forward to exploring the possibilities of working together and helping your brand reach new heights.</p>
          </div>
        </section>

            {/* END BRAND COLLABORATION */}

            {/* START Ambassadorship program */}

        <section className="ambassadorship-program">

          <div className="amba-pro">
            <h1>Ambassadorship program</h1>
            <p>we are excited to announce our new ambassadorship program exclusively designed for students. We 
              believe in empowering students to become influential brand advocates and gain valuable experience
               while representing our company.</p>
               <div><Link to={'/ReadMoreAmbPro'}><a href="">Read More👉</a></Link></div>
          </div>
          <div className="amba-img">
            <img src={ambassador1} alt="" />
          </div>
        </section>

            {/* END Ambassadorship program */}

            {/* START TRAINING EVENTS............................ */}
        <section className="training-sec">

            <div className="training-event">
                <h2  data-aos="fade-down">Training Events</h2>
                <p  data-aos="fade-up" >At Closeseller, we're always hosting new and exciting events and programs. Whether it's a training seminar, a workshop, or a networking event, we've got something for everyone. And if you're unable to attend one of our events, you can always check out our website to see photos and highlights from past events.</p>
                <div className="traing-flex">
                    <div className="pic-1">
                        <img src={pastevent} alt=""  />
                    </div>
                    <div className="pic-2">
                        <img src={event2} alt=""  />
                        <img src={event3} alt=""  />
                    </div>
                </div>
            </div>

            {/* UPCOMING EVENTS........................ */}
            <div className="upcoming-event">
                <div className="upcoming">
                    <div className="event-area">
                        <img src={upcomingEvent} alt="" data-aos="zoom-out-down" />
                    </div>
                    <h3>Upcoming Events</h3>
                    <a href="">Click to register <img src={arrow} alt="" /></a>
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