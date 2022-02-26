
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './Pages/Admin';
import Student from './Pages/Student';
import Navbar from './Components/Navbar';
import Cards from './Components/Card';
import Course from './Component/Course';

function App() {

  


  return (
    <div className="app">
      <h1>Login</h1>
        <Router>
          <Routes>
          <Route exact path="student"
            element={
            <Student />
            } />
          <Route exact path="admin" element={<Admin />}>
            <Route path='viewCourse' element={<Course/>}/>
          </Route>
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
