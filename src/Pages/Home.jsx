import React ,{useState} from 'react'
import Header from '../Components/Header/Header'
import ExploreMenu from '../Components/ExploreMenu/ExploreMenu'
import PhotoDisplay from '../Components/PhotoDisplay/PhotoDisplay'
import About from '../Components/About/About'
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer'
import Footer from '../Components/Footer/Footer'
const Home = () => {
  const [category, setCategory]=useState("All")
  const [playState , setPlayState] =useState(false)
  return (
    <div className='home'>

      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <PhotoDisplay category={category}/> 
      <About setPlayState={setPlayState}/>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Footer/>
      
    </div>
  )
}

export default Home