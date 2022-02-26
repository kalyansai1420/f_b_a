import React, { useEffect, useState } from 'react'
import info from '../academy.json'
import Card from '../Components/Card'
import './Academy.css'
import Autocomplete from '@mui/material/Autocomplete';
import { Input } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import { Media } from 'react-breakpoints'


const Academy = () => {


    const [data, setData] = useState([]);

    const [viewType, setViewType] = useState("grid");

  

    

    useEffect(() => {
        setData(info);
    }, [viewType])

    return (
        <div className='container'>
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
                className={viewType == 'list' ? 'admin_cards_lists' : 'admin_cards_grid'}>
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

export default Academy