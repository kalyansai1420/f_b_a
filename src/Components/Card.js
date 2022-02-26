import React, { useState } from 'react'
import './Card.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useLocation } from "react-router-dom";

const Card = (props) => {
    const { isListView = false, lists } = props;

    const location = useLocation();    
    const Switch = (str) => ({
        "/admin": "admin",
        "/student": "student",
    })[str] || 'null';
    console.log(Switch(location.pathname));
    
    

    return (
        <div className={ isListView==true?'card_list':'card_grid'}>
            <div className="card_img">
                <img src={lists.img} alt="" />
            </div>
            <div 
                className={isListView == true ? 'card_details_list' : 'card_details_grid'}
            >
                <h3>{lists.title}</h3>
                <p>{lists.desc}</p>
                <div className="card_row">
                    <h4>Rating:
                        {[...Array(5)].map(() => {
                            return (
                                <span>🌟</span>
                            );
                        })}
                    </h4>
                    <h4>Fee: {lists.fee}</h4>
                </div>
                <div className="card_row">
                    <h4>Place: {lists.place}</h4>
                    <h4>Pincode: {lists.pincode}</h4>
                </div>
            
            <div className="card_btn">
                {
                    location.pathname == '/admin' ?
                        <ButtonGroup variant="contained">
                            <Button variant="contained" size="small" color="success">
                                Edit
                            </Button>
                            <Button variant="contained" size="small" color="error">
                                Delete
                            </Button>
                            </ButtonGroup> :
                            location.pathname == '/student' ?
                        <Button variant="contained" size="small" color="success">
                            View Courses
                                </Button> :
                                location.pathname == ""


                }
                </div>
            </div>
           

        </div>
    )
}

export default Card