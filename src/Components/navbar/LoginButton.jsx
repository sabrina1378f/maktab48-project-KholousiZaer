import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { BsFillPersonFill } from "react-icons/bs";
import { Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';



export const LoginButton = ({ label, handleClick }) => {
    return (
        <div>

            <Button onClick={handleClick} variant="contained"
                style={{ backgroundColor: "#633410", color: 'white' }}

                endIcon={<AccountCircle style={{ color: 'white ' }} />}>
                {label} </Button>
        </div>


    )
}


export const LoginButton_phone = ({ handleClick, label }) => {
    return (<IconButton color="inherit" onClick={handleClick} >
        <Typography variant='h6'>
            {label}
        </Typography>
    </IconButton>)
}