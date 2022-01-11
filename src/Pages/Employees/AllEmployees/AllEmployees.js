import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Employee from './Employee/Employee';
import ReactPaginate from 'react-paginate';
import './AllEmployees.css'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const AllEmployees = () => {
    // states
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(0);


    useEffect(() => {
        fetch('http://localhost:3006/employee/allEmployees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])

    // paginations functions
    const employeesPerPage = 5;
    const visitedEmployees = page * employeesPerPage;

    const diplayEmployees = employees.slice(visitedEmployees, visitedEmployees + employeesPerPage);
    const pageCount = Math.ceil(employees.length / employeesPerPage);

    const changePage = ({ selected }) => {
        setPage(selected);
    }


    // search functions
    const { register, handleSubmit } = useForm();
    const onSubmit = (key) => {
        fetch(`http://localhost:3006/employee/searchedEmployees?email=${key.searchKeyword}`)
            .then(res => res.json())
            .then(data => setEmployees(data))
    };




    return (
        <Container>
            {
                employees.length > 0 ?
                    <>
                        <Typography
                            className='text-a'
                            variant='h4'
                            sx={{ mt: 5, fontSize: { xs: '1rem', md: '2rem' } }}
                        >All Employees</Typography>
                        <TableContainer component={Paper} sx={{ mt: 2 }}>
                            <Table sx={{ minWidth: 700 }}>
                                <TableHead sx={{ backgroundColor: '#e72c39' }}>
                                    <TableRow>
                                        <TableCell sx={{ color: 'white' }}>ID</TableCell>
                                        <TableCell sx={{ color: 'white' }}>First Name</TableCell>
                                        <TableCell sx={{ color: 'white' }}>Last Name</TableCell>
                                        <TableCell sx={{ color: 'white' }} align='right'>Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        diplayEmployees.map(employee => <Employee
                                            key={employee.id}
                                            employee={employee}
                                        ></Employee>)
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ mt: 6 }}>
                            <ReactPaginate
                                previousLabel={"<"}
                                nextLabel={">"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBtns"}
                                previousLinkClassName={"previousBtn"}
                                nextLinkClassName={"nextBtn"}
                                activeClassName={"activeBtn"}
                                disabledClassName={"disabledBtn"}
                            />
                        </Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                hiddenLabel
                                label="Search by email"
                                variant="outlined"
                                size="small"
                                {...register("searchKeyword")}
                            />
                            <Button
                                className='fieledBtn'
                                sx={{ py: 1.5, mx: 2 }}
                                type='submit'
                            ><FontAwesomeIcon icon={faSearch} /> </Button>
                        </form>
                    </>
                    : <Typography variant='h3' sx={{ color: 'text.secondary', textAlign: 'center' }}>Employee List is EMPTY</Typography>
            }
        </Container>
    );
};

export default AllEmployees;