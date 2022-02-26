import React from 'react'
import Academy from '../Component/Academy'
import Navbar from '../Components/Navbar'
import { useLocation } from "react-router-dom";


const Student = (props) => {

  
  return (
    <div>
      <Navbar />
      
      <Academy/>
    </div>
    
  )
}

export default Student