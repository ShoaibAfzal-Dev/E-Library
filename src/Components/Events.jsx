import React from 'react'
import "../Styles/Events.css"
import Card from './Card'
const Events = () => {
  const Events={
    "events": [
      {
        "title": "Author Spotlight: A Literary Evening with Sarah Parker",
        "date": "2023-06-15",
        "description": "Join us for an intimate evening with bestselling author Sarah Parker as she discusses her latest novel. Explore the captivating world of her storytelling and gain insights into her creative process.",
        "image": "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnklMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        "title": "Children's Storytelling Hour: Magic and Adventure",
        "date": "2023-06-22",
        "description": "Calling all young adventurers! Join us for an enchanting storytelling session filled with magical tales and exciting adventures. Let your imagination soar!",
        "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpYnJhcnklMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        "title": "Art Exhibition: Colors of Life",
        "date": "2023-07-05",
        "description": "Experience the vibrant world of art through our 'Colors of Life' exhibition. Discover a collection of stunning paintings and sculptures created by talented local artists.",
        "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpYnJhcnklMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        "title": "Tech Talk: Exploring Virtual Reality",
        "date": "2023-07-12",
        "description": "Immerse yourself in the fascinating world of virtual reality technology. Join us for a hands-on session where you can explore VR applications and discover the future of immersive experiences.",
        "image": "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2tzJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      }
    ]
  }
  
  return (
    <div className='events-section' id='events'>
      <h1>Events</h1>
      <div class="cards-container">
      {
        Events.events.map((s)=>{
          return(
            <>
       
  <div className="card">
    <h1>Title: {s.title}</h1>
    <p className="card-date">Date: {s.date}</p>
    <p>{s.description}</p>
    <img src={s.image} alt="images" />
  </div>

</>
          )
        })
      }
      </div>
      </div>
  )
}

export default Events