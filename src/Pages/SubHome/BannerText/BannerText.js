import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './bannerText.css'

const BannerText = () => {
    return (
        <Box>
            <Typography variant='h4'>
                Welcome to <span className='appName'>Our Office</span>
            </Typography>
            <Typography>
                <span className='appName'>Our Office</span> is an employee list maintenance Web Application. You can maintain the list of your employees by using Our Office.
                This is Totally free of cost.
            </Typography>
            <Button
                variant='outlined'
                className='outlinedBtn'
                sx={{ my: 2 }}
            >
                <Link to='/addEmployee' className='link btn-link'>Add a List</Link>
            </Button>
        </Box>
    );
};

export default BannerText;