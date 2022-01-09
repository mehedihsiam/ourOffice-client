import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { parse } from 'papaparse';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AddByCsv from './AddByCsv/AddByCsv';

const AddEmployee = () => {
    const { register, handleSubmit, reset } = useForm();
    const [addByFile, setAddByFile] = useState(false);
    const onSubmit = employeeData => {

        axios.post('http://localhost:3006/employee/addEmployee', employeeData)
            .then(res => {
                console.log(res)
                if (res.request.status === 200) {
                    alert(`${employeeData.firstName} has aded as an Employee`)
                    reset();
                }
                else {
                    alert('Somethin went wrong')
                }
            });
    };
    return (
        <div>
            <Typography
                variant='h4'
                sx={{ my: 2, color: '#1976D2', fontSize: { xs: '1rem', md: '2rem' } }}
            >Add an Employee</Typography>
            {
                addByFile ?
                    <>

                        <AddByCsv></AddByCsv>
                        <br />
                        <Button variant='outlined' onClick={() => setAddByFile(false)}>Add By Input</Button>
                    </>
                    :
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                label="Firs Name"
                                variant="outlined"
                                required
                                {...register("firstName")} />
                            <br />
                            <br />
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                required
                                {...register("lastName")} />
                            <br />
                            <br />
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                required
                                {...register("email")} />
                            <br />
                            <br />
                            <Button
                                type='submit'
                                variant='contained'
                            >Add</Button>
                        </form>
                        <br />
                        <Button variant='outlined' onClick={() => setAddByFile(true)}>Add By CSV File</Button>
                    </>
            }
            {/* <input type="file" accept='file/CSV' name="" id="" /> */}

        </div>
    );
};

export default AddEmployee;