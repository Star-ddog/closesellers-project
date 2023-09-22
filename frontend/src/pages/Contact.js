import {React, useState} from 'react'
import './contact.css';
import arrow from '../image/home/arrow.png'
import Footer from '../components/Footer';

const Contact = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');


  const handleOnSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let result = await fetch('https://closeseller-api.vercel.app/save', {
        method: 'POST',
        body: JSON.stringify({ name, number, email, message, company }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      result = await result.json();
      console.warn(result);
      if (result) {
        setName('');
        setNumber('');
        setEmail('');
        setMessage('');
        setCompany('');
        alert(" Hello, you have successfully sent us a Message!!!")
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  

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

                <form action='' >
                  <div className="inputs">
                   <div>
                   <input type="text" placeholder="Enter Full Name" value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input type="text" placeholder='Phone Number'
                    value={number} onChange={(e) => setNumber(e.target.value)}/>        
                   </div>
                    <div>
                    <input type="email" placeholder='Email'
                    value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <input type="email" placeholder='Email'
                    value={company} onChange={(e) => setCompany(e.target.value)}/>
                    </div>
                  </div>
                  <div>
                    <label >Message Us</label>
                    <textarea  id="" cols="80" rows="10"
                     value={message} onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button type="submit"
                  onClick={handleOnSubmit}>submit</button>
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