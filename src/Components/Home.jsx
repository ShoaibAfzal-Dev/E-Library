import React from 'react'
import "../Styles/Home.css"
import  Events  from './Events'
import Find from './Find'
import Community from './Community'
import Footer from './Footer'
const Home = () => {
  return (
    <>
      <div className='Home'>
        <div className='home-first' 
style={{ 
  backgroundImage: `url("homs.jpg")` ,
  

}}        >
          <h1>
          </h1>
          <p>Open the door to inspiration, exploration, and limitless possibilities as you step into our library, where every page holds a new adventure.</p>
        </div>
        {/* <div className="home-second">
          <img src="brf .jpg" alt="Home image" />
        </div> */}
      </div>
      <Events/>
      <Find/>
      <Community/>
      <Footer/>
    </>
  )
}

export default Home