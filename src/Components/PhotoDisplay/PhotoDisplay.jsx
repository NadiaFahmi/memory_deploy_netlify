import React, { useContext } from "react";
import "./PhotoDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import PhotoItem from "../PhotoItem/PhotoItem";

const PhotoDisplay = ({category}) => {
  const { photo_list } = useContext(StoreContext)

  return (
    <div className="photo-display" id="photo-display">
      <h2>Top photos near you</h2>
      <div className="photo-display-list">
        {photo_list.map((item, index) => {
          
          if(category==="All" || category===item.category ){

            return  <PhotoItem 
            key={index}
            id={item._id}
            image={item.image}
            description={item.description}
          />

          }
      
                  })}
      </div>
    </div>
  );
};

export default PhotoDisplay;
