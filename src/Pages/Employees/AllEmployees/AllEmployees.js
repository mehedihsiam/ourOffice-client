import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Employee from './Employee/Employee';

const AllEmployees = () => {

    const [employees, setEmployees] = useState([])
    useEffect(() => {
        fetch('http://localhost:3006/employee/allEmployees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])

    return (
        <Container>
            {
                employees.length > 0 ?
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
                                    employees.map(employee => <Employee
                                        key={employee.id}
                                        employee={employee}
                                    ></Employee>)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <Typography variant='h3' sx={{ color: 'text.secondary', textAlign: 'center' }}>Employee List is EMPTY</Typography>
            }
        </Container>
    );
};

export default AllEmployees;