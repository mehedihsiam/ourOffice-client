import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Employee from './Employee/Employee';
import ReactPaginate from 'react-paginate';
import './AllEmployees.css'

const AllEmployees = () => {

    const [employees, setEmployees] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const employeesPerPage = 5;
    const visitedEmployees = pageNumber * employeesPerPage;

    const diplayEmployees = employees.slice(visitedEmployees, visitedEmployees + employeesPerPage);

    useEffect(() => {
        fetch('http://localhost:3006/employee/allEmployees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])

    const pageCount = Math.ceil(employees.length / employeesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <Container>
            {
                employees.length > 0 ?
                    <>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }}>
                                <TableHead sx={{ backgroundColor: 'black' }}>
                                    <TableRow>
                                        <TableCell sx={{ color: 'white' }}>#</TableCell>
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
                        <ReactPaginate
                            previousLabel={"<< Previous"}
                            nextLabel={"Next >>"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBtns"}
                            previousLinkClassName={"previousBtn"}
                            nextLinkClassName={"nextBtn"}
                            activeClassName={"activeBtn"}
                            disabledClassName={"disabledBtn"}
                        />
                    </>
                    : <Typography variant='h3' sx={{ color: 'text.secondary', textAlign: 'center' }}>Employee List is EMPTY</Typography>
            }
        </Container>
    );
};

export default AllEmployees;