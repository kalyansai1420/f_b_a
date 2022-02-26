import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    const location = useLocation();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className={
                location.pathname == '/admin' ?
                    'navbar admin' :
                location.pathname == '/student' ?
                        'navbar student' :
                location.pathname == ""
                }>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-linksmain">
                        Boxing Academy
                    </NavLink>
                    <div className="nav-space">

                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {
                            location.pathname == '/admin' ?
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            to="/admin"
                                            activeClassName="active"
                                            className="nav-links"
                                            onClick={handleClick}
                                        >
                                            Academy
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            to="/admin/viewCourse"
                                            activeClassName="active"
                                            className="nav-links"
                                            onClick={handleClick}
                                        >
                                            Course
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            to="/contact"
                                            activeClassName="active"
                                            className="nav-links"
                                            onClick={handleClick}
                                        >
                                            Students
                                        </NavLink>
                                    </li>
                                    <NavLink
                                        exact
                                        to="/portfolio"
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >
                                        Log Out
                                    </NavLink>
                                </> :
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            to="/student"
                                            activeClassName="active"
                                            className="nav-links"
                                            onClick={handleClick}
                                        >
                                            Academy
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            to="/"
                                            activeClassName="active"
                                            className="nav-links"
                                            onClick={handleClick}
                                        >
                                            Enrolled Courses
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact
                                            to="/portfolio"
                                            activeClassName="active"
                                            className="nav-links"
                                            onClick={handleClick}
                                        >
                                            Log Out 
                                        </NavLink>
                                    </li>
                                </>
                        }

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ?
                            "fas fa-times"
                            :
                            "fas fa-bars"
                        }></i>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar