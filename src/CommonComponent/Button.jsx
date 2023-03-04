import '../css/Button.css'
 const Button=(props)=>
 {
    return(
    <>
    <div className='common_btn'> 
           <button id="btn">{props.name}</button>
            </div>
    </>
    )
 }
 export default Button;