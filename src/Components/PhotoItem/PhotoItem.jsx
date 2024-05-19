import React from 'react'
import './PhotoItem.css'
import { Link } from 'react-router-dom'
// import {assets} from '../Assets/All_image'

const PhotoItem = ({id,description,image}) => {
  
  return (
    <div className='photo-item'>
      <div className="photo-item-img-container">
        {/* <img className='photo-item-image item'src={image} alt=''/> */}
        <Link to={`/product/${id}`}> <img onClick={window.scrollTo(0,0)}className='photo-item-image item'src={image} alt=''/></Link>
       

            </div>
      <div className="photo-item-info">
        <p className='photo-item-desc'>{description}</p>
      </div>

    </div>
  )
}

export default PhotoItem