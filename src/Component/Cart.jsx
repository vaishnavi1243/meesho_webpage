import React from "react";
import cart_image from '../images/cart_image.png'
import '../css/Cart.css';
function Cart() {
    
  return (
    <>
      
      <div className="card">
              <div className="cartcard">
        <div><img  src={cart_image} /></div>
        <div className="signup_heading"><h5>Sign Up to view your cart items</h5></div>
        <div className="user_number">
        <div className="country ">
            <label>Country</label>
          <span className="number_type">IN +91</span>
          <div className="underline"></div>
          </div>
          
        <div className="number">
         <input ></input> 
        </div>
        </div>
        <div className="continue">
            <button className="continue_btn">continue</button>
        </div>
        <div className="button_text">
        <div className="buttom_text_one">
        By continuing, you agree to Meesho’s 

        </div >
        <div className="buttom_text_two">
        <a href="https://www.meesho.com/legal/terms-conditions"><span>Terms & Conditions</span> 
        <span className="seperation">and</span>  
        </a>
        <a href="https://www.meesho.com/legal/privacy"><span>Privacy Policy</span></a>
        </div>
        </div>
      </div> 
      </div>

    </>
  );
}

export default Cart;
