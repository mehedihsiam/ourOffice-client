import React from 'react';
import { List, ListItem, ListItemIcon } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import AddEmployee from '../Employees/AddEmployes/AddEmployee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faListAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link, Route, Switch } from 'react-router-dom';
import './Home.css';
import AllEmployees from '../Employees/AllEmployees/AllEmployees';
import SubHome from '../SubHome/SubHome';


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


    return (
        <Box>
            <Drawer variant="permanent">

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
                    <Link to='/allEmployees' className='link'>
                        <ListItem>
                            <ListItemIcon sx={{ textAlign: 'center' }}>
                                <abbr title="Employee List"><FontAwesomeIcon icon={faListAlt} /></abbr>
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Switch>
                    <Route exact path='/'>
                        <SubHome></SubHome>
                    </Route>
                    <Route path='/home'>
                        <SubHome></SubHome>
                    </Route>
                    <Route path='/addEmployee'>
                        <AddEmployee></AddEmployee>
                    </Route>
                    <Route path='/allEmployees'>
                        <AllEmployees></AllEmployees>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

export default Home;