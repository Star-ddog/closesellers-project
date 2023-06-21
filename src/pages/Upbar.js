
import './upbar.css';
import './animation.css';
import { Link } from 'react-router-dom';

import { useState } from 'react';



import speaker from '../image/home/speaker.png';
import vision from '../image/home/vision.png';
import arrow from '../image/home/arrow.png';
import advert from '../image/home/advert.png';
import sellertv from '../image/home/sellertv.png';
import analysis from '../image/home/analysis.png';
import social from '../image/home/social.png';
import fb from '../image/home/icons/fb.png';
import ig from '../image/home/icons/ig.png';
import linkend from '../image/home/icons/linkend.png';
import youtube from '../image/home/icons/youtube.png';
import tw from '../image/home/icons/tw.png';
import google from '../image/home/icons/google.png';
import audio from '../image/home/icons/audio.png';
import degital from '../image/home/degital.png';
import video from '../image/home/video.png';
import faq from '../image/home/faq.png';

import videosell from '../videos/video.mp4'

import Footer from '../components/Footer';
import { Collapse } from 'antd';
const { Panel } = Collapse;






const Upbar = () => {
 


  const mystyle = {
    backgroundColor: "white",
    fontWeight: 500,
    fontSize: "18px"
  };
  const mytext = {
    backgroundColor: "white",
    fontWeight: 500,
    fontSize: "15px",
    color: "#701D9D",
    padding: "20px"
  };

  return (
    <div className="home-page">

      {/* NAVBAR AREA.................... */}



<div className="nav-bar container">
    <div className="nav-area">

<div className="hero-h2">
<div className="hero-center">
    
<h2 data-aos="fade-up">Let assist you in boosting your sales and expanding your reach.</h2>

<p data-aos="fade-down">Look no further than our top-rated advertising agency! With a team of expert
creatives and data-driven strategists, we'll help you take your marketing to the next level. 
Let's make your brand stand out and get noticed today!</p>

 <Link  to={'/contact'} ><a href="" data-aos="fade-up">Contact us today</a> </Link> 
</div>
</div>
    </div>

</div>

      {/* END OF NAV-AREA........ */}

      {/* START ABOUT AREA.............. */}

<section className="home-vision">
  <div className="container">
    <div className="vision">

      <div className="text-vision" data-aos="flip-left">
        <span>About Us</span>
        <h3>The key to growth lies in utilizing advertising effectively</h3>
        <p >Welcome to closeseller, advertising your products or services may seem like it’s all about creating amazing ads to catch the audience, but there’s a lot more you may choose to consider before creating adverts. Here are the top skills we use to create a targetted audience to reach your business both online and offline.

We can create successful ads and turn your advertising investment into revenue, simply Reach new customers and grow your business.</p>  

      </div>

      <div className="img-vision move-up" >
        <img src={speaker} alt="" data-aos="zoom-in"/>
      </div>
    </div>
  </div>
</section>

     {/* END ABOUT AREA.............. */}

       {/* START ADVERT AREA........... */}

       <section className="advert-section">
    
    <div className="container">
      <div className="advert">
        <h1 className="advert-title"  data-aos="slide-left">Our Services</h1>

        <div className="advert-content">

          <div className="ad-detials">
            <img src={degital} alt="" data-aos="zoom-in-up" />
            <span className="detail-tit">Digital Dispaly Advertising</span>
            <p>Digital display advertising is online graphic advertising through 
              banners, text, images, video, and audio. The main purpose of digital 
              display advertising is to post company ads on third-party websites.</p>
          </div>
          <div className="ad-detials">
            <img src={video} alt="" data-aos="zoom-in-left"/>
            <span className="detail-tit">Video Advertising</span>

            <p>Video advertising encompasses online display 
              advertisements that have video within them, but it 
              is generally accepted that it refers to advertising
               that occurs before, during and/or after a video stream on the internet.</p>
          </div>
          <div className="ad-detials">
          <video controls loop autoPlay muted poster="">
  <source
    src={videosell}
    type="video/mp4"
  />
</video>

            <span className="detail-tit">Animated Advertisement</span>
            <p>What Is an Animated Ad? Simply put, animated ads are short commercial cartoon 
              videos meant to promote a company's products or services.</p>
          </div>


        </div>

      </div>
    </div>
      </section>

      {/* END ADVERT AREA................. */}
     
      
        {/* OUR VISION....................... */}

        <section className="home-vision">
  <div className="container">
    <div className="vision">

    <div className="img-about">
        <img src={vision} alt="" data-aos="zoom-out-down"/>
      </div>

      <div className="text-vision">
        <span data-aos="zoom-in">Our vision</span>
        <h3>A branding and publicity management company</h3>
        <p data-aos="fade">We aim to create possibilities by creating promotional ads for businesses across all social media platforms.

At Closeseller, we see beyond the limits, as we have professionals willing to help our customers expand their customer base on social media platforms.</p>

    
    <div className="learn-more">
    <a href="">Learn more <img src={arrow} alt="" className='arrow' /></a>
    </div>
  

      </div>

    </div>
  </div>
</section>

 {/* END OUR VISON AREA............... */}


     <div className="swamp">
     {/* START SERVICE AREA.............. */}

    
      {/* AD BOXESS................ */}
      <section className="ad-boxxes">
                <div className="ad-boxx">
                    <div className="boxx"  data-aos="zoom-in-up">
                        <div className="circle orange move-up hue-shift" >
                          <p>how</p>
                        </div>
                        <div className='margin-topp'>
                        <span>COMMUNICATION</span>
                        <p>Being able to communicate your business across to your right audience is our top priority.</p>
                        </div>
                    </div>
                    <div className="boxx"  data-aos="zoom-in-up">
                    <div className="circle ">
                          <p>how</p>
                        </div>
                        <div className='margin-topp'>
                        <span>CREATIVITY</span>
                        <p>Combining ways to execute an adverts to reach it's right audience is a primary footsteps we take to creating a potentials that yields results. </p>
                        </div>
                    </div>
                    <div className="boxx" data-aos="zoom-in-up">
                    <div className="circle">
                          <p>how</p>
                        </div>
                        
                        <div className='margin-topp'>
                        <span>ANALYTICS</span>
                        <p>What does it mean is if consumers are responding to a particular ad? 
How can that ad be made more effective? What does it mean if it isn’t effective? These are all key questions will help us understand your desired ads.</p> 
                        </div>
                    </div>
                </div>
                <div className="ad-boxx">
                <div className="boxx"data-aos="zoom-in" data-aos-duration="3000">
                <div className="circle">
                          <p>how</p>
                        </div>
                        <div className='margin-topp'>
                       <span>SOCIAL TRENDS</span>
                        <p>Since advertising relies heavily on the ability to capitalize on trends, it’s important  create ads base on top of things that are trending in the industry.</p>
                       </div>
                    </div>

                    <div className="boxx" data-aos="zoom-in" data-aos-duration="3000">
                    <div className="circle">
                          <p>how</p>
                        </div>
                        <div className='margin-topp'>
                        <span>PROBLEM SOLVING</span>
                        <p>Advertising is all about solving two majors problems: First, what are you to convey to your audience, and how does that support or conflict with your audience’s desires? Second, how can you pivot your ideas depending on how your particular campaign is going?</p>
                    </div>
                        </div>

                    <div className="boxx" data-aos="zoom-in" data-aos-duration="3000">
                    <div className="circle orange move-up">
                          <p>how</p>
                        </div>
                        <div className='margin-topp'>
                        <span>PERSONALITY</span>
                        <p>CloseSeller understands that every business is unique and requires tailored solutions to achieve its goals. That's why they offer personalized strategies and campaigns that are tailored to each client's specific needs and objectives.</p>
                        </div>
                    </div>
                
                </div>
            </section>
            {/* END AD BOXESS................ */}


        {/* END SERVIVE AREA.......... */}


        {/* START CONTACT AREA........... */}

        <section className="contact-section">

        <div className="container">
          <div className="contact">
          <span className="sponsor-write" data-aos="fade-down">We create sponsored posts on social <br /> media platforms like:</span>

          <div className="soc-media">

          <div className="contact-link">
            
            <div className="social-flex face-book" data-aos="fade-up">
              <a href=""><img src={fb} alt="" />Facebook</a>
            </div>
            <div className="social-flex instagram" data-aos="fade-down">
              <a href=""><img src={ig} alt="" />Instagram</a>
            </div>
            <div className="social-flex linkend" data-aos="zoom-in">
              <a href=""><img src={linkend} alt="" />Linkedln</a>
            </div>
            <div className="social-flex youtube" data-aos="flip-up">
              <a href=""><img src={youtube} alt="" />Youtube</a>
            </div>
          </div>


          <div className="contact-link colo">
            
           <div className="h-2">
           <div className="social-flex face-book" data-aos="flip-left">
              <a href=""><img src={tw} alt="" />Twitter</a>
            </div>
            <div className="social-flex instagram" data-aos="slide-right">
              <a href=""><img src={google} alt="" />Google Adsence</a>
            </div>
            <div className="social-flex linkend" data-aos="slide-left">
              <a href=""><img src={audio} alt="" />Audiomack</a>
            </div>
           </div>
            
          </div>

          </div>
<br />
        <a href="" className='cont-button'>Contact us today</a>

          </div>
        </div>

        </section>
    
      {/* END CONTACT AREA........... */}

      </div>

      {/* START EMAIL AREA........................ */}

      <section className="mail-sectionss">
    <div className="container">
      <div className="mailss" >
        <span data-aos="flip-up" className='mail-span'>
        Don't wait another day to reach your marketing goals. Contact us now and let's make it happen!
        </span>
        <a href="" data-aos="fade-up">
        Send us an email today
        </a>
      </div>
    </div>

  </section>

      {/* END MAIL AREA........... */}

    {/* START FAQ AREA..................... */}

    <section className="faq-section">
      <div className="container">
        <div className="faq">
          <h3 data-aos="flip-up">FAQ</h3>
          
          <Collapse accordion defaultActiveKey={['0']} >
      <Panel header="Can you create adverts on YouTube?" key="1" style={mystyle}>
        <p style={mytext} data-aos="fade-up">Yes you can create adverts on Youtube</p>
      </Panel>
      <Panel header="Do you have an advertising plan?" key="2" style={mystyle}>
        <p style={mytext} data-aos="fade-up">Yes i have an advertising plan</p>
      </Panel>
      <Panel header="Do you write business proposals?" key="3" style={mystyle}>
        <p style={mytext} data-aos="fade-up"> Yes i write business proposals?</p>
      </Panel>
      <Panel header="Do i need a huge amount of money to create adverts?" key="4" style={mystyle}>
        <p style={mytext} data-aos="fade-up">No you don't need a huge amount of money to create adverts</p>
      </Panel>
      <Panel header="Can i create adverts in all social media platforms?" key="5" style={mystyle}>
        <p style={mytext}  data-aos="fade-up">Yes you can create adverts in all social media platforms</p>
      </Panel>
    </Collapse>
        </div>
      </div>
    </section>

    {/* END FAQ AREA..................... */}

      {/* START FOOTER AREA.................. */}

   <Footer />

    </div>
  )
}

export default Upbar
