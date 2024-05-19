import React  from 'react'
import './PhotoPresent.css'
import { assets } from '../Assets/All_image'
import { useNavigate } from 'react-router-dom'


export const  PhotoPresent = (props) => {
const {product} =props
const navigate =useNavigate();
  return (
<div className='productdisplay'>
      
    {/* <img onClick={()=> navigate("/")} src={product.image} alt=''/> */}
     {/* <div>
      <img src={product.image} alt='' />
    </div>
       */}
         <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img' >
          <img onClick={()=> navigate("/")} className='productdisplay-main-img'src={product.image} alt=''/>
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>
          A picture I like to keep.</h1>
          <br></br>
          
          <h1>Keep it safe and be extra cautious at all times.</h1>
          <br></br>
          <h1>This gift will take some planning so keep it in your archeives.</h1>
          
        {/* lightweight, usually knitted, pullover shirt,close-fitting ,around neckline  and short sleeves, worn as an undershirt or outer gatment. */}
        
          
        </div>
      </div>

    </div>
 

    
  )
}
