
import './upbar.css';
import { Link } from 'react-router-dom';

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
import Footer from '../components/Footer';





const Upbar = () => {

 
    
  return (
    <div className="home-page">

      {/* NAVBAR AREA.................... */}



<div className="nav-bar container">
    <div className="nav-area">

<div className="hero-h2">
<div className="hero-center">
    
<h2>Looking to boost your brand's reach and drive sales?</h2>

<p>Look no further than our top-rated advertising agency! With a team of expert
creatives and data-driven strategists, we'll help you take your marketing to the next level. 
Let's make your brand stand out and get noticed today!</p>

 <Link  to={'/contact'} ><a href="">Contact us today</a> </Link> 
</div>
</div>
    </div>

</div>

      {/* END OF NAV-AREA........ */}

      {/* START ABOUT AREA.............. */}

<section className="home-vision">
  <div className="container">
    <div className="vision">

      <div className="text-vision">
        <span>About Us</span>
        <h3>The key to growth lies in utilizing advertising effectively</h3>
        <p>Welcome to closeseller, advertising your products or services may seem like it’s all about creating amazing ads to catch the audience, but there’s a lot more you may choose to consider before creating adverts. Here are the top skills we use to create a targetted audience to reach your business both online and offline.

We can create successful ads and turn your advertising investment into revenue, simply Reach new customers and grow your business.</p>  

      </div>

      <div className="img-vision">
        <img src={speaker} alt="" />
      </div>
    </div>
  </div>
</section>

     {/* END ABOUT AREA.............. */}

       {/* START ADVERT AREA........... */}

       <section className="advert-section">
    
    <div className="container">
      <div className="advert">
        <h1 className="advert-title">Available Ads at Closeseller</h1>

        <div className="advert-content">

          <div className="ad-detials">
            <img src={degital} alt="" />
            <span className="detail-tit">Digital Dispaly Advertising</span>
            <p>Digital display advertising is online graphic advertising through 
              banners, text, images, video, and audio. The main purpose of digital 
              display advertising is to post company ads on third-party websites.</p>
          </div>
          <div className="ad-detials">
            <img src={video} alt="" />
            <span className="detail-tit">Video Advertising</span>

            <p>Video advertising encompasses online display 
              advertisements that have video within them, but it 
              is generally accepted that it refers to advertising
               that occurs before, during and/or after a video stream on the internet.</p>
          </div>
          <div className="ad-detials">
            <img src="" alt="" />
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
        <img src={vision} alt="" />
      </div>

      <div className="text-vision">
        <span>Our vision</span>
        <h3>A branding and publicity management company</h3>
        <p>We aim to create possibilities by creating promotional ads for businesses across all social media platforms.

At Closeseller, we see beyond the limits, as we have professionals willing to help our customers expand their customer base on social media platforms.</p>

    
      <a href="">Learn more <img src={arrow} alt="" className='arrow' /></a>
  

      </div>

    </div>
  </div>
</section>

 {/* END OUR VISON AREA............... */}


     <div className="swamp">
     {/* START SERVICE AREA.............. */}

    
    <section className="home-service">
        <div className="container">
          <div className="service">
            <h1>Our Services</h1>

            <div className="first-box">

              <div className="service-box box-1">

                <img src={advert} alt="" />
                <h2>Communication Skill</h2>
                <p>Advertising is about being able to communicate thoughts, feelings and emotions to consumers through various mediums, whether that be a television commercial, a print ad in a magazine or a website banner ad.
                              <br />
                              <br />
In addition, you’ll also have to be able to present your thoughts and findings to peers, professors and potentially even clients as it plays a crucial role to showcasing your brands and services</p>

                  <a href="">Learn more</a>
              </div>

              <div className="service-box box-2">

                <img src={sellertv} alt="" />
                <h2>Creativity</h2>
                <p>
                Combining ways to execute an adverts to reach it's right audience is a primary footsteps to we take to creating a potentials that yields results. 
                    <br />
                    <br />
Because advertising is a mix of opinions and data, we are sure that you recieve positive feedback from your prospectus 
clients.
                  </p>

                  <a href="">Learn more</a>
              </div>

            

            </div>

            <div className="first-box second-box">

              <div className="service-box box-1">

                <img src={analysis} alt="" />
                <h2>Analytical Skills</h2>
                <p>
                What does it mean if consumers are responding to a particular ad? How can that ad be made more effective? What does it mean if it isn’t effective? 
                                <br />
                                <br />
These are all key questions will help us understand your desired ads.

                </p>

                  <a href="">Learn more</a>
              </div>

              <div className="service-box box-2">

                <img src={social} alt="" />
                <h2>Social trends</h2>
                <p>
                Since advertising relies heavily on the ability to capitalize on trends, it’s important  create ads base on top of things that are trending in the industry. 
                          <br />
                          <br />
In addition to being interested in the types of ad campaigns and news stories that are most engaging.
                  </p>

                  <a href="">Learn more</a>
              </div>

            

            </div>
          </div>
        </div>
     </section>

        {/* END SERVIVE AREA.......... */}


        {/* START CONTACT AREA........... */}

        <section className="contact-section">

        <div className="container">
          <div className="contact">
          <span className="sponsor-write">We create sponsored posts on social <br /> media platforms like:</span>

          <div className="soc-media">

          <div className="contact-link">
            
            <div className="social-flex face-book">
              <a href=""><img src={fb} alt="" />Facebook</a>
            </div>
            <div className="social-flex instagram">
              <a href=""><img src={ig} alt="" />Instagram</a>
            </div>
            <div className="social-flex linkend">
              <a href=""><img src={linkend} alt="" />Linkedln</a>
            </div>
            <div className="social-flex youtube">
              <a href=""><img src={youtube} alt="" />Youtube</a>
            </div>
          </div>


          <div className="contact-link colo">
            
           <div className="h-2">
           <div className="social-flex face-book">
              <a href=""><img src={tw} alt="" />Twitter</a>
            </div>
            <div className="social-flex instagram">
              <a href=""><img src={google} alt="" />Google Adsence</a>
            </div>
            <div className="social-flex linkend">
              <a href=""><img src={audio} alt="" />Audiomack</a>
            </div>
           </div>
            
          </div>

          </div>

        <a href="" className='cont-button'>Contact us today</a>

          </div>
        </div>

        </section>
    
      {/* END CONTACT AREA........... */}

      </div>

      {/* START EMAIL AREA........................ */}

      <section className="mail-section">
    <div className="container">
      <div className="mail">
        <span>
        Don't wait another day to reach your marketing goals. Contact us now and let's make it happen!
        </span>
        <a href="">
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
          <h3>FAQ</h3>
          
          <div className="questioning">
            <div className="questions">
              <span>Can you create adverts on YouTube?</span>
              <img src={faq} alt="" />
            </div>
            <div className="questions">
              <span>Can you create adverts on YouTube?</span>
              <img src={faq} alt="" />
            </div>
            <div className="questions">
              <span>Can you create adverts on YouTube?</span>
              <img src={faq} alt="" />
            </div>
            <div className="questions">
              <span>Can you create adverts on YouTube?</span>
              <img src={faq} alt="" />
            </div>
            <div className="questions">
              <span>Can you create adverts on YouTube?</span>
              <img src={faq} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* END FAQ AREA..................... */}

      {/* START FOOTER AREA.................. */}

   <Footer/>

    </div>
  )
}

export default Upbar