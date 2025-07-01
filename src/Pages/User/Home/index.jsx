import React from 'react'
import Hero from '../../../Components/User/Hero'
import AboutUs from '../../../Components/User/About us'
import FeatureRooms from '../../../Components/User/FeatureRooms'
import RoomCategories from '../../../Components/User/RoomCategories'
import VideoSection from '../../../Components/User/Videosection'
import Facilities from '../../../Components/User/Facilities'
import Gallery from '../../../Components/User/Gallery'
import Testimonials from '../../../Components/User/Testimonials'
function index() {
  return (
    <div>
      <Hero/>
      <AboutUs/>  
      <FeatureRooms/>
      <RoomCategories/>
      <VideoSection/>
      <Facilities/>
      <Gallery/>
      <Testimonials/>
    </div>
  )
}

export default index
