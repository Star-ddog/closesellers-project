import React from 'react'
import './closesellerprint.css';

import ImgContent from '../image/closeprint/imgcontent.png'
import WriteContent from '../image/closeprint/writeupimg.png'
import MessageUs from '../image/closeprint/messageus.png'
import Footer from '../components/Footer';

const Closesellerprint = () => {
  return (
    <div className="close-seller-print">
        <div className="container">

             {/* /* After Navbar...............  */}

             <section className="after-koks">
            <div className="after-nav-koks">
                <p data-aos="fade-down">Welcome to closeSeller Print</p>
                <h2 data-aos="fade-up">Your one-stop-shop for customized accessories. We offer high-quality</h2>
                <p data-aos="fade-down">We offer custom-made products that are perfect for both public and private individuals who want to make a statement with their fashion.</p>
            </div>
        </section>
            {/*END After Navbar............... */}

            {/* CLOSESELLERPRINT QUOTE.............. */}
           
           <section className="closeprintqoute">
            <div className="print-quote">
                <span data-aos="zoom-in">
                At Closeseller Print, we believe that every individual has their unique style, and our mission is to help them express it through customized shirts and bags.
                </span>
            </div>
           </section>

            {/* END CLOSESELLERPRINT QUOTE.............. */}

            {/* PRINT CONTENT........................ */}

            <section className="print-content">
                <div className="contents">
                    <div className="img-content">
                            <img src={ImgContent} alt="" data-aos="zoom-in"/>
                    </div>
                    <div className="write-up-content">
                            <div className='write-img'>
                                <img src={WriteContent} alt="" data-aos="fade-up"/>
                            </div>
                            
                            <div className="write-up">
                                <p  data-aos="zoom-in-up">
                                We understand that clothes and bags are not just items you wear or carry, but they are an extension of who you are, and that's why we take great care to provide high-quality products that are made with love and care.
                                </p>
                            </div>

                    </div>
                </div>

            </section>
            {/* END PRINT CONTENT........................ */}

            {/* SEND US MESSAGE......................... */}
            
            <section className="message-us">
                <div className="send-message">
                    <div className="message-img">
                        <img src={MessageUs} alt=""  data-aos="zoom-in-up"/>
                    </div>
                    <div className="message-write">
                        <span  data-aos="slide-in">
                        At Closeseller Print, we're committed to providing our customers with the best possible service and products. 
<br /><br />
We pride ourselves on our attention to detail, our commitment to quality, and our ability to deliver customized products that meet our customers' unique needs and preferences. 
<br /><br />
So if you're looking for high-quality, custom-made shirts and bags, look no further than Closeseller Print. 
                        </span>
                        <div className="hero-centerr">
                        <a href=""  data-aos="zoom-in">Send us a message today</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* END SEND US MESSAGE......................... */}

            <section className="closeprintqoute">
            <div className="print-quoter">
                <span data-aos="zoom-in">
                CloseSeller Print provides several benefits that can be advantageous for businesses of any scale. Below are three primary advantages of using CloseSeller Print:
                </span>
            </div>
           </section>

           {/* PRINTING SECTION.............. */}
           
           <section className="printing-sec">
            <div className="print-sec">
                <div className="print-contentt"  data-aos="zoom-in-up">
                    <span>High-Quality Printing:</span>
                    <p>
                    CloseSeller Print uses state-of-the-art printing technology to ensure that your print materials are of the highest quality. This means that your business cards, flyers, brochures, and other materials will look professional and eye-catching, helping you to make a great first impression with your customers and clients.
                    </p>
                </div>
                <div className="print-contentt"  data-aos="zoom-in-up">
                    <span>Customization Options:</span>
                    <p>
                    With CloseSeller Print, you have the ability to customize your print materials to meet your specific needs. 
<br />
Whether you need a unique design, specific paper type, or other customizations, CloseSeller Print can help you create print materials that are tailored to your brand and message.
                    </p>
                </div>
                <div className="print-contentt"  data-aos="zoom-in-up">
                    <span>Cost-Effective:</span>
                    <p>
                    CloseSeller Print offers competitive pricing on all of its printing services, making it an affordable option for businesses of all sizes. 
<br />
Plus, with the ability to order online and have your materials delivered directly to your door, you can save time and money on printing costs and distribution.
                    </p>
                </div>
            </div>
           </section>
           {/* END PRINTING SECTION.............. */}

           {/* EMAIL SECTION...................... */}
           <section className="mail-section">
    <div className="container">
      <div className="mail">
        <span  data-aos="fade-in">
        Don't wait another day to reach your marketing goals. Contact us now and let's make it happen!
        </span>
        <a href=""  data-aos="zoom-in">
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

export default Closesellerprint