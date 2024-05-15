import {createContext} from 'react'
import { photo_list } from '../Components/Assets/All_image';

export const StoreContext=createContext(null);


const StoreContextProvider=(props)=>{

  
const contextValue={
    photo_list
    
    
  }
  return (

    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider