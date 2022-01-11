import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BannerText from './BannerText/BannerText';

const SubHome = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        height: '80vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <BannerText></BannerText>
                </Box>
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        height: '80vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img style={{ width: '80%' }} src="https://i.ibb.co/M6XKnM4/office.png" alt="" />
                </Box>
            </Box>
        </Container>
    );
};

export default SubHome;