import React from 'react'
import Academy from '../Component/Academy'
import Navbar from '../Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from '../Component/Course';


const Admin = () => {
  return (
    <div>
      <Navbar />
      <Academy />
      
     
    </div>
  )
}

export default Admin