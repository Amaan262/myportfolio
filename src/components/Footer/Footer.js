import React from 'react'
import './footer.css'
function Footer() {
  return (

    
    <footer>
        <span> &copy; 2021 Amaan Ahmad</span>
        <a href="https://www.linkedin.com/in/ahmadamaan/" rel="noreferrer" target="_blank">
            <img src={process.env.PUBLIC_URL+"images/icons/linkedin.svg"} alt="Linkedin"/>
        </a>
        <a href="https://www.instagram.com/a_maan_/" rel="noreferrer" target="_blank">
            <img src={process.env.PUBLIC_URL+"images/icons/insta.svg"}alt="instagram"/>
        </a>
        <a href="https://www.facebook.com/Amaannik" rel="noreferrer" target="_blank">
            <img src={process.env.PUBLIC_URL+"images/icons/facebook.svg"} alt="facebook"/>
        </a>
    </footer>
  )
}

export default Footer;