import React from 'react'
import './webservice.css';
import hotel from '../image/webservice/hotel.png'
import Footer from '../components/Footer';

const WebServices = () => {
  return (
    <div className="web-service">
        <div className="container">
            
             {/* /* After Navbar...............  */}

             <section className="after-koks">
            <div className="after-nav-koks">
                <p data-aos="fade-down">Welcome to closeSeller Web Services</p>
                <h2 data-aos="fade-up">We offer professional web design and development services to help you build a strong online presence for your business.</h2>
                <p data-aos="fade-down">Whether you're looking to start an eCommerce store, promote your nonprofit, showcase your portfolio, or create an online platform for your educational institution, we've got you covered.</p>
            </div>
        </section>
            {/*END After Navbar............... */}
            {/* WEBSITE ADS.................... */}
            <section className='website-ad'>
                <div className="web-ad">
                    <span className="bold" data-aos="zoom-in">
                    Are you in the process of creating a new website, but feeling overwhelmed by the vast number of other websites out there?
                    </span>
                    <p className="small" data-aos="zoom-in">
                    Don't worry, we're here to help. Let us know what you're looking for and we can guide you through the process of creating a professional website in just a few simple steps.
                    </p>
                </div>

                <div className="ad-img">
                    <img src={hotel} alt="" data-aos="zoom-in" />
                </div>
            </section>
            
            {/* ENDWEBSITE ADS.................... */}

            {/* AD BOXESS................ */}
            <section className="ad-boxes">
                <div className="ad-box">
                    <div className="box" data-aos="zoom-in-up">
                        <span >Business Website</span>
                        <p >If you're looking to create a website for your business, our team can help you create a professional website that represents your brand and communicates the products and/or services you offer. 
<br />
We ensure that your website is branded like your business and that it communicates your message effectively. With a business website, you can reach out to potential customers and build credibility with your target audience.</p>
                    </div>
                    <div className="box" data-aos="zoom-in-up">
                        <span>E-Commerce</span>
                        <p>E-commerce websites are perfect for businesses that want to sell their products directly to their customers. 
<br />
Our team of experts can help you design and develop an eCommerce website that is easy to navigate, visually appealing, and secure for online transactions. 
<br />
We ensure that your website is built with the best eCommerce software and comes equipped with an SSL certificate to guarantee safe and secure transactions.</p>
                    </div>
                </div>
                <div className="ad-box">
                    <div className="box" data-aos="zoom-in-up">
                        <span>Blog Websites</span>
                        <p>For those looking to create a blog, our team can help you create a website that is entertaining, informative, and easy to navigate. 
<br />
We understand that you need to build a website that keeps your readers engaged and interested in your content. 
<br />
We can also help you develop a content strategy that aligns with your brand and meets your goals.</p>
                    </div>
                    <div className="box" data-aos="zoom-in-up">
                        <span>NGO Websites</span>
                        <p>Nonprofit organizations need websites to help them reach out to more people, promote their projects, and accept donations. 
<br />
We understand that building a website for your nonprofit can be challenging, and that's why we're here to help. 
<br />
Our team of experts can help you design and develop a website that is visually appealing, informative, and optimized for search engines.</p>
                    </div>
                </div>
                <div className="ad-box">
                    <div className="box"data-aos="zoom-in-up">
                        <span>School Website</span>
                        <p>Educational institutions and those offering online courses need websites that provide educational materials to visitors or provide information on their educational institution.
<br />
Our team can help you design and develop a website that is informative, easy to navigate, and optimized for search engines. 
<br />
We understand the importance of building a website that represents your educational institution and promotes your courses effectively.</p>
                    </div>
                    <div className="box" data-aos="zoom-in-up">
                        <span>Portfolio Websites</span>
                        <p>For service providers who want to showcase their past work, our team can help you design and develop a portfolio website. We ensure that your portfolio website is visually appealing and easy to navigate. 
<br />
With a portfolio website, you can showcase your work to potential clients and build credibility in your industry.</p>
                    </div>
                </div>
            </section>
            {/* END AD BOXESS................ */}

             {/* EMAIL SECTION...................... */}
           <section className="mail-section">
    <div className="container">
      <div className="mail">
        <span data-aos="zoom-down">
        Don't wait another day to reach your marketing goals. Contact us now and let's make it happen!
        </span>
        <a href="" data-aos="zoom-in-up">
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