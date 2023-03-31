import React from 'react';
import logo from '../../asset/image/Footer/logo.png'
import '../../asset/css/footer.css'
import {Link} from 'react-router-dom'
import {FaEnvelope, FaArrowRight, FaFacebookF, FaTwitter, FaWhatsapp, FaPinterest} from 'react-icons/fa'
export default function Footer() {
  return (
      <footer>
        <div className='row'>
          <div className="col">
          <div className="logo">
              <img  src={logo} alt="error" width={250} height={120}/>
            </div>
            <p className='param'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum ut, corrupti nesciunt, aliquid temporibus accusantium quod, facilis sequi doloribus totam quos. Corrupti adipisci dolores porro dolore similique velit eligendi.</p>
          </div>
          <div className="col">
            <h3>Office <div className='underline'><span></span></div></h3>
            <p>ITPL Road</p>
            <p>Whitefie, Bangalore</p>
            <p>Karnataka, PIN 560066, India</p>
            <p className="email-id">anhcbbs@outlook.com</p>
            <h4>+84 - 0123456789</h4>
          </div>
          <div className="col">
            <h3 className='h3-right'>Links <div className='underline'><span></span></div></h3>
            <ul>
              <li><Link className='goto' to={`/`}>Home</Link></li>
              <li><Link className='goto' to={`/`}>Services</Link></li>
              <li><Link className='goto' to={`/`}>About Us</Link></li>
              <li><Link className='goto' to={`/`}>Features</Link></li>
              <li><Link className='goto' to={`/`}>Contacts</Link></li>
            </ul>
          </div>
          <div className="col">
              <h3>Newsletter <div className='underline'><span></span></div></h3>
              <form>
                  <FaEnvelope className='icon-mail' />
                  <input type="email" placeholder='Enter your email id' required />
                  <button type='submit'>
                    <FaArrowRight className='icon-right'  color='white'/>
                  </button>
              </form>
              <div className="social-icons">
                <div className="fab">
                  <FaFacebookF size={25} />
                </div>
                <div className="fab">
                  <FaTwitter size={25} />
                </div>
                <div className="fab">
                  <FaWhatsapp size={25}/>
                </div>
                <div className="fab">
                  <FaPinterest size={25}/>
                </div>
              </div>
          </div>
          <hr></hr>
          <p className="copyright">Cau lac bo ITC @ 2021 - All Rights Reserved</p>
        </div>
      </footer>
        
  )
}