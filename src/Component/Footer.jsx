import React from "react";
import '../css/footer.css';

import accordionData from '../Constants/Footercontent';
import Accordion from "../CommonComponent/Accordion";
import Socialmedia from "../CommonComponent/Socialmedia";
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import Button from "../CommonComponent/Button";
const Footer=()=>
{
    return (
    <>
    {/* <h1>welcome to footer</h1> */}
    <div className="footer_container">
        <div className="footer_upper">
            <div className="ads_one">  
            <div className="ads_info_one">     
              <h4>Shop Non-Stop on Meesho</h4>
            </div>
            <div className="ads_info_two">
                <p>Trusted by more than 1 Crore Indians</p>
                <p>Cash on Delivery | Free Delivery</p>

                
            </div>
            <div>
               <Button name="Google Play"/>
               <Button name="App Store"/>
            </div>
            </div>
            <div className="ads_two">
            <div className="ads_info_three">
                    <p>Career</p>
                    <p>Become a Supplier</p>
                    <p>Hall of Fame</p>

                </div>
            </div>
            <div className="ads_three">
            <div className="ads_info_four">
                    <p>Leagal and Policies</p>
                    <p>Meesho Tech Blog</p>
                    <p>Notices and Returns</p>

                </div>
                </div>
                <div className="social_media_ads">
                    <div className="add_info_five"><h5>Reach out to us</h5></div>
                    <div className="social_media">
                 <Socialmedia src={facebook} alt="facebook"/>
                 <Socialmedia src={instagram} alt="instagram" />
                 <Socialmedia src={youtube} alt="youtube"/>
                 <Socialmedia src={linkedin}  alt="linkedin" />
                 <Socialmedia src={twitter} alt="twitter"/>
                </div>
                </div>
                <div className="contact_us">
                    <h4>Contact Us</h4>
                <h5>Fashnear Technologies Private Limited,
                    CIN: U74900KA2015PTC082263
                    06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
                    E-mail address: query@meesho.com
                    © 2015-2022 Meesho.com</h5>
                </div>
            
        
            
            </div>
        
        <div className="footer_buttom">
        <div className="accordion">
        
          <Accordion  content={accordionData} />
    
      </div>
        </div>
    </div>
    </>
    )

    }
export default Footer;