import React from 'react'

import './closesellertv.css';

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
                <p>Welcome to closeSeller Tv</p>
                <h2>Your one-stop-channel for entertainment, education, and social engagement.</h2>
                <p>We offer a wide variety of social activities that are designed to keep you engaged and entertained, no matter what your interests are.</p>
            </div>
        </section>
            {/*END After Navbar............... */}

            {/* START SOCIAL ACTIVITIES............... */}

            <section className="social-activities">
                <div className="social-act">
                   <div className="h-1">
                   <h1>We offer a diverse range of social activities.</h1>
                   </div>

                    <div className="activities">


                        <div className="activity activity-1">
                            
                            <div className="detial-1">
                            <span>TV Prodcast</span>
                            <p>Our online streaming event, "Talk Ur Mind," is a must-see for anyone who loves engaging in controversial topics. We host a range of guests, including business people, artists, influencers, students, and members of the public, all of whom bring their unique perspectives to the discussion.</p>
                            <a href="">View Our Prodcast <img src={arrow} alt="" /></a>
                            </div>

                            <div className="detial-img">
                                <img src={prodcast} alt="" />
                            </div>
                        </div>
                        <div className="activity activity-2">
                        <div className="detial-img">
                                <img src={comedy} alt="" />
                            </div>

                            <div className="detial-1">
                            <span>TV Prodcast</span>
                            <p>Our online streaming event, "Talk Ur Mind," is a must-see for anyone who loves engaging in controversial topics. We host a range of guests, including business people, artists, influencers, students, and members of the public, all of whom bring their unique perspectives to the discussion.</p>
                            <a href="">View Our Prodcast <img src={arrow} alt="" /></a>
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
                    <span>Movie Community</span>
                    <p>For movie lovers, our movie community is the perfect place to be. Whether you're a die-hard film buff or just enjoy watching the occasional movie, we've got something for everyone.</p>
                </div>
                
                <div className="movie-img">
                    <div className="img-1">
                        <img src={img1} alt="" />
                    </div>
                    <div className="img-2">
                        <img src={img2} alt="" />
                    </div>
                    <div className="img-3">
                        <img src={img3} alt="" />
                    </div>

                </div>
            </div>
          </section>
          
            {/* END MOVIE COMMUNITY.................... */}


            {/* START E-LEARNING AREA........................ */}
            <section className="e-learning">

            <div className="activity activity-2">
                        <div className="detial-img">
                                <img src={elearn} alt="" />
                            </div>

                            <div className="detial-1">
                            <span>E-Learning</span>
                            <p>We believe in the power of education, which is why we offer a range of side hustle tutorials and educational videos on our YouTube channel. Whether you're looking to learn a new skill or just want to brush up on your existing knowledge, we've got you covered.</p>
                            
                            </div>

                        </div>

            </section>
            {/* END E-LEARNING AREA........................ */}

            {/* START TRAINING EVENTS............................ */}
        <section className="training-sec">

            <div className="training-event">
                <h2>Training Events</h2>
                <p>At Closeseller, we're always hosting new and exciting events and programs. Whether it's a training seminar, a workshop, or a networking event, we've got something for everyone. And if you're unable to attend one of our events, you can always check out our website to see photos and highlights from past events.</p>
                <div className="traing-flex">
                    <div className="pic-1">
                        <img src={pastevent} alt="" />
                    </div>
                    <div className="pic-2">
                        <img src={event2} alt="" />
                        <img src={event3} alt="" />
                    </div>
                </div>
            </div>

            {/* UPCOMING EVENTS........................ */}
            <div className="upcoming-event">
                <div className="upcoming">
                    <div className="event-area">
                        <img src={upcomingEvent} alt="" />
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
        <span>
        Join us today and discover a whole new world of entertainment, education, and social engagement. With Closeseller TV, the possibilities are endless!
        </span>
        <a href="">
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