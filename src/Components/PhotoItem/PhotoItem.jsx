import React from 'react'
import './PhotoItem.css'
// import {assets} from '../Assets/All_image'

const PhotoItem = ({id,description,image}) => {
  
  return (
    <div className='photo-item'>
      <div className="photo-item-img-container">
        <img className='photo-item-image item'src={image} alt=''/>
            </div>
      <div className="photo-item-info">
        <p className='photo-item-desc'>{description}</p>
      </div>

    </div>
  )
}

export default PhotoItem