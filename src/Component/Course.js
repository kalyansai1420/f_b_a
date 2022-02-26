import React, { useEffect, useState } from 'react'
import course from '../course.json'
import Card from '../Components/Card'
import './Course.css'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import { Media } from 'react-breakpoints'


const Course = () => {

    const [data, setData] = useState([]);

    const [viewType, setViewType] = useState("grid");

    console.log(course)

    useEffect(() => {
        console.log(course);
        setData(course);
    }, [viewType])
    return (
        <div className='container'>
            <h1>Course</h1>
            <Media>
                {({ breakpoints, currentBreakpoint }) =>
                    breakpoints[currentBreakpoint] > breakpoints.desktop ? (
                        <ButtonGroup disableElevation variant="text" className='buttongroup'>
                            <Button color="success" onClick={() => setViewType('grid')} startIcon={<GridViewIcon />} variant={viewType === 'grid' ? 'outlined' : 'contained'}>Grid</Button>
                            <Button onClick={() => setViewType('list')} startIcon={<ListIcon />} variant={viewType === 'list' ? 'outlined' : 'contained'}>List</Button>
                        </ButtonGroup>
                    ) : (
                        <div></div>
                    )
                }
            </Media>

            <div className='admin_cards'
                className={viewType === 'list' ? 'admin_cards_lists' : 'admin_cards_grid'}>
                
                <h1>Courses</h1>
                {
                    data.map((lists) => {
                        return (
                            <Card lists={lists} isListView={viewType === "list"} />
                        )
                    })
                }

            </div>
        </div>

    )
}


export default Course