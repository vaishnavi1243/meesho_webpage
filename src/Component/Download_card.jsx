import Button from "../CommonComponent/Button";

const Download_Card=()=>
{
    return(
        <>
        <div className="header_card">
        <div className="download_card">
         <h5>Download From a</h5>
         <Button name="Google Play"/>
         <Button name="App Store"/>
        </div>
        </div>
        </>
    )
}
export default Download_Card;