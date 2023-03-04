import '../css/Banner.css'; 

const Banner=(props)=>
{
 return(
    <>
    <div className="banner">
        <img src={props.src} alt=""/>
    </div>
    </>
 )
}
export default Banner;