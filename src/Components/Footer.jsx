import React from 'react'
import "../Styles/Footer.css"
import { FaFacebookF , FaTwitter,FaInstagram} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-first">
            <img src="icon.png" alt="Icons image" />
        </div>
        {/* <div className="hr"></div> */}
        <div className="footer-second">
          <h3>Join us on Social media</h3>
            <FaFacebookF className='social-icon'/>
            <FaTwitter className='social-icon'/>
            <FaInstagram className='social-icon'/>
        </div>
    </div>
  )
}

export default Footer