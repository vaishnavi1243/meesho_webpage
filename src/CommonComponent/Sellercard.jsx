
import '../css/seller_card.css'


const SellerCard=(props)=>
{
    return (<>
    <div className="seller_card_banner">
    <div className="card_title">
      {props.card_title}
    </div>
    <div className="card_content">
      {props.card_content}
    </div>
    </div>
    </>)

    
}
export default SellerCard;