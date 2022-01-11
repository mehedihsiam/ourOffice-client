import React from 'react';
import { Drawer, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import AddEmployee from '../Employees/AddEmployes/AddEmployee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faListAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link, Route, Switch } from 'react-router-dom';
import './Home.css';
import AllEmployees from '../Employees/AllEmployees/AllEmployees';
import SubHome from '../SubHome/SubHome';








const Home = () => {


    return (
        <>
            <Box>
                <Drawer variant="permanent">

                    <List sx={{ backgroundColor: '#e72c39', height: '100%' }}>

                        <ListItem>
                            <abbr title="Home">
                                <Link to='/home' className='link text-b routes'>
                                    <FontAwesomeIcon icon={faHome} />
                                </Link>
                            </abbr>
                        </ListItem>
                        <ListItem>
                            <abbr title="Add an employee">
                                <Link to='/addEmployee' className='link text-b routes'>
                                    <FontAwesomeIcon icon={faPlusCircle} />
                                </Link>
                            </abbr>
                        </ListItem>
                        <ListItem>
                            <abbr title="Employye List">
                                <Link to='/allEmployees' className='link text-b routes'>
                                    <FontAwesomeIcon icon={faListAlt} />
                                </Link>
                            </abbr>
                        </ListItem>
                    </List>
                </Drawer>

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
            {/* <Footer></Footer> */}
        </>
    );
};

export default Home;