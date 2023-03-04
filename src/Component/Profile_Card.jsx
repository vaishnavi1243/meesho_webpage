import Button from "../CommonComponent/Button";
import '../css/header_card.css'
const Profile_Card=()=>
{
    return(
        <>
        <div className="header_card">
        <div className="download_card">
         <h5>Hello User</h5>
         <p>To access your meesho account</p>
         <Button name="Sign Up"/>
        <div className="divide"></div>
        <div className="profile_bottom">
        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
        <h6>My Orders</h6>
        </div>
        </div>
        </div>
        </>
    )
}
export default Profile_Card;