import React from 'react'
import './webservice.css';
import hotel from '../image/webservice/hotel.png'
import Footer from '../components/Footer';

const WebServices = () => {
  return (
    <div className="web-service">
        <div className="container">
            
             {/* /* After Navbar...............  */}

             <section className="after-kok">
            <div className="after-nav-kok">
                <p>Welcome to closeSeller Tv</p>
                <h2>We offer professional web design and development services to help you build a strong online presence for your business.</h2>
                <p>We offer a wide variety of social activities that are designed to keep you engaged and entertained, no matter what your interests are.</p>
            </div>
        </section>
            {/*END After Navbar............... */}
            {/* WEBSITE ADS.................... */}
            <section className='website-ad'>
                <div className="web-ad">
                    <span className="bold">
                    Are you in the process of creating a new website, but feeling overwhelmed by the vast number of other websites out there?
                    </span>
                    <p className="small">
                    Don't worry, we're here to help. Let us know what you're looking for and we can guide you through the process of creating a professional website in just a few simple steps.
                    </p>
                </div>

                <div className="ad-img">
                    <img src={hotel} alt="" />
                </div>
            </section>
            
            {/* ENDWEBSITE ADS.................... */}

            {/* AD BOXESS................ */}
            <section className="ad-boxes">
                <div className="ad-box">
                    <div className="box">
                        <span>Business Website</span>
                        <p>If you're looking to create a website for your business, our team can help you create a professional website that represents your brand and communicates the products and/or services you offer. 
<br /> <br />
We ensure that your website is branded like your business and that it communicates your message effectively. With a business website, you can reach out to potential customers and build credibility with your target audience.</p>
                    </div>
                    <div className="box">
                        <span>E-Commerce</span>
                        <p>E-commerce websites are perfect for businesses that want to sell their products directly to their customers. 
<br /><br />
Our team of experts can help you design and develop an eCommerce website that is easy to navigate, visually appealing, and secure for online transactions. 
<br /><br />
We ensure that your website is built with the best eCommerce software and comes equipped with an SSL certificate to guarantee safe and secure transactions.</p>
                    </div>
                </div>
                <div className="ad-box">
                    <div className="box">
                        <span>Blog Websites</span>
                        <p>For those looking to create a blog, our team can help you create a website that is entertaining, informative, and easy to navigate. 
<br /><br />
We understand that you need to build a website that keeps your readers engaged and interested in your content. 
<br /><br />
We can also help you develop a content strategy that aligns with your brand and meets your goals.</p>
                    </div>
                    <div className="box">
                        <span>NGO Websites</span>
                        <p>Nonprofit organizations need websites to help them reach out to more people, promote their projects, and accept donations. 
<br /><br />
We understand that building a website for your nonprofit can be challenging, and that's why we're here to help. 
<br /><br />
Our team of experts can help you design and develop a website that is visually appealing, informative, and optimized for search engines.</p>
                    </div>
                </div>
                <div className="ad-box">
                    <div className="box">
                        <span>School Website</span>
                        <p>Educational institutions and those offering online courses need websites that provide educational materials to visitors or provide information on their educational institution.
<br /><br />
Our team can help you design and develop a website that is informative, easy to navigate, and optimized for search engines. 
<br /><br />
We understand the importance of building a website that represents your educational institution and promotes your courses effectively.</p>
                    </div>
                    <div className="box">
                        <span>Portfolio Websites</span>
                        <p>For service providers who want to showcase their past work, our team can help you design and develop a portfolio website. We ensure that your portfolio website is visually appealing and easy to navigate. 
<br /><br />
With a portfolio website, you can showcase your work to potential clients and build credibility in your industry.</p>
                    </div>
                </div>
            </section>
            {/* END AD BOXESS................ */}

             {/* EMAIL SECTION...................... */}
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
           {/* END EMAIL SECTION...................... */}
           <Footer/>
        </div>
    </div>
  )
}

export default WebServices