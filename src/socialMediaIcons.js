
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const SocialMediaIcons = () => {
    return ( 
        <div className="social-media-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            

        </div>
     );
}
 
export default SocialMediaIcons;