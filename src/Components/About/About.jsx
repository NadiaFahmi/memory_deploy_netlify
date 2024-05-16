import React from 'react'
import './About.css'

import { assets } from '../Assets/All_image'


  const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
      <div className='about-left'>
        {/* <img src={assets.nadeen} alt=''className='about-img' /> */}
        <img src={assets.norhan} alt=''className='about-img' />
        <img src={assets.play_icon} alt='' className='play-icon' onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className='about-right'>
        
        <h1>The big day has finally arrived 
          <span>(15 May 2024) </span></h1>
        <hr />

      <p>Dr. Nourhan ❤️ you Made us all proud </p>
        
        
       
        


      </div>
    </div>
  )
}

export default About


// "@babel/plugin-proposal-private-property-in-object": "^7.16.11",
