import React from 'react';
import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Tooltip, Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddEmployee from '../Employees/AddEmployes/AddEmployee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlusCircle, faListAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Home.css';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Home = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            {/* <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white' }}> */}
            {/* <Toolbar>
                <IconButton
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Our Office
                </Typography>
            </Toolbar> */}
            {/* </AppBar> */}
            <Drawer variant="permanent" open={open}>
                {/* <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader> */}
                {/* <Divider /> */}
                <List sx={{ backgroundColor: 'tomato', height: '100%' }}>
                    <Link to='/home' className='link'>
                        <ListItem>
                            <ListItemIcon sx={{ textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faHome} />
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                    <Link to='/addEmployee' className='link'>
                        <ListItem>
                            <ListItemIcon sx={{ textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faPlusCircle} />
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                    <Link to='/' className='link'>
                        <ListItem>
                            <ListItemIcon sx={{ textAlign: 'center' }}>
                                <abbr title="Employee List"><FontAwesomeIcon icon={faListAlt} /></abbr>
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* <DrawerHeader /> */}
                <AddEmployee></AddEmployee>
            </Box>
        </Box>
    );
};

export default Home;