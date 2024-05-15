import React from 'react'
import './ExploreMenu.css'
import { all_images } from '../Assets/All_image'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>My Little Family</h1>
       
      <div className='explore-menu-list'>
      {all_images.map((item,index)=>{
      return (
    
      <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
        
        <img  className={category===item.menu_name?"active":""}src={item.menu_image} alt='' />
          <p>{item.menu_name}</p>
        </div> 
      )
      
    })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu