import Banner from "../CommonComponent/Banner";
import '../css/Bannerspage.css'
import quality_banner from '../images/quality_banner.png'
import category_banner from '../images/category_banner.png'
import essentials_banner from '../images/essentials_banner.png'
import onlinebussiness_banner from '../images/onlinebussiness_banner.png'
import register_banner from '../images/register_banner.png'
const Bannerspage=()=>
{
    return(
        <>
   <div className="quality_banner"><img src={quality_banner} alt="Quality And Price Banner" /></div>
   <div className="category_title"><span>Top Categories to choose from</span></div>
     <Banner src={category_banner}  />
     <Banner src={essentials_banner}/>
     <Banner src={onlinebussiness_banner}/>
     <div className="register_banner"><img src={register_banner}/></div>
        </>
    )
}
export default Bannerspage;