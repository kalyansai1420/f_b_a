
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './Pages/Admin';
import Student from './Pages/Student';
import Course from './Component/Course';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Register from './Pages/Register';

function App() {




  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="viewCourses" element={<Course />} />
          <Route path="student" element={<Student />}>
            <Route path="viewCourses" element={<Course />} />
          </Route>

          <Route path="admin" element={<Admin />}>
            <Route path="viewCourses" element={<Course />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

