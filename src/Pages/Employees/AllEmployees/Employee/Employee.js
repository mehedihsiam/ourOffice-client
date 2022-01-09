import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const Employee = ({ employee }) => {
    const { first_name, last_name, email, id } = employee;
    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>{first_name}</TableCell>
            <TableCell>{last_name}</TableCell>
            <TableCell align='right'>{email}</TableCell>
        </TableRow>
    );
};

export default Employee;