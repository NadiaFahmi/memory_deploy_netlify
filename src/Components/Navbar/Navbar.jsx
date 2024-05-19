import React ,{useState}from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { assets } from '../Assets/All_image';


const Navbar = () => {
  const [menu, setMenu] =useState("Home");
  return (
    <div className='navbar'>
      <div className='contact-left'>
      <h1>Memories</h1>
      <span className=''></span>
 
      </div>
           
      
      <ul className='navbar-menu'>

        
        <Link onClick={()=>setMenu("Home")} className={menu==="Home" ?"active":""}>Home</Link>
        <a href='#explore-menu'onClick={()=>setMenu("Explore")} className={menu==="Explore" ?"active" :""}>Explore</a>
        
        <a href='#photo-display' onClick={()=>setMenu("Display")} className={menu==="Display" ?"active" :""}>Display</a>
        <a href='#about' onClick={()=>setMenu("About")} className={menu==="About" ?"active" :""}>Special day</a>
             
      </ul>
      
        
      <div className='nadia'>
      <img src={assets.Nadia}  className='nadia'/>
      </div>
   

    
    </div>
  )
}

export default Navbar
//<li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>
// {menu==="home" ?<img src={underline} alt='' />:<></>}</li>

