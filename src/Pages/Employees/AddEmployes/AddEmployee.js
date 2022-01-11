import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AddByCsv from './AddByCsv/AddByCsv';

const AddEmployee = () => {
    const { register, handleSubmit, reset } = useForm();
    const [addByFile, setAddByFile] = useState(false);
    const onSubmit = (employeeData) => {

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
                className='text-a'
                variant='h4'
                sx={{ my: 5, fontSize: { xs: '1rem', md: '2rem' } }}
            >Add an Employee</Typography>
            {
                addByFile ?
                    <>

                        <AddByCsv></AddByCsv>
                        <br />
                        <Button
                            className='outlinedBtn'
                            onClick={() => setAddByFile(false)}>Add By Input</Button>
                    </>
                    :
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                label="Firs Name"
                                variant="outlined"
                                required
                                sx={{ width: '50%' }}
                                {...register("firstName")} />
                            <br />
                            <br />
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                required
                                sx={{ width: '50%' }}
                                {...register("lastName")} />
                            <br />
                            <br />
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                required
                                sx={{ width: '50%' }}
                                {...register("email")} />
                            <br />
                            <br />
                            <Button
                                type='submit'
                                className='fieledBtn'
                            >Add</Button>
                        </form>
                        <br />
                        <Button

                            className='outlinedBtn'
                            onClick={() => setAddByFile(true)}>Add By CSV File</Button>
                    </>
            }

        </div>
    );
};

export default AddEmployee;