import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { useParams } from 'react-router-dom';
import { PhotoPresent } from '../Components/PhotoPresent/PhotoPresent';

const Product = () => {

  const {photo_list}=useContext(StoreContext);
  const {photoId} =useParams();
  const product = photo_list.find((e)=> e.id ===Number(photoId))
  return (
    <div>
      <PhotoPresent product={product}/>
      

    </div>
  )
}

export default Product
//  key={index}
// id={item._id}
// image={item.image}
// description={item.description}
