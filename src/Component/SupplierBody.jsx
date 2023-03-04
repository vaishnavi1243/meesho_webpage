import seller_background from '../images/seller_background.png';
import sellers_img from '../images/sellers_img.png';
import '../css/SupplierBody.css'
import SellerCard from '../CommonComponent/Sellercard';

const SupplierBody=()=>
{
    return  (<>
    <div className="supplierbody">
        <div className="supplier_left">
       <div className="main_title">
       <h1 >Sell online to 11 Cr+ customers at</h1>
       </div>
       <div className="sub_title">
        <h1>0% Commission</h1>
       </div>
       <p>Become a Meesho seller and grow your business across India</p>
       <div className='number'>
        <div className='phn_number'><p>+91</p>
        <input type="tel" id="phone" name="phone" placeholder="Enter Your Mobile Number"/>
        </div>
        <input id="submit" type="submit" value="Start Selling"></input>
        </div>
        </div>
        <div className="supplier_right">
        <img className="background-image" src={seller_background} alt="Seller background" />
         <img className="sellers-img" src={sellers_img} alt="Seller image" />
          </div>
    </div>
    <div className='supplier_buttom_body'>
    
       <SellerCard card_title="6 lakh+" card_content="Trust Meesho to sell online"/>
       <SellerCard card_title="11 Crore+"  card_content="Customers buying across India" />
       <SellerCard card_title="28000+"  card_content="Pincode Supported for delivery" />
       <SellerCard card_title="700+"  card_content="Categories to sell online" />    
       </div>
    </>)
   
}
export default SupplierBody;