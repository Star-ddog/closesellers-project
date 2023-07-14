import React from 'react'
import './contact.css';
import arrow from '../image/home/arrow.png'
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="contact-page">
        <div className="container">
             {/* /* After Navbar...............  */}

             <section className="after-koks">
            <div className="after-nav-koks">
                <p data-aos="fade-up">Welcome to closeSeller Tv</p>
                <h2 data-aos="zoom-in-up"> Your one-stop-channel for entertainment, education, and social engagement.</h2>
                <p data-aos="fade-up">We offer a wide variety of social activities that are designed to keep you engaged and entertained, no matter what your interests are.</p>
            </div>
        </section>
            {/*END After Navbar............... */}

              {/* CLOSESELLERPRINT QUOTE.............. */}
           
           <section className="closeprintqoute">
            <div className="print-quotes">
                <span data-aos="zoom-in"> 
                You can reach us by filling out the form below and one of our representatives will get back to you as soon as possible.
                </span>
                
            </div>
           </section>

            {/* END CLOSESELLERPRINT QUOTE.............. */}

            {/* FORM SECTION.............................. */}
            
            <section className="form-section">
              <div className="form-sec">
                <form>
                  <div className="inputs">
                    
                   <div>
                   <input type="text" placeholder='Full Name' data-aos="zoom-in"/>
                    <input type="text" placeholder='Phone Number' data-aos="zoom-in"/>        
                   </div>
                    <div>
                    <input type="email" placeholder='Email' data-aos="zoom-in"/>
                    <input type="text" placeholder='Company Name' data-aos="zoom-in"/>
                  
                    </div>
                  </div>
                  <div>
                    <label >Message Us</label>
                    <textarea name="" id="" cols="80" rows="10" data-aos="zoom-in"></textarea>

                  </div>
                  <button data-aos="fade-up">Send</button>

                </form>

                <div className="text-only">
                  <span>Our customer support team is available 24/7 to assist you with any questions or concerns you may have. 
<br /><br />
We pride ourselves on providing exceptional customer service and are committed to ensuring your satisfaction with our services.</span>
                </div>
              </div>
            </section>

            {/* ENDFORM SECTION.............................. */}
            
            {/* CONTACT ADDRESSS SECTION.............................. */}
            
            <section className="contact-address">
              <div className="addresses">
                <div className="address" data-aos="zoom-in-up">
                  <span>Complaints and Issue.</span>
                  <p>Our 24/7 support team is ready to help</p>
                  <a href="">Contact support <img src={arrow} alt="" /></a>
                </div>
                <div className="address" data-aos="zoom-in-up">
                  <span>Complaints and Issue.</span>
                  <p>Reach out to our media and marketing teams.</p>
                  <a href="">Contact or team <img src={arrow} alt="" /></a>
                </div>
                <div className="address" data-aos="zoom-in-up">
                  <span>Media and PR</span>
                  <p>Reach out to our media and marketing teams.</p>
                  <a href="">Contact media team <img src={arrow} alt="" /></a>
                </div>
              </div>
            </section>
            {/*END CONTACT ADDRESSS SECTION.............................. */}

                   {/* EMAIL SECTION...................... */}
           <section className="mail-section">
    <div className="container">
      <div className="mail">
        <span data-aos="zoom-in">
        Don't wait another day to reach your marketing goals. Contact us now and let's make it happen!
        </span>
        <a href="" data-aos="fade-up">
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

export default Contact